import React from 'react'
import { Link, graphql} from 'gatsby'
import { toKebabCase } from '../helpers'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from '../styles/content.module.css'


const IndexPage = ({ data }) => {
  const {
    frontmatter: { title, date, path, url, duration, tags, season, episodeNumber },
  } = data.allMdx.edges[0].node
  
  const mins = Math.floor(duration / 60)
  const secs = duration - mins * 60
  return (
  <Layout>
    <SEO
      title="Home"
      description="Another Talk Show - A podcast of interviews of talented people who aren't yet famous!"
    />
    <div className={style.post}>
      <div className={style.postContent}>
        <p className={style.introText}>
          A talk show where a <Link to="/about">fairly ordinary host </Link>interviews <Link to="/about">talented people</Link> who aren't yet famous!
        </p>
      <div className={style.player}>
        <h1>LATEST EPISODE</h1>
        <h2>
          <Link to={path}>{title}</Link>
        </h2>
          <div className={style.meta}>
              S{season}:E{episodeNumber}
              {' // '}
              {date}
              {' // '}
              {mins} mins {secs} secs
            </div>
          {url ? ( <audio src={url} controls>Your browser does not support the audio player! <a href={url}>You can download here instead</a><track kind='captions' label={title}/></audio> ) : null}
             
{tags ? (
              <div className={style.tags}>
                {tags.map(tag => (
                  <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                    <span className={style.tag}>#{tag}</span>
                  </Link>
                ))}
              </div>
            ) : null}

        </div>
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
            date(formatString: "D MMMM YYYY")
            path
            tags
            url
            duration
            season
            episodeNumber
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
