import React from 'react'
import style from '../styles/content.module.css'

const Subscribe = () => {
  return (
    <div className={style.subscribe}>
          <h2>Subscribe with your favourite player</h2>
          <div className={style.subbuttons}>
            <a href='https://google.com'>Apple Podcasts</a>
            <a href='https://google.com'>Google Podcasts</a>
            <a href='https://google.com'>Spotify Podcasts</a>
         </div> 
         <a href='/podcast-rss-feed.xml'>RSS Feed</a>
        </div>
  )
}

export default Subscribe
