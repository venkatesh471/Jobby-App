import {Link} from 'react-router-dom'

import {FaMapMarkerAlt} from 'react-icons/fa'

import {BsBriefcaseFill, BsFillStarFill} from 'react-icons/bs'

import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    title,
    id,
    companyLogoUrl,
    jobDescription,
    location,
    rating,
    employmentType,
    packagePerAnnum,
  } = jobData

  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-item">
        <div className="company-job-details-container">
          <img src={companyLogoUrl} alt="company logo" className="thumbnail" />
          <div className="job-details-container">
            <h1 className="title">{title}</h1>
            <div className="rating-container">
              <BsFillStarFill className="star" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-employment-package-container">
          <div className="location-employment-container">
            <div className="location-container">
              <FaMapMarkerAlt className="map" />
              <p className="location">{location}</p>
            </div>
            <div className="employment-container">
              <BsBriefcaseFill className="job" />
              <p className="employment-type">{employmentType}</p>
            </div>
          </div>
          <p className="package">{packagePerAnnum}</p>
        </div>
        <hr className="line" />
        <div className="job-description-container">
          <h1 className="job-description-heading">Description</h1>
          <p className="job-description">{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobCard
