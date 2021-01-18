import React from 'react'
import style from '../styles/content.module.css'
import {
  FaPodcast,
  FaSpotify
} from 'react-icons/fa'
import { SiGooglepodcasts } from "react-icons/si";
import { IconContext } from 'react-icons';

const Subscribe = () => {
  return (
    <div className={style.subscribe}>
          <h2>Subscribe with your favourite player</h2>
          <div className={style.subbuttons}>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <a href='https://google.com'><FaPodcast size="1.3rem" />  Apple Podcasts</a>
            <a href='https://google.com'><SiGooglepodcasts size="1.3rem" />  Google Podcasts</a>
            <a href='https://google.com'><FaSpotify size="1.3rem" />  Spotify Podcasts</a>
            </IconContext.Provider>
         </div> 
         <a href='/podcast-rss-feed.xml'>RSS Feed</a>
        </div>
  )
}

export default Subscribe
