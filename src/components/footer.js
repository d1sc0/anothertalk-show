import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer>
      <p>
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
