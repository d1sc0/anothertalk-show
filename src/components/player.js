import React from 'react'
import { Link } from 'gatsby'
import { toKebabCase } from '../helpers'
import style from '../styles/content.module.css'

const Player = ({title, date, path, tags, url, mins, secs, season, episodeNumber, subtitle}) => {
  return (
        <div className={style.player}>
          <h2>LATEST EPISODE</h2>
          <h3>
            <Link to={path}>{title}</Link>
          </h3>
          <div className={style.meta}>
              {subtitle}<br/>
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
  )
}

export default Player