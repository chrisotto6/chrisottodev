import React from 'react'
import PropTypes from 'prop-types'
import { Img } from 'gatsby'

const Project = props => {
  const {
    theme,
    project: { name, description, img, url },
  } = props

  return (
    <React.Fragment>
      <article className="card">
        <Link to={url} key={name} className="link">
          <div className="gatsby-image-outer-wrapper">
            <Img fluid={img} />
          </div>
          <h3>{name}</h3>
          <p className="description">{description}</p>
        </Link>
      </article>

      {/* --- STYLES --- */}
      <style jsx>{`
        .card {
          border-radius: 4px;
          background: #fff;
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
          transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow,
            0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
          padding: 14px 80px 18px 36px;
          cursor: pointer;
          background-repeat: no-repeat;
          background-position: right;
          background-size: 80px;
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
        }
        .card h3 {
          font-weight: 600;
        }
        .card img {
          position: absolute;
          top: 20px;
          right: 15px;
          max-height: 120px;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Project
