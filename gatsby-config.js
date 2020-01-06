module.exports = {
  siteMetadata: {
    title: `Wayfare Studios - Full Service Digital Agency`,
    description: `Web Design, Development, SEO and Digital Marketing Experts. Get a free proposal today!`,
    author: `Wayfare Studios`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-155379175-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wayfare Studios - Full Service Digitial Agency`,
        short_name: `Wayfare Studios`,
        start_url: `/`,
        background_color: `#f9f9f9`,
        theme_color: `#14191c`,
        display: `fullscreen`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    //PWA (must be placed after gatsby-plugin-manifest)
    `gatsby-plugin-remove-serviceworker`,
  ],
};
