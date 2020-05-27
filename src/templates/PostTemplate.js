import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
require('prismjs/themes/prism-okaidia.css')

import Seo from '../components/Seo'
import Article from '../components/Article'
import Post from '../components/Post'
import { ThemeContext } from '../layouts'

const PostTemplate = (props) => {
  const {
    data: {
      post,
      authornote: { body: authorNote },
    },
    pageContext: { next, prev },
  } = props

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {(theme) => (
          <Article theme={theme}>
            <Post post={post} next={next} prev={prev} authornote={authorNote} theme={theme} />
          </Article>
        )}
      </ThemeContext.Consumer>
      <Seo data={post} />
    </React.Fragment>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default PostTemplate

// eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt
      timeToRead
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        author
        tags
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
      }
    }
    authornote: mdx(fileAbsolutePath: { regex: "/author/" }) {
      id
      body
    }
  }
`
