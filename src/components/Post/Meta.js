import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { FaCalendar } from 'react-icons/fa/'
import { FaRegClock } from 'react-icons/fa/'
import { FaUser } from 'react-icons/fa/'
import { FaTag } from 'react-icons/fa/'

const Meta = (props) => {
  const { prefix, author: authorName, tags, timeToRead, theme } = props

  return (
    <p className="meta">
      <span>
        <FaCalendar size={10} /> {prefix}
      </span>
      <span>
        <FaUser size={10} /> {authorName}
      </span>
      <span>
        <FaRegClock size={10} /> {timeToRead} min.
      </span>
      {tags &&
        tags.map((tag) => (
          <span key={tag}>
            <FaTag size={10} />
            <Link to={`/tag/${tag.split(' ').join('-')}`}>{tag}</Link>
          </span>
        ))}

      {/* --- STYLES --- */}
      <style jsx>{`
        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          margin: ${theme.space.m} 0;
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
          }
        }
        @from-width tablet {
          .meta {
            margin: ${`calc(${theme.space.m} * 1.5) 0 ${theme.space.m}`};
          }
        }
      `}</style>
    </p>
  )
}

Meta.propTypes = {
  prefix: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  timeToRead: PropTypes.string,
  theme: PropTypes.object.isRequired,
  tags: PropTypes.object.isRequired,
}

export default Meta
