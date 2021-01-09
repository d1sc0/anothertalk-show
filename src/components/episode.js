import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Navigation from './navigation'
import { toKebabCase } from '../helpers'
import { MDXRenderer } from "gatsby-plugin-mdx"

import style from '../styles/content.module.css'

const Episode = ({
  title,
  date,
  path,
  excerpt,
  tags,
  url,
  body,
  previousEpisode,
  readingTime,
  nextPost,
}) => {
  const previousPath = previousEpisode && previousEpisode.frontmatter.path
  const previousLabel = previousEpisode && previousEpisode.frontmatter.title
  const nextPath = nextPost && nextPost.frontmatter.path
  const nextLabel = nextPost && nextPost.frontmatter.title

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        {excerpt ? (
          <>
            <h1 className={style.title}>
              <Link to={path}>{title}</Link>
            </h1>

            <div className={style.meta}>
              Posted: {date}
              {' // '}
              {readingTime.text}
            </div>
            <p className={style.postExcerpt}>{excerpt}</p>
            {url ? (<p><audio src={url} preload='auto' controls></audio></p>) : null}
            {tags ? (
              <div className={style.tags}>
                {tags.map(tag => (
                  <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                    <span className={style.tag}>#{tag}</span>
                  </Link>
                ))}
              </div>
            ) : null}

            <Link to={path} className={style.readMore}>
              Read more...
            </Link>
          </>
        ) : (
          <>
            <h1 className={style.title}>{title}</h1>
            <div className={style.meta}>
              {date}
              {' // '}
              {readingTime.text}
            </div>
            {tags ? (
              <div className={style.tags}>
                {tags.map(tag => (
                  <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                    <span className={style.tag}>#{tag}</span>
                  </Link>
                ))}
              </div>
            ) : null}
            <MDXRenderer>{body}</MDXRenderer>
            <Navigation
              previousPath={previousPath}
              previousLabel={previousLabel}
              nextPath={nextPath}
              nextLabel={nextLabel}
            />
          </>
        )}
      </div>
    </div>
  )
}

Episode.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  readingTime: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
}

export default Episode
