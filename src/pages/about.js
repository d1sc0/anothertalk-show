import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from '../styles/content.module.css'
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaStrava,
} from 'react-icons/fa'

const AboutPage = ({ data }) => {
  const aboutImage = data.aboutImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO
        title="About Stuart Mackenzie"
        description="Stuart Mackenzie - Director of Product & Tech at FutureGov. Also known as a father, husband, occassional runner, podcaster, photographer, blogger and nice human."
      />
      <div className={style.post}>
        <div className={style.postContent}>
          <h1 className={style.title}>Stuart Mackenzie</h1>
          <p>
            <a href="https://twitter.com/_disco" className={style.social}>
              <FaTwitter size="1.5rem" />
            </a>
            <a
              href="https://uk.linkedin.com/in/stuartjmackenzie"
              className={style.social}
            >
              <FaLinkedin size="1.5rem" />
            </a>
            <a
              href="https://www.instagram.com/_d1sco/"
              className={style.social}
            >
              <FaInstagram size="1.5rem" />
            </a>
            <a
              href="https://www.youtube.com/user/ilovediscostu"
              className={style.social}
            >
              <FaYoutube size="1.5rem" />
            </a>
            <a href="https://github.com/d1sc0" className={style.social}>
              <FaGithub size="1.5rem" />
            </a>
            <a
              href="https://www.strava.com/athletes/1170885"
              className={style.social}
            >
              <FaStrava size="1.5rem" />
            </a>
          </p>
          <p>
            <Image
              fluid={aboutImage}
              className={style.imageRight}
              alt="Stuart Mackenzie"
            />
            I live in <a href="https://www.visit-dorset.com/">Dorset</a> along
            with my wife Chloe, daughter Robyn and{' '}
            <a href="https://www.instagram.com/m0nty_d0g/">
              four-legged friend Monty
            </a>
            . I now spend much of my time working out of London transforming
            public services as the Product & Technology Director at{' '}
            <a href="https://wearefuturegov.com">FutureGov</a>.
          </p>
          <p>
            I've worked in a variety of technology & management roles over the
            last 20 years but largely I prefer people to computers and code. I'm
            slightly obsessed (in a healthy way) in making change happen within
            organisations and I'm happiest when supporting teams and clients
            navigate complexity (human and technical) to deliver better outcomes
            for users.
          </p>
          <p>
            This website is largely a selfish endevaour. I don't write often but
            it's a skill I know I should practice. Having the site gives me a
            place to do just that. Often I write just as a method to bring
            structure to the things I have floating around in my head. For this
            reason I inevitably write more posts than I publish. Hopefully the
            few that make it as far as publication might be useful to someone
            other than me but that's not my primary goal.
          </p>
          <p>
            Having a website also provides me a sandbox to test ideas and
            prototype in code. If things feel a little broken or don't work as
            you expect then this might be as a result of one of these
            experiments.
          </p>
          <p>
            I'm always open to making new connections with people. My social
            profiles are included at the top of this page if you want to get in
            touch or just be nosey but I've also provided a good old-fashioned{' '}
            <Link to="/contact">contact form</Link> if that's more your thing!
          </p>
          <p>
            For those interested in technology the site in it's current form has
            been built using <a href="https://www.gatsbyjs.org/">Gatsby</a>{' '}
            which is currently my favourite static site generator. I tend to
            write posts using <a href="https://www.typora.io/">Typora</a> which
            is a beautiful cross platform clutter-free markdown editor. I use{' '}
            <a href="https://firebase.google.com/">Firebase</a> for hosting the
            static files. All of the code and content is maintained in{' '}
            <a href="https://github.com/d1sc0/hello-stu">Github</a>.
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
