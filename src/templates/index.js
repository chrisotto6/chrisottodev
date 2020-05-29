import PropTypes from 'prop-types'
import React from 'react'
import { Link, graphql } from 'gatsby'
import { ThemeContext } from '../layouts'
import Blog from '../components/Blog'
import Hero from '../components/Hero'
import Seo from '../components/Seo'

class IndexPage extends React.Component {
  separator = React.createRef()

  scrollToContent = (e) => {
    this.separator.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1 || !currentPage
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    const {
      data: {
        posts: { edges: posts = [] },
        bgDesktop: {
          resize: { src: desktop },
        },
        bgTablet: {
          resize: { src: tablet },
        },
        bgMobile: {
          resize: { src: mobile },
        },
      },
    } = this.props

    const backgrounds = {
      desktop,
      tablet,
      mobile,
    }

    return (
      <React.Fragment>
        {isFirst ? (
          <React.Fragment>
            <ThemeContext.Consumer>
              {(theme) => (
                <Hero
                  scrollToContent={this.scrollToContent}
                  backgrounds={backgrounds}
                  theme={theme}
                />
              )}
            </ThemeContext.Consumer>

            <hr ref={this.separator} />
          </React.Fragment>
        ) : null}

        <ThemeContext.Consumer>
          {(theme) => <Blog posts={posts} theme={theme} />}
        </ThemeContext.Consumer>

        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto 20px auto',
            textAlign: 'center',
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page&nbsp;
            </Link>
          )}

          {!isLast && (
            <Link to={nextPage} rel="next">
              &nbsp;Next Page →
            </Link>
          )}
        </div>

        <ul
          id="post-page-list"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '700px',
            margin: '0 auto 60px auto',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
            lineHeight: '30px',
            justifyContent: 'center',
          }}
        >
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
                fontSize: '25px',
              }}
            >
              <Link
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: '3px 8px',
                  borderRadius: '7px',
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#787878' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
        </ul>

        <Seo />

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default IndexPage

// eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    posts: allMdx(
      filter: {
        fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: [fields___prefix], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            tags
            author
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/mesh/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/mesh/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/mesh/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`
