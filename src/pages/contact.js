import React from 'react'
import { ThemeContext } from '../layouts'
import Article from '../components/Article'
import Contact from '../components/Contact'
import Headline from '../components/Article/Headline'
import Seo from '../components/Seo'

const ContactPage = () => {
  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {(theme) => (
          <Article theme={theme}>
            <header>
              <Headline title="Contact" theme={theme} />
            </header>
            <p className="contactIntro">
              Hello 👋 thanks for stopping by. If you want to chat, reach out below!
            </p>
            <div />
            <Contact theme={theme} />
          </Article>
        )}
      </ThemeContext.Consumer>

      {/* --- STYLES --- */}
      <style jsx global>
        {`
          .contactIntro {
            padding-bottom: 25px;
          }
        `}
      </style>

      <Seo />
    </React.Fragment>
  )
}

export default ContactPage
