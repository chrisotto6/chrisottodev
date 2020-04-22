import React from 'react'
import SkillCard from './SkillCard'

const Skill = () => {
  return (
    <React.Fragment>
      <div className="skill">
        <SkillCard item="Testing" percent="90" />
        <SkillCard item="Agile" percent="90" />
        <SkillCard item="JavaScript" percent="85" />
        <SkillCard item="Java" percent="80" />
        <SkillCard item="Regex" percent="75" />
        <SkillCard item="C#" percent="70" />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .skill {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          border-radius: 10px;
          padding-bottom: 20px;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Skill
