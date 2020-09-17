import React from "react"
import { Link } from "gatsby"
import logo from "../img/logo.png"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <nav
        className='navbar is-transparent'
        role='navigation'
        aria-label='main-navigation'
      >
        <div className='container'>
          <div className='navbar-brand left-burger'>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu'
              onClick={() => this.toggleHamburger()}
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </div>
            <Link to='/' className='navbar-item' title='Logo'>
              <img src={logo} alt='MerakiOse' style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
          </div>

          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className='navbar-start'>
              <Link className='navbar-item' to='/about'>
                À Propos
              </Link>
              <Link className='navbar-item' to='/products'>
                Boutique
              </Link>
              <Link className='navbar-item' to='/products'>
                Coaching
              </Link>
              <Link className='navbar-item' to='/blog'>
                Blog
              </Link>
              <Link className='navbar-item' to='/contact'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
