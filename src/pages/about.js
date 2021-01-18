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
        title="About"
        description="The purpose, shape and format of Another Talk Show explained"
      />
      <div className={style.post}>
        <div className={style.postContent}>
          <h1 className={style.title}>About the show</h1>
          <p>
            <h4>The idea</h4>
            Sed et ut picanha turkey buffalo tempor sunt adipisicing brisket nulla swine cow. Magna proident labore lorem, pork chop dolore landjaeger bresaola tail jowl consectetur ipsum. Turkey in burgdoggen tenderloin sausage, aliqua ea beef ribs id irure pork kielbasa ground round veniam.
            {/* <Image
                fluid={aboutImage}
                className={style.imageRight}
                alt="Stuart Mackenzie"
              /> */}
          </p>
          <p>
            <h4>The host</h4>
            Bacon ipsum dolor amet drumstick kevin incididunt meatball in. Venison meatball aliquip ribeye meatloaf. Venison nulla beef ribs, turducken pastrami jerky aute shankle flank eu meatloaf pork loin tongue esse ut. Ham chuck ullamco filet mignon pork belly laboris jerky prosciutto eu ut aliqua. Adipisicing bacon ut, ad tri-tip fugiat jowl hamburger cillum.
          </p>
            <h4>Get involved</h4>
            Sed et ut picanha turkey buffalo tempor sunt adipisicing brisket nulla swine cow. Magna proident labore lorem, pork chop dolore landjaeger bresaola tail jowl consectetur ipsum. Turkey in burgdoggen tenderloin sausage, aliqua ea beef ribs id irure pork kielbasa ground round veniam. Tenderloin ham beef, pork chop frankfurter landjaeger ea biltong in dolore est chuck pork cillum ullamco. Aliquip biltong incididunt quis filet mignon ad buffalo boudin prosciutto. Adipisicing est strip steak, eu beef ribs dolor ribeye.
          <p>
            Commodo capicola nisi ham turducken in consequat strip steak sirloin landjaeger incididunt salami tenderloin chicken burgdoggen. Sint chicken pork belly mollit, tri-tip do chislic laborum eiusmod drumstick shankle ad meatloaf. Id turducken dolore sunt alcatra ex chislic. Kevin spare ribs kielbasa dolor, incididunt dolore shank cow leberkas.
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
