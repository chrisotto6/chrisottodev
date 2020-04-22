import React from 'react'
import PropTypes from 'prop-types'

const Education = (props) => {
  const { theme, school, degree, gpa, honors } = props

  return (
    <React.Fragment>
      <div className="education">
        <div className="schoolInfo">
          <div className="school">{school}</div>
          <div className="degree">{degree}</div>
        </div>
        <div className="studentInfo">
          <div>GPA: {gpa}</div>
          {honors && <div>{honors}</div>}
        </div>
      </div>
      {/* --- STYLES --- */}
      <style jsx>{`
        .education {
          padding-bottom: 15px;
        }
        .schoolInfo {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-content: center;
        }
        .studentInfo {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: center;
          justify-content: space-between;
        }
        .school {
          font-size: 1.2rem;
          line-height: 1.42857;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .degree {
          font-size: 1rem;
          color: ${theme.color.neutral.gray.g};
          font-weight: 550;
        }
      `}</style>
    </React.Fragment>
  )
}

Education.propTypes = {
  theme: PropTypes.object.isRequired,
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  gpa: PropTypes.string.isRequired,
  honors: PropTypes.string,
}

export default Education
