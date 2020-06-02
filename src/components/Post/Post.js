import React from 'react'
import PropTypes from 'prop-types'
import 'prismjs/themes/prism-okaidia.css'

import asyncComponent from '../AsyncComponent'
import Headline from '../Article/Headline'
import Bodytext from '../Article/Bodytext'
import Subscribe from '../Subscribe'
import Meta from './Meta'
import Author from './Author'
import NextPrev from './NextPrev'

const Share = asyncComponent(() =>
  import('./Share')
    .then((module) => {
      return module.default
    })
    .catch((error) => {})
)

const Post = (props) => {
  const {
    post,
    post: {
      timeToRead,
      body,
      fields: { prefix },
      frontmatter: { title, author, tags },
    },
    authornote,
    next: nextPost,
    prev: prevPost,
    theme,
  } = props

  return (
    <React.Fragment>
      <header>
        <Headline title={title} theme={theme} />
        <Meta prefix={prefix} author={author} tags={tags} timeToRead={timeToRead} theme={theme} />
      </header>
      <Bodytext body={body} theme={theme} />
      <footer>
        <Share post={post} theme={theme} />
        <Subscribe />
        <Author note={authornote} theme={theme} />
        <NextPrev next={nextPost} prev={prevPost} theme={theme} />
      </footer>
    </React.Fragment>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authornote: PropTypes.string.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default Post
