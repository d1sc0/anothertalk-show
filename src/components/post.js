import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Navigation from './navigation'
import { toKebabCase } from '../helpers'

import style from '../styles/post.module.css'

const Post = ({
  title,
  date,
  path,
  coverImage,
  author,
  excerpt,
  tags,
  html,
  previousPost,
  readingTime,
  nextPost,
}) => {
  const previousPath = previousPost && previousPost.frontmatter.path
  const previousLabel = previousPost && previousPost.frontmatter.title
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
            <div dangerouslySetInnerHTML={{ __html: html }} />
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

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  author: PropTypes.string,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  readingTime: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  previousPost: PropTypes.object,
  nextPost: PropTypes.object,
}

export default Post
