import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Dotdotdot from 'react-dotdotdot'
import './assets/style.css'
import IntoLogo from '../../assets/imgs/into-logo.svg'
import IntoLogoBlack from '../../assets/imgs/into-logo-black.svg'
import SubscribeForm from '../../components/SubscribeForm'
import MobileAd from '../../components/MobileAd'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recentPosts: [],
      featuredPosts: [],
      trendingPosts: [],
      editorsPickPosts: [],
      travelPosts: [],
      youPosts: [],
      impactPosts: [],
      culturePosts: [],
      banner: [],
      videoPosts: []
    }
  }

  componentDidMount() {
      // //top ad
      const script0 = document.createElement("script");
      script0.text = "apntag.anq.push(function() {\n" +
          "apntag.showTag('HP_D_Top_SLB')\n" +
          "});";
      document.getElementById("HP_D_Top_SLB").appendChild(script0);

      const script = document.createElement("script");
      script.text = "apntag.anq.push(function() {\n" +
          "apntag.showTag('HP_D_Half_Page')\n" +
          "});";
      document.getElementById("HP_D_Half_Page").appendChild(script);

      const script1 = document.createElement("script");
      script1.text = "apntag.anq.push(function() {\n" +
          "apntag.showTag('HP_R_HalfPage2')\n" +
          "});";
      document.getElementById("HP_R_HalfPage2").appendChild(script1);

       const script2 = document.createElement("script");
        script2.text = "apntag.anq.push(function() {\n" +
          "apntag.showTag('HP_M_MedRec')\n" +
          "});";
      document.getElementById("HP_M_MedRec").appendChild(script2);

      const script3 = document.createElement("script");
        script3.text = "apntag.anq.push(function() {\n" +
          "apntag.showTag('HP_R_MedRec')\n" +
          "});";
      document.getElementById("HP_R_MedRec").appendChild(script3);
      
      const script4 = document.createElement("script")
      script4.text = "apntag.anq.push(function() {\n" +
          "apntag.showTag('A_M_Banner')\n" +
          "})"
      setTimeout(()=>{
        document.getElementById("A_M_Banner").appendChild(script4)
      },2000)

    const getBanner = () => {
      fetch('https://cms.intomore.com/wp-json/wp/v2/posts/?tags=36&per_page=1')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(banner => this.setState({banner}))
      .catch(error => console.error(error))
    }
    getBanner()
    
    const getPosts = () => {
      fetch('https://cms.intomore.com/wp-json/wp/v2/posts')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(recentPosts => this.setState({recentPosts, loading: false}))
      .catch(error => console.error(error))
    }
    getPosts()
    
    const getFeaturedPosts = () => {
      fetch('https://cms.intomore.com/wp-json/wp/v2/posts?tags=37')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(featuredPosts => this.setState({featuredPosts, loading: false}))
      .catch(error => console.error(error))
    }
    getFeaturedPosts()
    
    const getTrendingPosts = () => {
      fetch('https://cms.intomore.com/wp-json/wp/v2/posts/?page=2')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(trendingPosts => this.setState({trendingPosts, loading: false}))
      .catch(error => console.error(error))
    }
    getTrendingPosts()
    
    const getEditorsPickPosts = () => {
      fetch('https://cms.intomore.com/wp-json/wp/v2/posts?tags=38')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(editorsPickPosts => this.setState({editorsPickPosts, loading: false}))
      .catch(error => console.error(error))
    }
    getEditorsPickPosts()
    
    const getTravelPosts = () => {
      fetch('https://cms.intomore.com/wp-json/wp/v2/posts?categories=3')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(travelPosts => this.setState({travelPosts, loading: false}))
      .catch(error => console.error(error))
    }
    getTravelPosts()
    
    const getYouPosts = () => {
      fetch('https://cms.intomore.com/wp-json/wp/v2/posts?categories=5')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(youPosts => this.setState({youPosts, loading: false}))
      .catch(error => console.error(error))
    }
    getYouPosts()
    
    const getImpactPosts = () => {
      fetch('https://cms.intomore.com/wp-json/wp/v2/posts?categories=6')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(impactPosts => this.setState({impactPosts, loading: false}))
      .catch(error => console.error(error))
    }
    getImpactPosts()
    
    const getCulturePosts = () => {
      fetch('https://cms.intomore.com/wp-json/wp/v2/posts?categories=4')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(culturePosts => this.setState({culturePosts, loading: false}))
      .catch(error => console.error(error))
    }
    getCulturePosts()
    
    const getVideoPosts = () => {
      fetch('https://cms.intomore.com/wp-json/wp/v2/posts?categories=54&per_page=1')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(videoPosts => this.setState({videoPosts, loading: false}))
      .catch(error => console.error(error))
    }
    getVideoPosts()
  }

  render() {
    const {
      recentPosts, 
      featuredPosts, 
      trendingPosts, 
      editorsPickPosts,
      travelPosts,
      youPosts,
      impactPosts,
      culturePosts,
      banner,
      videoPosts
    } = this.state
    
    const categoryType = (item) => {
      let category
      if (item.categories[0] === 54) {
        category = 'videos'
      } else if (item.categories[0] === 3) {
        category = 'travel'
      } else if (item.categories[0] === 4) {
        category = 'culture'
      } else if (item.categories[0] === 5) {
        category = 'you'
      } else if (item.categories[0] === 6) {
        category = 'impact'
      }
      return category
    }
    
    const heroBanner = banner.map((item, i) => (
        <Link key={i} className='hero-container' to={`/${categoryType(item)}/${item.slug}`}>
          <div className='hero' style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' + item.acf.wide_crop + ')'
            }}/>
          <div className='hero-detail'>
            <div className='outer'>
              <p>{item.title.rendered}</p>
            </div>
          </div>
        </Link>
      )
    )
    
    const postContent = (item, i, addClasses) => (
        <Link key={i} className={addClasses} to={`/${categoryType(item)}/${item.slug}`}>
          <div className='gc-image' style={{
              backgroundImage: 'url(' + item.acf.wide_crop + ')'
            }}/>
          <div className='gc-detail'>
            <p className='gc-detail-section'>{categoryType(item)}</p>
            <Dotdotdot clamp={3}>
              <h2 className='gc-detail-title' dangerouslySetInnerHTML={{
                  __html: item.title.rendered
                }}/>
            </Dotdotdot>
            <div className='gc-detail-author'>
              <div className='author-data' dangerouslySetInnerHTML={{
                __html: item.acf.select_author
              }}/>
            </div>
          </div>
        </Link>
    )

    const firstGridOne = recentPosts.slice(0, 1).map((item, i) => (
      <div key={i} className='col-12 col-lg-8'>
          {postContent(item, i, 'gc')}
      </div>)
    )

    const firstGridFour = recentPosts.slice(1, 5).map((item, i) => (
      <div key={i} className='col-12 col-lg-4'>
        {postContent(item, i, 'gc')}
      </div>)
    )
    
    const secondGridOne = recentPosts.slice(5, 6).map((item, i) => (
      <div key={i} className='col-12 col-lg-8'>
          {postContent(item, i, 'gc')}
      </div>)
    )

    const secondGridFour = recentPosts.slice(6, 10).map((item, i) => (
      <div key={i} className='col-12 col-lg-4'>
        {postContent(item, i, 'gc')}
      </div>)
    )

    const featured = featuredPosts.slice(0, 1).map((item, i) => (
      <div key={i} className='col-12'>
        <div className='grindr-section-head'>
          <h1>Featured</h1>
        </div>
        {postContent(item, i, 'gc')}
      </div>)
    )

    const trending = trendingPosts.slice(0, 3).map((item, i) => (
      <div key={i}>
        {postContent(item, i, 'gc gc-sm')}
      </div>
      )
    )

    const gridTwoFeatured = featuredPosts.slice(1, 3).map((item, i) => (
      <div key={i} className='col-12 col-lg-6 '>
        {postContent(item, i, 'gc gc-hero')}
      </div>)
    )

    const editorsPick = editorsPickPosts.slice(0, 1).map((item, i) => (
      <div key={i}>
        {postContent(item, i, 'gc gc-hero')}
      </div>)
    )

    const travel = travelPosts.slice(0,1).map((item, i) => (
      <div key={i}>
        {postContent(item, i, 'gc gc-hero')}
      </div>)
    )

    const travelRows = travelPosts.slice(1,5).map((item, i) => (
      <div key={i}>
        {postContent(item, i, 'gc gc-sm')}
      </div>)
    )

    const you = youPosts.slice(0,1).map((item, i) => (
      <div key={i}>
        {postContent(item, i, 'gc gc-hero')}
      </div>)
    )

    const youRows = youPosts.slice(1,5).map((item, i) => (
      <div key={i}>
        {postContent(item, i, 'gc gc-sm')}
      </div>)
    )

    const impact = impactPosts.slice(0,1).map((item, i) =>(
      <div key={i}>
        {postContent(item, i, 'gc gc-hero')}
      </div>)
    )

    const impactRows = impactPosts.slice(1,4).map((item, i) => (
      <div key={i}>
        {postContent(item, i, 'gc gc-sm')}
      </div>)
    )

    const recent = recentPosts.slice(0,1).map((item, i) => (
      <div key={i}>
        {postContent(item, i, 'gc gc-hero')}
      </div>)
    )

    const recentRows = recentPosts.slice(1,4).map((item, i) => (
      <div key={i}>
      {postContent(item, i, 'gc gc-sm')}
    </div>)
    )

    const culture = culturePosts.slice(0,1).map((item, i) => (
      <div key={i}>
        {postContent(item, i, 'gc gc-hero')}
      </div>)
    )

    const cultureRows = culturePosts.slice(1,4).map((item, i) => (
      <div key={i}>
        {postContent(item, i, 'gc gc-sm')}
      </div>)
    )
    
    const video = videoPosts.map((item, i) => (
      <div key={i}>
        <div className='banner-video' dangerouslySetInnerHTML={{
            __html: item.acf.video_embed
          }}/>
        <div className='video-bg-box'>
          <div className='video-logo text-uppercase'>
            <img src={IntoLogo} alt='alt'/>
            <span>video</span>
          </div>
          <div className='video-title'>{item.title.rendered}</div>
        </div>
      </div>)
    )
    
    return (<div>
      <MobileAd/>
      <div className='banner-wrapper'>
        <div className='into-container'>
          {heroBanner}
        </div>
      </div>
      <div className='page'>
        <div className='home-wrapper'>
          {/* home start */}
          <div className='into-container ' id='index-main'>
            <div className='row'>
              <div className='col-12 col-lg-8 '>
                <div className='row whiteback'>
                  {firstGridOne}
                  {firstGridFour}
                  {secondGridOne}
                  {secondGridFour}
                </div>
                {/* feature */}
                <div className='row whiteback feature'>
                  {featured}
                </div>
                {/* subscribe */}
                <div className='main-subscribe row whiteback'>
                  <img className='black-logo d-block d-lg-none' src={IntoLogoBlack} alt='alt'/>
                  <div className='col-12 order-lg-1 col-lg-7'>
                    <div className='grindr-form'>
                      <p>
                        SIGN ME UP FOR THE LATEST.
                      </p>
                      <SubscribeForm/>
                    </div>
                  </div>
                  <div className='col-12 order-lg-0 col-lg-5'>
                    <div className='into-socialbox'>
                      <p>
                        Follow us. Or don't, whatever.
                      </p>
                    </div>
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
                </div>
              </div>
              {/* advertise   right */}
              <div className='col-12 col-lg-4'>
                <div className='right-ad'>
                  <div className='advertisement-img'>
                    <div id="HP_D_Half_Page">
                    </div>
                  </div>
                </div>
                {/* trend */}
                <div className='trend'>
                  <div className='trend-label text-uppercase'>trending</div>
                  {trending}
                </div>
              </div>
            </div>
          </div>
          {/* video */}
          <div id='index-video'>
            <div className='video-container'>
              <div className='gc-section-video'>
                {video}
              </div>
              <div className='grindr-section-more'>
                <Link to='/videos' className='text-uppercase'>more</Link>
              </div>
            </div>
          </div>
          <div className='into-container '>
            <div className='row'>
              <div className='col-12 col-lg-8 '>
                <div className='grindr-section-head'>
                  <h1>Featured</h1>
                </div>
                <div className='row lr-gc lr-gc-margin'>
                  {gridTwoFeatured}
                </div>
              </div>
              <div className='col-12 col-lg-4'>
                <div className='grindr-section-head'>
                  <h1>
                    Editor's Pick
                  </h1>
                </div>
                <div className='row lr-gc'>
                  <div className='col-12'>
                    {editorsPick}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='into-container video-bot'>
            <div className='row'>
              <div className='col-12 col-lg-4'>
                <div className='into-section-bar'>
                  travel
                </div>
                {travel}
                <div className='gcl'>
                  {travelRows}
                  <div className='grindr-section-more'>
                    <Link to='/travel' className='btn-into-section-more'>more</Link>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4'>
                <div className='into-section-bar'>
                  you
                </div>
                {you}
                <div className='gcl'>
                  {youRows}
                  <div className='grindr-section-more'>
                    <Link to='/you' className='btn-into-section-more'>more</Link>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4'>
                {/* advertise   right */}

                <div className='right-ad'>
                  <div className='advertisement-img'>
                    {/*<img src={RightAd} alt='alt'/>*/}
                    <div id="HP_R_HalfPage2">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* index-bot */}
          <div className='index-bot into-container'>
            <div className='row'>
              <div className='col-12 col-lg-4'>
                <div className='into-section-bar'>
                  impact
                </div>
                {impact}
                <div className='gcl'>
                  {impactRows}
                  <div className='grindr-section-more'>
                    <Link to='/impact' className='btn-into-section-more'>more</Link>
                  </div>
                </div>
                {/* advertise   mid */}
                <div className='col-12'>
                  <div className='right-ad mid-ad'>
                    <div className='advertisement-img'>
                      {/*<img src={RightAd} alt='alt'/>*/}
                      <div id="HP_M_MedRec">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4'>
                {/* advertise   mid */}
                <div className='right-ad mid-ad'>
                  <div className='advertisement-img'>
                    {/*<img src={RightAd} alt='alt'/>*/}
                    <div id="HP_R_MedRec">
                    </div>
                  </div>
                </div>
                <div className='into-section-bar'>
                  recent
                </div>
                {recent}
                <div className='gcl'>
                  {recentRows}
                  <div className='grindr-section-more'>
                    <Link to='/latest' className='btn-into-section-more'>more</Link>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-4'>
                <div className='into-section-bar'>
                  culture
                </div>
                {culture}
                <div className='gcl'>
                  {cultureRows}
                  <div className='grindr-section-more'>
                    <Link to='/culture' className='btn-into-section-more'>more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* home end */}
        </div>
      </div>
    </div>)
  }
}

export default Home
