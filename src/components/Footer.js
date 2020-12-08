import React from "react"
import { Link } from "gatsby"

import logo from "../img/logo.png"
import instagramIcon from "../img/social/instagram.svg"
import youtubeIcon from "../img/social/youtube.svg"
import facebookIcon from "../img/social/facebook.svg"

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='content has-text-centered'>
          <div className='container'>
          <div className="block">
            <img src={logo} alt='MerakiOse' style={{ width: "18em", marginBottom: "2em" }} />
          </div>
          <div className="block">
            <h1 style={{color: "#fff"}}>Inscrivez vous a ma newsletter Aujourd'hui!</h1>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input 
                  className="input newsletter is-medium" 
                  type="email" 
                  placeholder="Entrez votre address email" 
                  />
              </div>
              <div className="control">
                <a className="button is-medium newsletter-btn">
                  S'inscrire
                </a>
              </div>
            </div>
          </div>
          <hr />
            <section>
              <div className='columns'>
                <div className='column is-2'>
                  <small className='navbar-item'>© 2020 MerakiOse.</small>
                </div>
                <div className='column is-2'>
                  <Link to='/' className='navbar-item footer-link'>
                    Accueil
                  </Link>
                </div>
                <div className='column is-2'>
                  <Link className='navbar-item footer-link' to='/about'>
                    À Propos
                  </Link>
                </div>
                <div className='column is-2'>
                  <Link className='navbar-item footer-link' to='/blog'>
                    Blog
                  </Link>
                </div>
                <div className='column is-2'>
                  <Link className='navbar-item footer-link' to='/products'>
                    Coaching
                  </Link>
                </div>
                <div className='column is-2'>
                  <Link className='navbar-item footer-link' to='/contact'>
                    Contact
                  </Link>
                </div>
                <div className='column is-2 '>
                  <div className="navbar-item footer-link">
                  <Link to='https://www.instagram.com/merakiose/'>
                    <img src={instagramIcon} style={{width: "18px", marginRight: "1em"}} />
                  </Link>
                  <Link to='https://www.youtube.com/user/merakiose/'>
                    <img src={youtubeIcon} style={{width: "18px", marginRight: "1em"}} />
                  </Link>
                  <Link to='https://www.facebook.com/merakiose/'>
                    <img src={facebookIcon} style={{width: "18px"}} />
                  </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
