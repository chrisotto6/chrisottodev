import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Menu from './menu'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <Link to="/" className="header__link">
      {siteTitle}
    </Link>
    <Menu />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
