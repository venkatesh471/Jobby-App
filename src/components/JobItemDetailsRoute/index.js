import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {FaMapMarkerAlt, FaExternalLinkAlt} from 'react-icons/fa'

import {BsBriefcaseFill, BsFillStarFill} from 'react-icons/bs'

import SimilarJobs from '../SimilarJobs'
import SkillsContainer from '../SkillsContainer'

import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class JobItemDetailsRoute extends Component {
  state = {
    jobData: [],
    similarJobsData: [],
    skillsData: [],
    lifeAtCompany: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getJobDetailsData()
  }

  getSkillsFormattedData = data => ({
    name: data.name,
    skillsImageUrl: data.image_url,
  })

  getLifeAtCompanyFormattedData = data => ({
    description: data.description,
    lifeImageUrl: data.image_url,
  })

  getSimilarFormattedData = data => ({
    companyLogoUrl: data.company_logo_url,
    employmentType: data.employment_type,
    id: data.id,
    jobDescription: data.job_description,
    location: data.location,
    rating: data.rating,
    title: data.title,
  })

  getJobDetailsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = {
        companyLogoUrl: fetchedData.job_details.company_logo_url,
        companyWebsiteUrl: fetchedData.job_details.company_website_url,
        employmentType: fetchedData.job_details.employment_type,
        id: fetchedData.job_details.id,
        jobDescription: fetchedData.job_details.job_description,
        location: fetchedData.job_details.location,
        packagePerAnnum: fetchedData.job_details.package_per_annum,
        rating: fetchedData.job_details.rating,
        title: fetchedData.job_details.title,
      }
      const updatedSkillsData = fetchedData.job_details.skills.map(eachSkills =>
        this.getSkillsFormattedData(eachSkills),
      )
      const updatedSimilarData = fetchedData.similar_jobs.map(eachSimilarJob =>
        this.getSimilarFormattedData(eachSimilarJob),
      )
      const updatedLifeAtCompanyData = {
        description: fetchedData.job_details.life_at_company.description,
        lifeImageUrl: fetchedData.job_details.life_at_company.image_url,
      }
      this.setState({
        jobData: updatedData,
        skillsData: updatedSkillsData,
        similarJobsData: updatedSimilarData,
        lifeAtCompany: updatedLifeAtCompanyData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="jobs-details-loader-container" testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  retryFetchCall = () => {
    this.getJobDetailsData()
  }

  renderFailureView = () => (
    <div className="job-details-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="jobs-failure-img"
      />
      <h1 className="jobs-failure-heading">Oops! Something Went Wrong</h1>
      <p className="jobs-failure-text">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        type="button"
        className="failure-button"
        onClick={this.retryFetchCall}
      >
        Retry
      </button>
    </div>
  )

  renderJobDetailsView = () => {
    const {jobData, similarJobsData, skillsData, lifeAtCompany} = this.state
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      location,
      rating,
      employmentType,
      jobDescription,
      packagePerAnnum,
      title,
    } = jobData
    const {description, lifeImageUrl} = lifeAtCompany
    return (
      <div className="job-details-content">
        <div className="job-details-success-container">
          <div className="company-job-details-container">
            <img
              src={companyLogoUrl}
              alt="job details company logo"
              className="thumbnail"
            />
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
            <div className="heading-company-url">
              <h1 className="description">Description</h1>
              <a href={companyWebsiteUrl} className="visit-link">
                <button type="button" className="company-navigate-button">
                  <p className="visit">Visit</p>
                  <FaExternalLinkAlt />
                </button>
              </a>
            </div>
            <p className="job-description">{jobDescription}</p>
          </div>
          <div className="skills-container">
            <h1 className="skills-heading">Skills</h1>
            <ul className="skills-list">
              {skillsData.map(eachSkill => (
                <SkillsContainer
                  skillsDetails={eachSkill}
                  key={eachSkill.name}
                />
              ))}
            </ul>
          </div>
          <div className="life-at-company-container">
            <h1 className="life-at-company-heading">Life at Company</h1>
            <div className="description-image-container">
              <p className="life-company-description">{description}</p>
              <img
                src={lifeImageUrl}
                alt="life at company"
                className="company-life-image"
              />
            </div>
          </div>
        </div>
        <h1 className="similar-products-heading">Similar Jobs</h1>
        <ul className="similar-products-list">
          {similarJobsData.map(eachSimilarJob => (
            <SimilarJobs jobDetails={eachSimilarJob} key={eachSimilarJob.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderAllJobsDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="job-item-details-container">
          {this.renderAllJobsDetails()}
        </div>
      </>
    )
  }
}

export default JobItemDetailsRoute
