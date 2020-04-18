import React from 'react'
import { ThemeContext } from '../layouts'
import Article from '../components/Article'
import Headline from '../components/Article/Headline'

const NotFoundPage = () => (
  <ThemeContext>
    {(theme) => (
      <Article theme={theme}>
        <header>
          <Headline title="Not Found" theme={theme} />
        </header>
        <p>You just hit a route that doesn&#39;t exist...the sadness.</p>
      </Article>
    )}
  </ThemeContext>
)

export default NotFoundPage
