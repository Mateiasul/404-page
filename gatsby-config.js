/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
}
module.exports = {
  siteMetadata: {
    title: "A simple 404",
    description:
      "A simple 404 made as some fun and practice adventure.",
  },
  pathPrefix: "/404-page",
  plugins: [`gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inconsolata`,
          `Montserrat`,
          `Space Mono\:300,400,400i,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    "gatsby-plugin-breakpoints",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
  ],  
}
