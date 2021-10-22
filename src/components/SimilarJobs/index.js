import {FaMapMarkerAlt} from 'react-icons/fa'

import {BsBriefcaseFill, BsFillStarFill} from 'react-icons/bs'

import './index.css'

const similarJobItem = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    title,
    rating,
    jobDescription,
    location,
    employmentType,
  } = jobDetails

  return (
    <li className="similar-job-item">
      <div className="similar-company-job-details-container">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
          className="similar-thumbnail"
        />
        <div className="similar-job-details-container">
          <h1 className="similar-title">{title}</h1>
          <div className="similar-rating-container">
            <BsFillStarFill className="similar-star" />
            <p className="similar-rating">{rating}</p>
          </div>
        </div>
      </div>
      <div className="similar-job-description-container">
        <h1 className="similar-description">Description</h1>
        <p className="similar-job-description">{jobDescription}</p>
      </div>
      <div className="similar-location-employment-package-container">
        <div className="similar-location-employment-container">
          <div className="similar-location-container">
            <FaMapMarkerAlt className="similar-map" />
            <p className="similar-location">{location}</p>
          </div>
          <div className="similar-employment-container">
            <BsBriefcaseFill className="similar-job" />
            <p className="similar-employment-type">{employmentType}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default similarJobItem
