import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa/'
import { FaLinkedin } from 'react-icons/fa/'
import { FaTwitter } from 'react-icons/fa/'
import { FaInstagram } from 'react-icons/fa/'
import { FaDev } from 'react-icons/fa/'

import config from '../../../content/meta/config'

const Social = (props) => {
  const { theme } = props
  const items = config.authorSocialLinks
  const icons = {
    twitter: FaTwitter,
    github: FaGithub,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
    dev: FaDev,
  }

  return (
    <React.Fragment>
      <div className="social">
        {items.map((item) => {
          const Icon = icons[item.name]
          return (
            <a
              href={item.url}
              key={item.name}
              className="socialLink"
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
            >
              <Icon className="svg" />
            </a>
          )
        })}
      </div>

      {/* --- STYLES --- */}
      <style jsx global>
        {`
          @media screen and (max-width: 450px) {
            .social {
              width: 95%;
            }
          }
          @media screen and (min-width: 450px) {
            .social {
              width: 40%;
            }
          }
          .social {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            padding: 20px;

            :global(svg) {
              width: 30px;
              height: 30px;
              transition: all 0.5s;
            }

            &:hover :global(svg) {
              fill: ${theme.color.special.attention};
            }
          }

          .svg path {
            fill: ${theme.color.brand.primary};
          }

          .socialLink {
            margin: 0 auto;
            display: inline-block;
            padding: 1px;
            text-align: center;
          }
        `}
      </style>
    </React.Fragment>
  )
}

Social.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default Social
