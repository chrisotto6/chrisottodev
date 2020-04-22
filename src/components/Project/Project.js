import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { FaGithub } from 'react-icons/fa/'
import { FaExternalLinkAlt } from 'react-icons/fa/'

const Project = (props) => {
  const {
    theme,
    project: { name, description, img, tech, githuburl, projecturl },
    images,
  } = props

  const image = images.find((x) => {
    return x.node.relativePath === `project/${img}`
  })

  return (
    <React.Fragment>
      <li className="card">
        <header>
          <div>
            <Img fluid={image.node.childImageSharp.fluid} title={name} alt="Project image" />
          </div>
          <h2>{name}</h2>
        </header>
        <section>
          <p>{description}</p>
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>
        <footer>
          {projecturl && (
            <a href={projecturl} target="_blank" rel="noopener noreferrer" title={name}>
              <FaExternalLinkAlt size={28} />
            </a>
          )}
          {githuburl && (
            <a href={githuburl} target="_blank" rel="noopener noreferrer" title={name}>
              <FaGithub size={28} />
            </a>
          )}
        </footer>
      </li>

      {/* --- STYLES --- */}
      <style jsx>{`
        .card {
          display: flex;
          overflow: hidden;
          list-style: none;
          flex-direction: column;
          border-radius: ${theme.space.s};
          background: ${theme.color.neutral.gray.b};
          header {
            div {
              position: relative;
              gatsby-image-wrapper {
                display: block;
                margin-left: auto;
                margin-right: auto;
                top: 0;
                width: 100%;
                position: absolute;
              }
            }
            h2 {
              font-weight: 500;
              font-size: 24px;
              padding: 0 ${theme.space.m};
              margin: ${theme.space.m} 0;
              @media (max-width: 567px) {
                padding: 0 ${theme.space.m};
              }
            }
          }
          section {
            padding: 0 ${theme.space.m};
            height: 100%;
            @media (max-width: 567px) {
              padding: 0 ${theme.space.s};
            }
            p {
              font-size: 16px;
              line-height: 27px;
              margin-bottom: 12px;
              @media (max-width: 567px) {
                font-weight: 300;
              }
            }
            span {
              margin-right: 5px;
              font-size: 90%;
              background-color: ${theme.color.brand.primary};
              color: ${theme.color.neutral.gray.b};
              display: inline-block;
              padding: 0.25em 0.4em;
              font-weight: 500;
              line-height: 1;
              text-align: center;
              white-space: nowrap;
              vertical-align: baseline;
              border-radius: 0.25rem;
            }
          }
          footer {
            padding: ${theme.space.s};
            margin-top: 12px;
            @media (max-width: 567px) {
              padding: ${theme.space.s};
            }
            a {
              color: ${theme.color.brand.primary};
              text-align: right;
              float: right;
              margin-right: ${theme.space.m};
            }
          }
        }
      `}</style>
    </React.Fragment>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired,
}

export default Project
