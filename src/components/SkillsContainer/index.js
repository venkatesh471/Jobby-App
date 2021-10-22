import './index.css'

const SkillsContainer = props => {
  const {skillsDetails} = props
  const {name, skillsImageUrl} = skillsDetails
  return (
    <li className="skills-name-container">
      <img src={skillsImageUrl} alt={name} className="skill-img" />
      <p className="skill-name">{name}</p>
    </li>
  )
}

export default SkillsContainer
