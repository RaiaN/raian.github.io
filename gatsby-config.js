module.exports = {
  siteMetadata: {
    author: "Petr Leontev",
    description: "Petr Leontev's technical blog",
    title: "Petr Leontev - Tech Entrepreneur & Unreal Engineer",
    siteUrl: "https://peterleontev.com",
    social: {
      twitter: "PetrLeontev",
    },
    disqusID: "peterleontev"
  },
  plugins: [
    "gatsby-remark-images",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "blog",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true
      },
    },
    {
      resolve: "gatsby-plugin-styled-jsx",
      options: {
        jsxPlugins: ["styled-jsx-plugin-postcss"],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-BBXHR6HKTT", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-139915107-1",
        head: true,
      },
    }
  ],
}
