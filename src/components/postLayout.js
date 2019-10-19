import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

export default class postLayout extends Component {
  render() {
    return (
      <Layout>
        <h1>Post Layout</h1>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: { slug: { eq: "/second-post" } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`
