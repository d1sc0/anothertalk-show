const postCssPresetEnv = require(`postcss-preset-env`)
const postCSSNested = require('postcss-nested')
const postCSSUrl = require('postcss-url')
const postCSSImports = require('postcss-import')
const cssnano = require('cssnano')
const postCSSMixins = require('postcss-mixins')

module.exports = {
  siteMetadata: {
    title: `Be Human`,
    description: `A podcast exploring human centered design, technology and change in a world of increasing complexity.`,
    author: `Stuart Mackenzie`,
    logo: {
      src: '',
      alt: '',
    },
    siteUrl: `https://behuman.xyz/`,
    logoText: 'be human',
    defaultTheme: 'dark',
    postsPerPage: 5,
    showMenuItems: 3,
    menuMoreText: 'Show more',
    mainMenu: [
      {
        title: 'About',
        path: '/about',
      },
      {
        title: 'Episodes',
        path: '/episodes',
      },
      {
        title: 'Contact',
        path: '/contact',
      },
    ],
  },
  plugins: [
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
        name: `episodes`,
        path: `${__dirname}/src/episodes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },


    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSUrl(),
          postCSSImports(),
          postCSSMixins(),
          postCSSNested(),
          postCssPresetEnv({
            importFrom: 'src/styles/variables.css',
            stage: 1,
            preserve: false,
          }),
          cssnano({
            preset: 'default',
          }),
        ],
      },
    },


    { 
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          {
            resolve: 'gatsby-remark-audio',
            options: {
            preload: 'auto',
            loop: false,
            controls: true,
            muted: false,
            autoplay: false
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-reading-time`,
        ],
    },
  },
    

  {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Be Human`,
        short_name: `be human`,
        start_url: `/`,
        background_color: `#292a2d`,
        theme_color: `#292a2d`,
        display: `minimal-ui`,
        icon: `static/behuman-logo.png`,
      },
    },

    {
      resolve: `gatsby-plugin-podcast-feed-mdx`,
      options: {
        title: `Be Human`,
        subtitle: `A podcast exploring human centered design, technology and change in a world of increasing complexity`,
        description: `A podcast exploring human centered design, technology and change in a world of increasing complexity`,
        summary: `Discussions and interviews with interesting people about design, technology and change`,
        podcastType: `episodic`,
        siteUrl: `https://behuman.xyz`,
        imageUrl: `https://behuman.xyz/behuman_cover.png`,
        feedUrl: `https://behuman.xyz/podcast-rss-feed.xml`,
        language: `en-gb`,
        copyright: `Copyright © 2020 Stuart Mackenzie`,
        authorName: `Stuart Macknenzie`,
        ownerName: `Stuart Macknenzie`,
        ownerEmail: `mail@behuman.xyz`,
        managingEditor: `mail@behuman.xyz`,
        webMaster: `mail@behuman.xyz`,
        explicit: `no`,
        publicationDate: `Jan 01, 2021 10:00:00 GMT`,
        category1: `Arts`,
        subCategory1: `Design`,
        category2: `Society & Culture`,
        subCategory2: `Documentary`,
        timeToLive: `60`,
        outputPath: `/podcast-rss-feed.xml`
      },
    },



    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-remark-reading-time`,
    `gatsby-remark-images`,
    `babel-preset-gatsby`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
  ],
}
