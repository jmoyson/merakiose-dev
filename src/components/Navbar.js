import React from "react"
import { Link } from "gatsby"
import logo from "../img/logo.png"
import { drop } from "lodash"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
      blogCategoryClass: "",
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

  toggleBlogCategory = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        blogCategory: !this.state.blogCategory,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              blogCategoryClass: "is-active",
            })
          : this.setState({
              blogCategoryClass: "",
            })
      }
    )
  }

  render() {
    return (
      <nav
        className='navbar is-transparent is-fixed-top'
        role='navigation'
        aria-label='main-navigation'
      >
        <div className='container'>
          <div className='navbar-brand is-hidden-desktop left-burger'>
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
            <div className='navbar-center'>
              <Link className='navbar-item' to='/'>
                Accueil
              </Link>
              <Link className='navbar-item' to='/about'>
                À Propos
              </Link>
              <Link to='/' className='navbar-item hide-mobile' title='Logo'>
                <img
                  className='navbar-brand-image '
                  src={logo}
                  alt='MerakiOse'
                  style={{ width: "176px" }}
                />
              </Link>
              <div className='navbar-item has-dropdown is-hoverable' style={{ alignItems: "center" }}>
                <Link className='navbar-link dropdown-trigger navbar-dropdown-trigger' to='/blog'>
                  Blog
                </Link>
                <div className='navbar-dropdown'>
                  <a className='navbar-item'>Category 1</a>
                  <a className='navbar-item'>Category 2</a>
                  <a className='navbar-item'>Category 3</a>
                </div>
              </div>

              <Link className='navbar-item' to='/products'>
                Coaching
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
