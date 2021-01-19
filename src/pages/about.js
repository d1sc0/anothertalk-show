import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from '../styles/content.module.css'

const AboutPage = ({ data }) => {
  const aboutImage = data.aboutImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO
        title="About"
        description="The purpose, shape and format of Another Talk Show explained"
      />
      <div className={style.post}>
        <div className={style.postContent}>
          <h1 className={style.title}>About the show</h1>
          <p>
            Do you love talk shows but find the content a little bland and formulaic? Are you a little fed up of manicured celebrities promoting their latest ventures, sticking to pre-determined questions under glitzy studio lighting. If so, this podcast might be for you. 
          </p>
          <p>
            <strong>The aim of the show is to simply make connections with and tease out interesting and entertaining stories from real people who have a particular talent, hobby or are doing interesting things in the world. People who are trying to make the world a little bit brighter or better.</strong> You won't find interviews here with people who have fame, fortune or immense power. They already get plenty of air-time elsewhere.
          </p>
          <p>
            It's not a show expecting to reach a large audience and at this point consider it more of an open experiment - Maybe my Mum will listen? I'm hopeful that by sharing the show on the internet that over time it'll build up a tiny but like-minded audience that can help me make new connections and unlock access to other interesting guests and entertaining content. <strong>The success of the experiment will be very much reliant on the good will of potential guests but I reckon the world has more of this good will than we may think.</strong>
          </p>
          
         <h3 id="host">Meet the host</h3>
            <p>
            <Image
                fluid={aboutImage}
                className={style.imageRight}
                alt="Stuart Mackenzie"
              />
              Hey I'm Stuart. I'm the show's host, producer, researcher, marketing manager and web developer. I've got a tiny amount of podcasting experience from many years back when me and some friends recorded a show about digital photography. That said I'm defintely not a master of any of the roles listed above. I'm making this up as I go! Apologies if I make mistakes along the way. 
            </p>
            <p>You can find more about me on my <a href="https://hellostu.xyz">personal site and blog.</a></p>
            <p>
             The podcast is a hobby project partly inspired by my day job working in consulting roles. The variety of things I've worked on over the last 4 years has allowed me to be introduced to many interesting, creative, hard-working, passionate, talented people who all have stories to share from both their work or personal lives. <strong>I'm hoping to use this as a space to explore these stories in an light and entertaining way, learn from them and take inspiration. That's a lofty goal - I'll also settle for a pleasant natter over a nice cup of tea!</strong>
          </p>
            <h3 id="get-involved">Ways you can get involved</h3>
            <p>
              <strong>1. Listen, Subscribe, Share, Give feedback</strong> - Knowing people are listening to the show and getting something out of this little experiment will help motivate me to put more time and energy into it. You'll find relevant links at the bottom of each website page.</p>
            <p>
              <strong>2. Suggest Guests!</strong>- Do you think you or someone you know would make an interesting  guest on the show? Maybe you have artistic, creative or entertaining friends who'd have interesting stories to share and work they want to promote? or maybe you are involved in an interesting project that is trying to make your community or the world a better place that we should all be hearing about? <Link to="/contact">Get in touch</Link> and tell me more.
            </p>

        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    aboutImage: file(relativePath: { eq: "hello-stu.jpg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
