import PropTypes from 'prop-types'
import React from 'react'
import Article from '../components/Article'
import Headline from '../components/Article/Headline'
import { ThemeContext } from '../layouts'
import Work from '../components/Work'
import SubHeadline from '../components/Article/SubHeadline'

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
              <SubHeadline title="Summary" theme={theme} />
              {/***Summary*/}
            </section>
            <section>
              <SubHeadline title="Work" theme={theme} />
              <Work theme={theme} />
            </section>
            <section>
              <SubHeadline title="Skills" theme={theme} />
              {/***Skills*/}
            </section>
            <section>
              <SubHeadline title="Education" theme={theme} />
              {/***Education*/}
            </section>
          </Article>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  )
}

export default AboutPage
