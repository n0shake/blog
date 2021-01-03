if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: './.env.production.local', debug: true })
  require('dotenv').config({ path: './.env.production', debug: true })
}

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: './.env.development.local', debug: true })
  require('dotenv').config({ path: './.env.development', debug: true })
}

module.exports = {
  siteMetadata: {
    title: `Abhishek`,
    author: {
      name: `Abhishek`,
    },
    description: `Hello!`,
    siteUrl: `https://abhishekbanthia.com`,
    social: {
      twitter: `n0shake`,
    },
  },
  plugins: [
    {
        resolve: "@jamesdanylik/gatsby-source-goodreads",
        options: {
            key: process.env.GATSBY_GR_KEY,
            id: process.env.GATSBY_GR_IDENTIFIER,
        },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_TAG_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Karla`,
        ],
        display: 'swap',
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GA_IDENTIFIER,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-twitter`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/fav.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
