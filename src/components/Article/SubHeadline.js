import React from 'react'
import PropTypes from 'prop-types'

const SubHeadline = (props) => {
  const { title, children, theme } = props

  return (
    <React.Fragment>
      {title ? <h3>{title}</h3> : <h3>{children}</h3>}

      {/* --- STYLES --- */}
      <style jsx>{`
        h3 {
          font-size: ${theme.font.size.m};
          margin: ${theme.space.stack.m};
          animation-name: headlineEntry;
          animation-duration: ${theme.time.duration.long};

          :global(span) {
            font-weight: ${theme.font.weight.standard};
            display: block;
            font-size: 0.5em;
            letter-spacing: 0;
            margin: ${theme.space.stack.xs};
          }

          :global(svg) {
            height: 0.75em;
            fill: ${theme.color.brand.primary};
          }
        }

        @keyframes headlineEntry {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }

        @from-width tablet {
          h3 {
            font-size: ${`calc(${theme.font.size.m} * 1.2)`};
          }
        }

        @from-width desktop {
          h3 {
            font-size: ${`calc(${theme.font.size.m} * 1.4)`};
          }
        }
      `}</style>
    </React.Fragment>
  )
}

SubHeadline.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object.isRequired,
}

export default SubHeadline
