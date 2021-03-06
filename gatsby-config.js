/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteTitle: "Neil Mastroianni",
    siteUrl: "https://neilmastroianni.com/",
    siteDescription:
      "Neil Mastroianni, perpetual learner, educator, and father.",
    siteImage: "",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `src`, `pages`),
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://cms.neilmastroianni.com/graphql`,
      },
    },
  ],
}
