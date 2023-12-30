import {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdAccountCircle} from 'react-icons/md'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-bar-container">
        <h1 className="company-name">SUMDR Foods</h1>
        <ul className="nav-bar">
          <li className="nav-items">
            <Link className="Link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link className="Link" to="/about-us">
              About Us
            </Link>
          </li>
          <li className="nav-items">
            <Link className="Link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-items">
            <Link className="Link" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-items">
            <Link className="Link" to="/login">
              <MdAccountCircle className="login-logo" />
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
