import {BsBriefcaseFill, BsBoxArrowRight, BsHouseDoorFill} from 'react-icons/bs'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-desktop-view">
          <Link to="/" className="link-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </Link>

          <ul className="nav-menu">
            <Link to="/" className="link-item">
              <li className="nav-menu-item">Home</li>
            </Link>
            <Link to="/jobs" className="link-item">
              <li className="nav-menu-item">Jobs</li>
            </Link>
          </ul>
          <button
            type="button"
            className="logout-button-desktop"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
        <div className="nav-bar-mobile-view">
          <Link to="/" className="link-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </Link>

          <ul className="nav-menu-list-mobile">
            <Link to="/" className="link-item">
              <li className="nav-menu-item-mobile">
                <BsHouseDoorFill className="nav-bar-image" />
              </li>
            </Link>

            <Link to="/jobs" className="link-item">
              <li className="nav-menu-item-mobile">
                <BsBriefcaseFill className="nav-bar-image" />
              </li>
            </Link>

            <button
              type="button"
              className="nav-mobile-button"
              onClick={onClickLogout}
            >
              <BsBoxArrowRight className="nav-bar-image" />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
