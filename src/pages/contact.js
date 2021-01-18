import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/form'
import style from '../styles/content.module.css'

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      description="Get in touch with the show and give us some feedback or ask us a question"
    />
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>Get in touch</h1>
        <p>
          If you want to get in touch with us to give us some feedback, or maybe suggest yourself or someone you know as a potential guest for the show, drop us a message using the form below!
        </p>
        <Form />
      </div>
    </div>
  </Layout>
)

export default ContactPage
