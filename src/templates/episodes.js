import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Episode from '../components/episode'
import Navigation from '../components/navigation'

const Episodes = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
  const {
    allMdx: { edges: episodes },
  } = data

  return (
    <>
      <SEO
        title="Episodes"
        description="Episodes of Be Human"
      />
      <Layout>
        {episodes.map(({ node }) => {
          const {
            id,
            excerpt,
            frontmatter: {
              title,
              date,
              path,
              tags,
              url,
            },
            fields: { readingTime },
          } = node

          return (
            <Episode
              key={id}
              title={title}
              date={date}
              path={path}
              readingTime={readingTime}
              tags={tags}
              url={url}
              excerpt={excerpt}
            />
          )
        })}

        <Navigation
          previousPath={previousPagePath}
          previousLabel="Newer Episodes"
          nextPath={nextPagePath}
          nextLabel="Older Episodes"
        />
      </Layout>
    </>
  )
}

Episodes.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
  }),
}

export const episodesQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "//episodes//" } }
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
            tags
            url
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

export default Episodes
