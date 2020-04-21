import React from 'react'
import Article from '../components/Article'
import Headline from '../components/Article/Headline'
import Skill from '../components/Skill'
import SubHeadline from '../components/Article/SubHeadline'
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
              <SubHeadline title="Summary" theme={theme} />
              <p>
                Hard-working, detail orientated individual with conviction and integrity. Student of
                the fast-paced technology world, fast learner and challenge acceptor. Interested in
                applying wealth of experience and knowledge to deliver quality and value.
              </p>
            </section>
            <section>
              <SubHeadline title="Work" theme={theme} />
              <Work theme={theme} />
            </section>
            <section>
              <SubHeadline title="Skills" theme={theme} />
              <Skill />
            </section>
            <section>
              <SubHeadline title="Education" theme={theme} />
              {/***Education*/}
            </section>
            <section>
              <SubHeadline title="Volunteer" theme={theme} />
              {/***Volunteer*/}
            </section>
          </Article>
        )}
      </ThemeContext.Consumer>

      {/* --- STYLES --- */}
      <style jsx global>
        {`
          section {
            margin-bottom: 20px;
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default AboutPage
