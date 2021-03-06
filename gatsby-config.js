const postCssPresetEnv = require(`postcss-preset-env`)
const postCSSNested = require('postcss-nested')
const postCSSUrl = require('postcss-url')
const postCSSImports = require('postcss-import')
const cssnano = require('cssnano')
const postCSSMixins = require('postcss-mixins')

module.exports = {
  siteMetadata: {
    title: `Another Talk Show`,
    description: `Another Talk Show - A fairly ordinary host interviews interesting people who aren't famous. Interesting, talented people who are trying to make the world a little bit brighter or better!`,
    author: `Stuart Mackenzie`,
    logo: {
      src: '',
      alt: '',
    },
    siteUrl: `https://anothertalk.show/`,
    logoText: 'Another Talk Show',
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
              maxWidth: 1100,
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
        name: `Another Talk Show`,
        short_name: `AnotherTalkShow`,
        start_url: `/`,
        background_color: `#292a2d`,
        theme_color: `#292a2d`,
        display: `minimal-ui`,
        icon: `static/ats-logo.png`,
      },
    },

    {
      resolve: `gatsby-plugin-podcast-feed-mdx`,
      options: {
        title: `Another Talk Show`,
        subtitle: `A podcast where a fairly ordinary host interviews interesting people who aren't famous!`,
        description: `A podcast where a fairly ordinary host interviews interesting people who aren't famous!`,
        summary: `Another Talk Show - A fairly ordinary host interviews interesting people who aren't famous. Interesting, talented people who are trying to make the world a little bit brighter or better!`,
        podcastType: `episodic`,
        siteUrl: `https://anothertalk.show`,
        imageUrl: `https://anothertalk.show/ats_cover_art.png`,
        feedUrl: `https://anothertalk.show/podcast-rss-feed.xml`,
        language: `en-gb`,
        copyright: `Copyright © 2020 Stuart Mackenzie`,
        authorName: `Stuart Mackenzie`,
        ownerName: `Stuart Mackenzie`,
        ownerEmail: `mail@anothertalk.show`,
        managingEditor: `mail@anothertalk.show`,
        webMaster: `mail@anothertalk.show`,
        explicit: `no`,
        publicationDate: `Jan 01, 2021 10:00:00 GMT`,
        category1: `Society & Culture`,
        subCategory1: `Documentary`,
        category2: `News`,
        subCategory2: `News Commentary`,
        category3: `Science`,
        subCategory3: `Social Sciences`,
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
