import * as React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default function postTags({ tags }) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <Ul>
      {tags.map(tag => (
        <Li key={tag}>
          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
        </Li>
      ))}
    </Ul>
  )
}

postTags.propTypes = {
  tags: PropTypes.string.isRequired,
}

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Li = styled.li`
  display: inline-block;
  margin: 0;
  font-size: 16px;
  :before {
    content: ', ';
  }
  :first-child:before {
    display: none;
  }
`
