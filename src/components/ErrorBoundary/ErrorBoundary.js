import React from 'react'
import PropTypes from 'prop-types'
import Sentry from 'gatsby-plugin-sentry'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Sentry.configureScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key])
      })
    })
    Sentry.captureException(error)
  }

  render() {
    if (this.state.error) {
      // render fallback UI
      return <h1>Something went wrong!</h1>
    } else {
      // when there's not an error, render children untouched
      return this.props.children
    }
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object.isRequired,
}

export default ErrorBoundary
