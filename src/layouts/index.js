import 'typeface-open-sans/index.css'
import FontFaceObserver from 'fontfaceobserver'
import PropTypes from 'prop-types'
import React from 'react'

import { getScreenWidth, timeoutThrottlerHandler } from '../utils/helpers'
import ErrorBoundary from '../components/ErrorBoundary'
import Footer from '../components/Footer/'
import Header from '../components/Header'

export const ThemeContext = React.createContext(null)
export const ScreenWidthContext = React.createContext(0)
export const FontLoadedContext = React.createContext(false)

import themeObject from '../theme/theme.json'

class Layout extends React.Component {
  constructor() {
    super()

    this.state = {
      font400loaded: false,
      font600loaded: false,
      screenWidth: 0,
      headerMinimized: false,
      theme: themeObject,
    }

    if (typeof window !== `undefined`) {
      this.loadFont('font400', 'Open Sans', 400)
      this.loadFont('font600', 'Open Sans', 600)
    }
  }

  timeouts = {}

  componentDidMount() {
    this.setState({
      screenWidth: getScreenWidth(),
    })
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resizeThrottler, false)
    }
  }

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, 'resize', 100, this.resizeHandler)
  }

  resizeHandler = () => {
    this.setState({ screenWidth: getScreenWidth() })
  }

  isHomePage = () => {
    if (this.props.location.pathname === '/') {
      return true
    }

    return false
  }

  loadFont = (name, family, weight) => {
    const font = new FontFaceObserver(family, {
      weight: weight,
    })

    font.load(null, 10000).then(
      () => {
        console.log(`${name} is available`)
        this.setState({ [`${name}loaded`]: true })
      },
      () => {
        console.log(`${name} is not available`)
      }
    )
  }
  render() {
    return (
      <ErrorBoundary>
        <ThemeContext.Provider value={this.state.theme}>
          <FontLoadedContext.Provider value={this.state.font400loaded}>
            <ScreenWidthContext.Provider value={this.state.screenWidth}>
              <React.Fragment>
                <Header path={this.props.location.pathname} theme={this.state.theme} />
                <main role="main">
                  <section>{this.props.children}</section>
                </main>
                <Footer theme={this.state.theme} />

                {/* --- STYLES --- */}
                <style jsx>{`
                  main {
                    min-height: 80vh;
                  }
                `}</style>
                <style jsx global>{`
                  html {
                    box-sizing: border-box;
                  }
                  *,
                  *:after,
                  *:before {
                    box-sizing: inherit;
                    margin: 0;
                    padding: 0;
                  }
                  body {
                    font-family: ${this.state.font400loaded
                      ? "'Open Sans', sans-serif;"
                      : 'Arial, sans-serif;'};
                  }
                  h1,
                  h2,
                  h3 {
                    font-weight: ${this.state.font600loaded ? 600 : 400};
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                    margin: 0;
                  }
                  h1 {
                    letter-spacing: -0.04em;
                    font-size: ${this.state.theme.font.size.l};
                  }
                  p {
                    margin: 0;
                  }
                  strong {
                    font-weight: ${this.state.font600loaded ? 600 : 400};
                  }
                  a {
                    text-decoration: none;
                    color: #666;
                  }
                  main {
                    width: auto;
                    display: block;
                  }
                `}</style>
              </React.Fragment>
            </ScreenWidthContext.Provider>
          </FontLoadedContext.Provider>
        </ThemeContext.Provider>
      </ErrorBoundary>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
