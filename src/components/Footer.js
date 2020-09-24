import React from "react"
import { Link } from "gatsby"

import logo from "../img/logo.png"

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='content has-text-centered'>
          <img src={logo} alt='Kaldi' style={{ width: "18em" }} />
        </div>
        <div className='content has-text-centered'>
          <div className='container'>
            <div style={{ maxWidth: "100vw" }} className='columns'>
              <div className='column is-6'>
                <section className='menu'>
                  <ul className='menu-list'>
                    <li>
                      <Link to='/' className='navbar-item'>
                        Accueil
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/about'>
                        À Propos
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/blog'>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className='navbar-item' to='/products'>
                        Coaching
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className='column is-6'>
                <section className='menu'>
                  <ul className='menu-list'>
                    <li>
                      <a
                        className='navbar-item'
                        href='mailto:contact@merakiose.com'
                      >
                        ✉️ &nbsp; contact@merakiose.com
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
