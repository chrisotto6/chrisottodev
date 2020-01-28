import React from 'react'
import PropTypes from 'prop-types'

import config from '../../../content/meta/config'

import GithubIcon from '!svg-react-loader!../../images/svg-icons/github.svg?name=GithubIcon'
import LinkedInIcon from '!svg-react-loader!../../images/svg-icons/linkedin.svg?name=LinkedInIcon'
import TwitterIcon from '!svg-react-loader!../../images/svg-icons/twitter.svg?name=TwitterIcon'
import InstagramIcon from '!svg-react-loader!../../images/svg-icons/instagram.svg?name=InstagramIcon'
import DevIcon from '!svg-react-loader!../../images/svg-icons/dev.svg?name=DevIcon'

const Social = props => {
  const { theme } = props
  const items = config.authorSocialLinks
  const icons = {
    twitter: TwitterIcon,
    github: GithubIcon,
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
    dev: DevIcon,
  }

  return (
    <React.Fragment>
      <div className="social">
        {items.map(item => {
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
