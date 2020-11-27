
import { createRemoteFileNode } from "gatsby-source-filesystem"

async function onCreateNode({ node, actions, store, cache }) {
  if (node.internal.type === `GoodreadsBook`) {
    const imageURL = node.image_url
    console.log(imageURL)

    const { createNode } = actions
    // download image and create a File node
    // with gatsby-transformer-sharp and gatsby-plugin-sharp
    // that node will become an ImageSharp
    const fileNode = await createRemoteFileNode({
      url: imageURL,
      store,
      cache,
      createNode,
     createNodeId: id => `book-image-sharp-${id}`,
    })
  
    if (fileNode) {
      // link File node to DogImage node
      // at field image
      node.image___NODE = fileNode.id
    }
  }
}

export default onCreateNode
