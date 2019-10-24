import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../common/layout'

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <Layout>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`
