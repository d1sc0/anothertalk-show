import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Episode from "../components/episode"

const EpisodePostTemplate = ({ data, pageContext }) => {
  const {
    frontmatter: { title, date, path, author, coverImage, excerpt, tags },
    excerpt: autoExcerpt,
    fields: { readingTime },
    id,
    html,
  } = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      <Episode
        key={id}
        title={title}
        date={date}
        path={path}
        author={author}
        readingTime={readingTime}
        coverImage={coverImage}
        html={html}
        tags={tags}
        previousPost={previous}
        nextPost={next}
      />
    </Layout>
  )
}

export default EpisodePostTemplate

EpisodePostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.object,
    previous: PropTypes.object,
  }),
}

export const pageQuery = graphql`
  query($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        path
        author
        excerpt
        tags
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
      id
      html
      excerpt
    }
  }
`
