import React from 'react'
import PropTypes from 'prop-types'

const Volunteer = (props) => {
  const { theme, organization, duration, role } = props

  return (
    <React.Fragment>
      <div className="volunteer">
        <div className="information">
          <div className="organization">{organization}</div>
          <div className="duration">{duration}</div>
        </div>
        <div className="role">{role}</div>
      </div>

      {/* --- STYLES --- */}
      <style jsx global>
        {`
          .volunteer {
            padding-bottom: 15px;
          }
          .information {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-content: center;
          }
          .organization {
            font-size: 1.2rem;
            line-height: 1.42857;
            font-weight: 600;
            margin-bottom: 2px;
          }
          .duration {
            font-size: 1rem;
            color: ${theme.color.neutral.gray.g};
            font-weight: 550;
          }
          .role {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-content: center;
          }
        `}
      </style>
    </React.Fragment>
  )
}

Volunteer.propTypes = {
  theme: PropTypes.object.isRequired,
  organization: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
}

export default Volunteer
