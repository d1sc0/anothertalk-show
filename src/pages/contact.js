import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/form'
import style from '../styles/content.module.css'
import { Link } from 'gatsby'

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      description="Get in touch, send me a message, reach out and ask me any questions!"
    />
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>Contact Stu</h1>
        <p>
          If you want to get in touch then you can contact us via any of the
          social links on my <Link to="/about/">about page</Link> or if it's
          easier just submit a message using the form below! 
        </p>
        <Form />
      </div>
    </div>
  </Layout>
)

export default ContactPage
