import React from 'react'
import { Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import Subscribe from '../components/subscribe'
import Player from '../components/player'
import SEO from '../components/seo'
import style from '../styles/content.module.css'


const IndexPage = ({ data }) => {
  const {
    frontmatter: { title, date, path, url, duration, tags, season, episodeNumber, subtitle },
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

        <div className={style.home}>
            <div className={style.homeImage}>
               
            </div>  

            <div className={style.homeText}>
              A talk show where a <Link to="/about">fairly ordinary host </Link>interviews <Link to="/about">talented people</Link> who aren't yet famous!
            </div>
        </div>

        <Player 
          title={title}
          date={date}
          path={path}
          tags={tags}
          url={url}
          season={season}
          episodeNumber={episodeNumber}
          subtitle={subtitle} 
          mins={mins}
          secs={secs}
        />

        <Subscribe />

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
            subtitle
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
