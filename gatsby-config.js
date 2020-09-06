/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
}
module.exports = {
  pathPrefix: "/404-page",
  plugins: [`gatsby-plugin-styled-components`,
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
