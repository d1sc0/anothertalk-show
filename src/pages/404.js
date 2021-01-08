import React from 'react'
import catGIF from '../images/sadcat.gif'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from '../styles/post.module.css'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={style.post}>
        <div className={style.postContent}>
          <h1 className={style.title}>404 SAD KITTY!</h1>
          <img src={catGIF} alt="kitty is sad" className={style.imageFull} />
          <p>You just hit a route that doesn&#39;t exist... SO MUCH sadness.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
