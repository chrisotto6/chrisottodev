import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Listing = ({ children }) => {
  const data = useStaticQuery(graphql`
    query BlogPostListing {
      allMarkdownRemark(
        limit: 10
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <h2>
            <Link to={`posts${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </>
  )
}

export default Listing
