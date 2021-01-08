import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Episode from "../components/episode"
import Navigation from "../components/navigation"

import "../styles/layout.css"

const Tags = ({
  data,
  pageContext: { nextPagePath, previousPagePath, tag },
}) => {
  const {
    allMarkdownRemark: { edges: episodes },
  } = data

  return (
    <>
      <SEO title="related posts"/>
      <Layout>
        <div className="infoBanner">
          Episodes with tag: <span>#{tag}</span>
        </div>

        {episodes.map(({ node }) => {
          const {
            id,
            excerpt: autoExcerpt,
            frontmatter: {
              title,
              date,
              path,
              author,
              coverImage,
              excerpt,
              tags,
            },
            fields: { readingTime },
          } = node

          return (
            <Episode
              key={id}
              title={title}
              date={date}
              path={path}
              author={author}
              tags={tags}
              readingTime={readingTime}
              coverImage={coverImage}
              excerpt={excerpt || autoExcerpt}
            />
          )
        })}

        <Navigation
          previousPath={previousPagePath}
          previousLabel="Newer episodes"
          nextPath={nextPagePath}
          nextLabel="Older episodes"
        />
      </Layout>
    </>
  )
}

Tags.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
}

export const episodesQuery = graphql`
  query($limit: Int!, $skip: Int!, $tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
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
        }
      }
    }
  }
`

export default Tags
