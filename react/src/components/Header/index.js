import React, { Component}  from 'react'
import {Link} from 'react-router-dom'
import './assets/style.css'
import Logo from '../../assets/imgs/into-logo-black.svg'
import Search from '../Search'
import HomeTopAd  from '../HomeTopAd'
import CategoryTopAd from '../CategoryTopAd'
import ArticleTopAd from '../ArticleTopAd'
import SubscribeForm from '../SubscribeForm'

export class Header extends Component {
  navDropdown() {
    const header = document.querySelector('.header-wrapper')
    !header.classList.contains('active-nav')
      ? header.classList.add('active-nav')
      : header.classList.remove('active-nav')
      
      const getElm = () => [...document.querySelectorAll('a')].map((item) => {
        item.onclick = () => {
          header.classList.remove('active-nav')
        }
      })
      window.onload = getElm
  }
  emailDropdown() {
    const header = document.querySelector('.header-wrapper')
    !header.classList.contains('active-email')
      ? header.classList.add('active-email')
      : header.classList.remove('active-email')
  }
  searchDropdown() {
    const header = document.querySelector('.header-wrapper')
    !header.classList.contains('active-search')
      ? header.classList.add('active-search')
      : header.classList.remove('active-search')
  }

	adType() {
		const categorySlug = window.location.pathname.split('/')[1]
		const articleSlug = window.location.pathname.split('/')[2]
		if (categorySlug === '') {
			return <HomeTopAd/>
		} else if (categorySlug !== '' && articleSlug === undefined) {
			return <CategoryTopAd/>
		} else {
			return <ArticleTopAd/>
		}
	}

  render() {
    return (<div className='header-wrapper'>
      <div className='container-fluid grindr-header-container'>
				{this.adType()}
        {/* Mobile header start */}
        <div className='into-header-mobile-wrapper'>
          <div className='into-header-mobile'>
            <div>
              <div className='into-burger-mobile' onClick={this.navDropdown}/>
            </div>
            <div>
              <Link to='/'>
                <img src={Logo} alt='alt'/>
              </Link>
            </div>
            <div/>
          </div>
          <div className='into-header-mobile-nav'>
            <div className='into-search-container'>
              <div className='mobile-nav-search'>
                {/*<form action='action'>*/}
                  {/*<input type='text' placeholder='Search...'/>*/}
                <Search />
                {/*<span className='cancel'/>*/}
                {/*</form>*/}

              </div>
            </div>
            <ul className='into-header-mobile-menu'>
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
                <Link to='/you'>you</Link>
              </li>
              <li>
                <Link to='/impact'>impact</Link>
              </li>
            </ul>
            <div className='className'>
              <div className='grindr-footer-form row'>
                <p>
                  SIGN ME UP FOR THE LATEST.
                </p>
                <SubscribeForm/>
              </div>
              <div className='into-socialbox'>
                <ul className='into-socialbox-links text-center'>
                  <li>
                    <a href='https://www.facebook.com/INTO' target='_blank' rel='noopener noreferrer' className='social-svg facebook-svg'><span/></a>
                  </li>
                  <li>
                    <a href='https://twitter.com/INTO' target='_blank' rel='noopener noreferrer' className='social-svg twitter-svg'><span/></a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/INTOmore/' target='_blank' rel='noopener noreferrer' className='social-svg instagram-svg'><span/></a>
                  </li>
                </ul>
              </div>
              <div className='into-nav-links-center'>
                <ul>
                  <li>
                    <Link to='/Advertise'>advertise</Link>
                  </li>
                  <li>
                    <Link to='/About'>about us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Mobile header end */}
        </div>
        {/* Desktop header start */}
        <div className='into-header-wrapper'>
          <div className='into-header'>
            <Link to='/' className='logo'>
              <img src={Logo} alt='alt'/>
            </Link>
            <ul className='into-nav'>
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
                <Link to='/you'>you</Link>
              </li>
              <li>
                <Link to='/impact'>impact</Link>
              </li>
            </ul>
            <div className='into-burger' onClick={this.navDropdown}/>
            <div className='into-envelope' onClick={this.emailDropdown}/>

            <div className='into-search'>
              <span onClick={this.searchDropdown}/>
              <div className='nav-into-search-popover'>
                <Search />
              </div>
            </div>
          </div>
          <div id='into-menu'>
            <div className='social-left'>
              <div>
                <ul className='into-socialbox-links'>
                  <li>
                    <a href='https://www.facebook.com/INTO' target='_blank' rel='noopener noreferrer' className='social-svg facebook-svg'><span/></a>
                  </li>
                  <li>
                    <a href='https://twitter.com/INTO' target='_blank' rel='noopener noreferrer' className='social-svg twitter-svg'><span/></a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/INTOmore/' target='_blank' rel='noopener noreferrer' className='social-svg instagram-svg'><span/></a>
                  </li>
                </ul>
              </div>
              <div className='into-links-right'>
                <ul>
                  <li>
                    <Link to='/Advertise'>advertise</Link>
                  </li>
                  <li>
                    <Link to='/About'>about us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id='into-email-nav'>
            <div className='email-subscribe'>
              <div>
                <span className='new-here'>
                  We're new here.&nbsp;
                </span>
                Queer news and culture. For everyone.
              </div>
              <SubscribeForm/>
            </div>
          </div>
        </div>
        {/* Desktop header end */}
      </div>
    </div>)
  }
}

export default Header






