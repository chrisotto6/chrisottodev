import PropTypes from 'prop-types'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { ThemeContext } from '../layouts'
import Article from '../components/Article'
import Project from '../components/Project'
import Headline from '../components/Article/Headline'

const ProjectPage = () => {
  const data = useStaticQuery(
    graphql`
      query ProjectQuery {
        allProjectJson {
          edges {
            node {
              name
              description
              img
              tech
              githuburl
              projecturl
            }
          }
        }
        projectImages: allFile(
          sort: { order: ASC, fields: [absolutePath] }
          filter: { relativePath: { regex: "/project/.*.png/" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 340, maxHeight: 210, quality: 90, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {(theme) => (
          <Article theme={theme}>
            <header>
              <Headline title="Projects" theme={theme} />
            </header>
            <section>
              <ul className="projects">
                {data.allProjectJson.edges.map((edge) => (
                  <Project
                    theme={theme}
                    project={edge.node}
                    images={data.projectImages.edges}
                    key={edge.node.name}
                  />
                ))}
              </ul>
            </section>
          </Article>
        )}
      </ThemeContext.Consumer>

      {/* --- STYLES --- */}
      <style jsx global>
        {`
          .projects {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: minmax(260px, 1fr);
            grid-gap: 24px;
            @media (max-width: 980px) {
              grid-template-columns: 1fr;
              grid-auto-rows: auto;
            }
          }
        `}
      </style>
    </React.Fragment>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectPage
