import './index.css'

const FilterGroup = props => {
  const renderSalaryRangeList = () => {
    const {salaryList} = props
    return salaryList.map(salary => {
      const {changeSalaryRange} = props
      const onClickSalaryItem = () => {
        changeSalaryRange(salary.salaryRangeId)
      }

      return (
        <li className="salary-item" key={salary.salaryRangeId}>
          <input
            type="radio"
            id={salary.salaryRangeId}
            value={salary.salaryRangeId}
            className="radio"
            onClick={onClickSalaryItem}
          />
          <label htmlFor={salary.salaryRangeId} className="label">
            {salary.label}
          </label>
        </li>
      )
    })
  }
  const renderSalaryRange = () => (
    <div className="salary-range-container">
      <hr className="line" />
      <h1 className="salary-range">Salary Range</h1>
      <ul className="salary-list">{renderSalaryRangeList()}</ul>
    </div>
  )

  const renderEmploymentList = () => {
    const {employmentOptions} = props
    return employmentOptions.map(employment => {
      const {changeEmployment} = props
      const onClickEmploymentType = () => {
        changeEmployment(employment.employmentTypeId)
      }

      return (
        <li className="employment-item" key={employment.employmentTypeId}>
          <input
            type="checkbox"
            id={employment.employmentTypeId}
            value={employment.employmentTypeId}
            Checked={false}
            className="check-box"
            onClick={onClickEmploymentType}
          />
          <label htmlFor={employment.employmentTypeId} className="label">
            {employment.label}
          </label>
        </li>
      )
    })
  }
  const renderEmploymentType = () => (
    <div className="employment-type-container">
      <hr className="line" />
      <h1 className="employment-type-heading">Type of Employment</h1>
      <ul className="employment-list">{renderEmploymentList()}</ul>
    </div>
  )

  return (
    <div className="filters-group-container">
      {renderEmploymentType()}
      {renderSalaryRange()}
    </div>
  )
}

export default FilterGroup
