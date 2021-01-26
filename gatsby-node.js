const path = require(`path`)
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

exports.onCreateNode = async ({ node, actions, store, getNode, getCache }) => {
  const { createNodeField } = actions

  if (node.internal.type === `GoodreadsBook`) {
    let imageURL = node.image_url
    const { createNode } = actions

    var excludedISBNS = new Set()
    excludedISBNS.add("1982126809")
    excludedISBNS.add("9350296918")
    excludedISBNS.add("0593152387")
    excludedISBNS.add("1912248700")
    excludedISBNS.add("1514803534")
    excludedISBNS.add("0552113824")

    if (excludedISBNS.has(node.isbn) == false && node.isbn !== "") {
      imageURL = "https://covers.openlibrary.org/b/ISBN/" + node.isbn + "-M.jpg"
    }

    console.log(imageURL)
    
    let fileNode
    try {
      fileNode = await createRemoteFileNode({
        url: imageURL, // The actual image url
        node, // The id of the parent node (i.e. the node to which the new remote File node will be linked to.
        getCache,  // Gatsby's cache which the helper uses to check if the file has been downloaded already.
        createNode,  // The action used to create nodes
        createNodeId: id => `book-${id}`,  // Helper function
        ext: ".png",
      })
    } catch (e) {
      console.log('Exception occurred')
      console.log(e)
    }
  
    if (fileNode) {
      node.localFile___NODE = fileNode.id
    } else {
      console.log('there is no node')
    }
  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}