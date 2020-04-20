import PropTypes from 'prop-types'
import React from 'react'
import Article from '../components/Article'
import Headline from '../components/Article/Headline'
import { ThemeContext } from '../layouts'
import Work from '../components/Work'

const AboutPage = () => {
  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {(theme) => (
          <Article theme={theme}>
            <header>
              <Headline title="About" theme={theme} />
            </header>
            <section>
              {/*SubHeadline
               ***Summary*/}
            </section>
            <section>
              {/*SubHeadline*/}
              <Work theme={theme} />
            </section>
            <section>
              {/*SubHeadline
               ***Skills*/}
            </section>
            <section>
              {/*SubHeadline
               ***Education*/}
            </section>
          </Article>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  )
}

export default AboutPage
