import React from 'react'
import Article from '../components/Article'
import Education from '../components/Work/Education'
import Headline from '../components/Article/Headline'
import Skill from '../components/Skill'
import SubHeadline from '../components/Article/SubHeadline'
import { ThemeContext } from '../layouts'
import Work from '../components/Work'
import Volunteer from '../components/Work/Volunteer'

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
              <Education
                theme={theme}
                school="Lakeland University"
                degree="B.S. Computer Science"
                gpa="3.9375"
                honors="Summa cum Laude"
              />
              <Education
                theme={theme}
                school="Milwaukee Area Technical College"
                degree="A.S. Mobile Application Development"
                gpa="3.729"
              />
            </section>
            <section>
              <SubHeadline title="Volunteer" theme={theme} />
              <Volunteer
                theme={theme}
                organization="Milwaukee Area Technical College"
                role="ITDEV Advisory Board Member"
                duration="Jan 2015 - Present"
              />
            </section>
          </Article>
        )}
      </ThemeContext.Consumer>

      {/* --- STYLES --- */}
      <style jsx global>
        {`
          .ant-tabs-nav .ant-tabs-tab-active {
            color: #096dd9;
          }
          section {
            margin-bottom: 20px;
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default AboutPage
