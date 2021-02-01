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
            <a href='https://podcasts.apple.com/gb/podcast/another-talk-show/id1551385867'><FaPodcast size="1.3rem" />  Apple Podcasts</a>
            <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9hbm90aGVydGFsay5zaG93L3BvZGNhc3QtcnNzLWZlZWQueG1s'><SiGooglepodcasts size="1.3rem" />  Google Podcasts</a>
            <a href='https://open.spotify.com/show/2Wf8butZI229NlRVPQHU6z'><FaSpotify size="1.3rem" />  Spotify Podcasts</a>
            </IconContext.Provider>
         </div> 
         <a href='/podcast-rss-feed.xml'>RSS Feed</a>
        </div>
  )
}

export default Subscribe
