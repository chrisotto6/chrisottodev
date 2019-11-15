import React from 'react'
import { Link } from 'gatsby'
import './menu.css'

const Menu = () => {
  return (
    <div className="menu__section" role="navigation">
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
    </div>
  )
}

export default Menu
