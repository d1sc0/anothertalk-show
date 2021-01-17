import React from 'react'
import { Link } from 'gatsby'
import style from '../styles/content.module.css'

const Subscribe = () => {
  return (
    <div className={style.subscribe}>
          <h2>Subscribe with your favourite player</h2>
          <div className={style.subbuttons}>
            <button><Link to=''>Apple Podcasts</Link></button>
            <button><Link to=''>Google Podcasts</Link></button>
            <button><Link to=''>Spotify Podcasts</Link></button>
         </div> 
         <Link to='/podcast-feed-rss.xml'>RSS Feed</Link>
        </div>
  )
}

export default Subscribe
