import React from 'react'
import { Link } from 'gatsby'
import style from '../styles/content.module.css'
import {
  FaTwitter,
  FaInstagram,
  FaPodcast,
  FaSpotify
} from 'react-icons/fa'
import { SiGooglepodcasts } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <p className={style.social}>
      <a href="https://twitter.com/ordinaryhost" className={style.social}>
        <FaTwitter size="2rem" />
      </a>
      <a href="https://www.instagram.com/anothertalk.show/" className={style.social}>
        <FaInstagram size="2rem" />
      </a>
      <a href="https://apple.com/#" className={style.social}>
        <FaPodcast size="2rem" />
      </a>
      <a href="https://google.com/#" className={style.social}>
        <SiGooglepodcasts size="2rem" />
      </a>
      <a href="https://spotify.com/#" className={style.social}>
        <FaSpotify size="2rem" />
      </a>
      </p>
      <p className={style.footerNav}>
        <Link to="/">Home</Link>
        {' // '}
        <Link to="/about">About</Link>
        {' // '}
        <Link to="/episodes">Episodes</Link>
        {' // '}
        <Link to="/contact">Contact</Link>
        {' // '}
        <a href="#top">Top</a>
      </p>
      <p>
        Built with{' '}
        <span role="img" aria-label="heart emoji">
          {' '}
          ♥️{' '}
        </span>
        using <a href="https://www.gatsbyjs.org">Gatsby</a> | Based on a starter
        created by <a href="https://radoslawkoziel.pl">Panr</a> but with some
        added <a href="https://twitter.com/_disco">@_disco</a> magic.
      </p>
    </footer>
  )
}

export default Footer
