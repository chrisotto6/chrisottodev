import React from 'react'
import { Link } from 'gatsby'
import './menu.css'

const Menu = () => {
  return (
    <section className="menu__section">
      <ul className="menu">
        <li>
          <Link
            to="/"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to="/posts"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            posts
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="menu__item"
            activeClassName="menu__item--selected"
          >
            contact
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Menu