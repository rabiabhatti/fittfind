module.exports = {
  siteMetadata: {
    title: `Fittfind`,
    description: `Fittfind is the first truly decentralised fitness platform which provides a unique and pioneering online lead generation service to the Health and Fitness sector. We use Blockchain technology to greatly enhance security and privacy, signifi-cantly improve user experience, and intrinsically motivate users to workout, while creating an economic ecosystem that advances the economic prosperity of freelance fitness professionals’, gyms, boutique studios & the consumer.`,
    author: `https://github.com/rabiabhatti`,
    siteURL: 'http://localhost:8000/'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `images`,
          path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [
          'product',
          'category',
          'gender',
          'user'
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-replaceable.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
