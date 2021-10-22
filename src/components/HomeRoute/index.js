import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const HomeRoute = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="home-app-container">
        <div className="home-content">
          <h1 className="home-heading">Find The Job That Fits Your life</h1>
          <p className="home-description">
            Millions of people are searching for jobs,salary information and
            company reviews.Find the job that fits your abilities and potential.
          </p>
          <Link to="/jobs">
            <button type="button" className="find-jobs-button">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomeRoute
