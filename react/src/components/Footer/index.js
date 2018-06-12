import React, { Component}  from 'react'
import {Link} from 'react-router-dom'
import './assets/style.css'
import Logo from '../../assets/imgs/into-logo.svg'
import SubscribeForm from '../SubscribeForm'

export class Footer extends Component {
  render() {
    return (<div className='footer-wrapper'>
      <div id='footer'>
        <div className='into-container'>
          <div className='row'>
            <div className='col-xs-12 col-lg-3'>
              <div className='footer-logo'>
                <Link to='/'>
                  <img src={Logo} alt='alt'/>
                </Link>
                <span className=' grindr-footer-blurb-mobile'>
                  So what are you INTO?
                </span>
              </div>
              <div className='social-left'>
                <div className='pc-social-links'>
                  <ul className='into-socialbox-links'>
                    <li>
                      <a href='https://www.facebook.com/INTO' target='_blank' rel='noopener noreferrer' className='social-svg facebook-svg social-svg-inverted'><span/></a>
                    </li>
                    <li>
                      <a href='https://twitter.com/INTO' target='_blank' rel='noopener noreferrer' className='social-svg twitter-svg social-svg-inverted'><span/></a>
                    </li>
                    <li>
                      <a href='https://www.instagram.com/INTOmore/' target='_blank' rel='noopener noreferrer' className='social-svg instagram-svg social-svg-inverted'><span/></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-lg-9 footer-bottom-row'>
              <ul className='footer-nav'>
                <li>
                  <Link to='/latest'>latest</Link>
                </li>
                <li>
                  <Link to='/videos'>video</Link>
                </li>
                <li>
                  <Link to='/travel'>travel</Link>
                </li>
                <li>
                  <Link to='/culture'>culture</Link>
                </li>
                <li>
                  <Link to='/impact'>impact</Link>
                </li>
                <li>
                  <Link to='/you'>you</Link>
                </li>
              </ul>
              <div className='footer-into-form'>
                <div className='row'>
                  <div className='col-xs-12 col-lg-4'>
                    <div className='footer-sub-text'>
                      SIGN ME UP FOR THE LATEST.
                    </div>
                  </div>
                  <div className='col-xs-12 col-lg-8'>
                    <div className='grindr-footer-form'>
                      <SubscribeForm/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mobile-social-links'>
            <ul className='into-socialbox-links'>
              <li>
                <a href='https://www.facebook.com/INTO' target='_blank' rel='noopener noreferrer' className='social-svg facebook-svg social-svg-inverted'><span/></a>
              </li>
              <li>
                <a href='https://twitter.com/INTO' target='_blank' rel='noopener noreferrer' className='social-svg twitter-svg social-svg-inverted'><span/></a>
              </li>
              <li>
                <a href='https://www.instagram.com/INTOmore/' target='_blank' rel='noopener noreferrer' className='social-svg instagram-svg social-svg-inverted'><span/></a>
              </li>
            </ul>
            <ul className='other-links '>
              <li>
                <Link to='#'>
                  Privacy Policy
                </Link>

              </li>
              <li>
                <Link to='#'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-bottom'>
            <div className='grindr-footer-links row'>
              <div className='col-xs-12 col-lg-3 grindr-footer-blurb'>
                So what are you INTO?
              </div>
              <div className='into-copyright col-xs-12 col-lg-3'>
                2017-2018 INTO. All Rights Reserved.
              </div>
              <ul className='col-xs-12 col-lg-6 other-links '>
                <li>
                  <Link to='/About'>
                    About
                  </Link>
                </li>
                <li>
                  <Link to='/Advertise'>
                    Advertise
                  </Link>
                </li>
                <li>
                  <a href='mailto:submissions@intomore.com'>
                    Contact
                  </a>
                </li>
                <li>
                  <Link to='/Policy'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to='/Service'>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Footer
