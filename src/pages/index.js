import React from 'react'
import { Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from '../styles/content.module.css'


const IndexPage = ({ data }) => {
  const latestEpisode = data.allMdx.edges[0].node
  return (
  <Layout>
    <SEO
      title="Home"
      description="Be Human - A podcast exploring human centered design, technology and change in a world of increasing complexity."
    />
    <div className={style.post}>
      <div className={style.postContent}>
        <p className={style.introText}>
          A podcast exploring <Link to="/about">human centered design, technology and change</Link> in a world of increasing complexity.
        </p>
        <p className={style.introText}>
          <p>Latest Episode: {latestEpisode.frontmatter.title}</p>
          {latestEpisode.frontmatter.url ? ( <audio src={latestEpisode.frontmatter.url} controls>Your browser does not support the audio player! <a href={latestEpisode.frontmatter.url}>You can download here instead</a></audio> ) : null}
             
        </p>
      </div>
    </div>
  </Layout>
)}

export const data = graphql`
  query{
    allMdx(
      filter: { fileAbsolutePath: { regex: "//episodes//" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
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

export default IndexPage
