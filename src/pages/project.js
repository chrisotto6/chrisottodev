import PropTypes from 'prop-types'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ThemeContext } from '../layouts'
import Article from '../components/Article'
import Project from '../components/Project'
import Headline from '../components/Article/Headline'

const ProjectPage = () => {
  const { edges } = useStaticQuery(
    graphql`
      query ProjectQuery {
        allProjectJson {
          edges {
            node {
              name
              description
              img
              url
            }
          }
        }
      }
    `
  )

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Contact" theme={theme} />
            </header>
            {edges.map(edge => {
              ;<Project theme={theme} project={edge} />
            })}
          </Article>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectPage

//eslint-disable-next-line no-undef
//export const query = graphql`
//  query ProjectQuery {
//    allProjectJson {
//      edges {
//        node {
//          name
//          description
//          img
//          url
//        }
//      }
//    }
//  }
//`
