import React from 'react'
import PropTypes from 'prop-types'
import Social from '../Social'

const Footer = (props) => {
  const { theme } = props

  const year = new Date().getFullYear()

  return (
    <React.Fragment>
      <footer className="footer" role="contentinfo">
        <Social theme={theme} />
        <ul>
          <li>
            © {year} Chris Otto | Hosted on{' '}
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Netlify"
            >
              Netlify
            </a>{' '}
            | Build with{' '}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
              title="Gatsby"
            >
              Gatsby
            </a>
          </li>
        </ul>
      </footer>

      {/* --- STYLES --- */}
      <style jsx>{`
        .footer {
          background: ${theme.color.neutral.white};
          padding: ${theme.space.inset.default};
          padding-top: 0;
          padding-bottom: 120px;

          :global(ul) {
            list-style: none;
            text-align: center;
            padding: 0;

            :global(li) {
              color: ${theme.color.neutral.gray.g};
              font-size: ${theme.font.size.xxs};
              padding: ${theme.space.xxs} ${theme.space.s};
              position: relative;
              display: inline-block;

              &::after {
                content: '•';
                position: absolute;
                right: ${`calc(${theme.space.xs} * -1)`};
              }
              &:last-child::after {
                content: '';
              }
            }
          }
        }

        @from-width desktop {
          .footer {
            padding: 0 1em 1.5em;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default Footer
