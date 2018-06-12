import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Dotdotdot from 'react-dotdotdot'
import './assets/category.css'
import Error from '../Error'
import IntoLogo from '../../assets/imgs/into-logo.svg'
import CultureBanner from '../../assets/imgs/culture.png'
import ImpactBanner from '../../assets/imgs/impact.png'
import LatestBanner from '../../assets/imgs/latest.png'
import TravelBanner from '../../assets/imgs/travel.png'
import YouBanner from '../../assets/imgs/you.png'
import MobileAd from '../../components/MobileAd'

export class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({loading: true, posts: []})
    this.pageNum = 1
    this.tagName = ''

    this.getPosts = (paging) => {
      if (!paging) {
        this.categorySlug = window.location.pathname.split('/')[1]
        if (this.categorySlug === 'videos') {
          this.categoryNum = '&categories=54'
          document.querySelector('body').classList.add('video-category')
        } else if (this.categorySlug === 'travel') {
          this.bannerType = TravelBanner
          this.categoryNum = '&categories=3'
          document.querySelector('body').classList.remove('video-category')
        } else if (this.categorySlug === 'culture') {
          this.bannerType = CultureBanner
          this.categoryNum = '&categories=4'
          document.querySelector('body').classList.remove('video-category')
        } else if (this.categorySlug === 'you') {
          this.bannerType = YouBanner
          this.categoryNum = '&categories=5'
          document.querySelector('body').classList.remove('video-category')
        } else if (this.categorySlug === 'impact') {
          this.bannerType = ImpactBanner
          this.categoryNum = '&categories=6'
          document.querySelector('body').classList.remove('video-category')
        } else if (this.categorySlug === 'latest') {
          this.bannerType = LatestBanner
          this.categoryNum = ''
          document.querySelector('body').classList.remove('video-category')
        } else {
          this.categoryNum = ''
          document.querySelector('body').classList.remove('video-category')
          this.bannerType = null
        }
        this.pageNum = 1
      } else {
        this.pageNum++
      }
      
      if (this.props.location.search === '?filter=HIV_AIDS') {
        this.tagName = '&tags=17'
      } else if (this.props.location.search === '?filter=Marriage') {
        this.tagName = '&tags=18'
      } else if (this.props.location.search === '?filter=Art') {
        this.tagName = '&tags=19'
      } else if (this.props.location.search === '?filter=Celebrity') {
        this.tagName = '&tags=20'
      } else if (this.props.location.search === '?filter=Drag') {
        this.tagName = '&tags=21'
      } else if (this.props.location.search === '?filter=Film') {
        this.tagName = '&tags=22'
      } else if (this.props.location.search === '?filter=Music') {
        this.tagName = '&tags=23'
      } else if (this.props.location.search === '?filter=Style') {
        this.tagName = '&tags=24'
      } else if (this.props.location.search === '?filter=TV') {
        this.tagName = '&tags=25'
      } else if (this.props.location.search === '?filter=Features') {
        this.tagName = '&tags=26'
      } else if (this.props.location.search === '?filter=Politics_&_News') {
        this.tagName = '&tags=27'
      } else if (this.props.location.search === '?filter=World_Travel') {
        this.tagName = '&tags=28'
      } else if (this.props.location.search === '?filter=Reviews') {
        this.tagName = '&tags=29'
      } else if (this.props.location.search === '?filter=Guides') {
        this.tagName = '&tags=30'
      } else if (this.props.location.search === '?filter=Dating_&_Love') {
        this.tagName = '&tags=31'
      } else if (this.props.location.search === '?filter=Hola_Papi') {
        this.tagName = '&tags=32'
      } else if (this.props.location.search === '?filter=Horoscopes') {
        this.tagName = '&tags=33'
      } else if (this.props.location.search === '?filter=Thots_&_Thoughts') {
        this.tagName = '&tags=34'
      } else if (this.props.location.search === '?filter=Wellness') {
        this.tagName = '&tags=35'
      } else {
        this.tagName = ''
      }
      
      fetch('https://cms.stage-intomore.com/wp-json/wp/v2/posts/?per_page=20&page=' + this.pageNum + this.categoryNum + this.tagName + '')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(responsePosts => {
        responsePosts.map((item, i) => {
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
          } else {
            category = 'culture'
          }
          
          if(this.state.posts.length === 0) {
            document.querySelector('#into-post-'+ i +' h2').innerHTML = item.title.rendered
            document.querySelector('#into-post-'+ i +' .gc-image').style.backgroundImage = 'url(' + item.acf.wide_crop + ')'
            document.querySelector('#into-post-'+ i +' .author-data').innerHTML = item.acf.select_author
            document.querySelector('#into-post-'+ i +' .gc').setAttribute('href', window.location.origin + '/' + category + '/' + item.slug)  
          }
        })
        
        return this.state.posts.concat(responsePosts)
      })
      .then(posts => this.setState({posts, loading: false}))
      .catch(error => console.error(error))
    }
    this.getPosts(false)

    const isScrolledIntoView = () => {
      const el = document.querySelector('#footer')
      const rect = el.getBoundingClientRect()
      const elemTop = rect.top
      const elemBottom = rect.bottom
      const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
      return isVisible
    }
    
    window.addEventListener('scroll', () => {
      isScrolledIntoView()
      if (isScrolledIntoView() === true) {
        this.getPosts(true)
      }
      console.log(isScrolledIntoView())
    }, true)
    
    window.addEventListener('touchmove', () => {
      setTimeout(() => {
        this.getPosts(true)
      }, 5000) 
      
    }, true)
    
  

    //top ad
    const script0 = document.createElement("script");
      script0.text = "apntag.anq.push(function() {\n" +
    "apntag.showTag('Sec_D_Top_LB')\n" +
    "});";
    document.getElementById("Sec_D_Top_LB").appendChild(script0);

    window.addEventListener("load", function(event) {
      const script = document.createElement("script");
        script.text = "apntag.anq.push(function() {\n" +
      "apntag.showTag('Sec_M_MedRec1')\n" +
      "});";
      document.getElementById("Sec_M_MedRec1").appendChild(script);
    })
  
    const script2 = document.createElement("script")
      script2.text = "apntag.anq.push(function() {\n" +
    "apntag.showTag('A_M_Banner')\n" +
    "})"
    setTimeout(()=>{
      document.getElementById("A_M_Banner").appendChild(script2)
    },2000)
  }

  componentWillMount() {
    this.routeChange = this.props.history.listen((location, action) => {
      this.tagName = ''
      this.getPosts(false)
      window.location.reload()
    })
  }

  componentDidUpdate() {
    const tagClick = (selector, tag) => {
      if (!tag) {
        tag = selector
      } 
      document.querySelector('.' + selector + '').addEventListener('click', () => {
        window.location.reload()
        this.props.history.push('?filter=' + tag + '')
      }, { once: true })
    }
    
    if (this.categorySlug === 'travel') {
      tagClick('Features')
      tagClick('Guides')
      tagClick('Reviews')
    } else if (this.categorySlug === 'culture') {
      tagClick('Art')
      tagClick('Celebrity')
      tagClick('Drag')
      tagClick('Film')
      tagClick('Music')
      tagClick('Style')
      tagClick('TV')
    } else if (this.categorySlug === 'you') {
      tagClick('DatingLove', 'Dating_&_Love')
      tagClick('HolaPapi', 'Hola_Papi')
      tagClick('Horoscopes')
      tagClick('ThotsThoughts', 'Thots_&_Thoughts')
      tagClick('Wellness')
    } else if (this.categorySlug === 'impact') {
      tagClick('Features')
      tagClick('HIVAIDS', 'HIV_AIDS')
      tagClick('Marriage')
      tagClick('PoliticsNews', 'Politics_&_News')
      tagClick('WorldTravel', 'World_Travel')
    }
  }

  render() {
    const {
      posts,
      loading
    } = this.state

    const heroBanner = () => (
      <div className='hero-container'>
        <div className='hero' style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' + this.bannerType + ')'
          }}/>
        <div className='hero-detail'>
          <div className='outer'>
            <p>{this.categorySlug}</p>
          </div>
        </div>
      </div>
    )
    
    const postContent = (item, i) => {
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
      } else {
        category = 'culture'
      }
      return (
        <div key={i} className='col-lg-4'>
        <Link className='gc' to={`/${category}/${item.slug}`}>
          <div className='gc-image' style={{
              backgroundImage: 'url(' + item.acf.wide_crop + ')'
            }}/>
          <div className='gc-detail'>
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
      </div>
      )
    }
    
    const tempContent = (index) => (
        <div id={index} className='col-lg-4'>
        <a className='gc' href='#'>
          <div className='gc-image' />
          <div className='gc-detail'>
            <Dotdotdot clamp={3}>
              <h2 className='gc-detail-title'></h2>
            </Dotdotdot>
            <div className='gc-detail-author'>
              <div className='author-data'></div>
            </div>
          </div>
        </a>
      </div>
    )

    const filterSection = () => {
      let filterItems = []
      if (this.categorySlug === 'travel') {
        filterItems = ['Features', 'Guides', 'Reviews']
      } else if (this.categorySlug === 'culture') {
        filterItems = ['Art', 'Celebrity', 'Drag', 'Film', 'Music', 'Style', 'TV']
      } else if (this.categorySlug === 'you') {
        filterItems = ['Dating & Love', 'Hola Papi', 'Horoscopes', 'Thots & Thoughts', 'Wellness']
      } else if (this.categorySlug === 'impact') {
        filterItems = ['Features', 'HIV/AIDS', 'Marriage', 'Politics & News', 'World Travel']
      }
      this.filterResults = filterItems.map((item, i) => (
        <li key={i}>
            <a className={item.replace(/[^0-9a-zA-Z]/g, '')}>{item}</a>
        </li>
      ))
    }
    filterSection()
  
    const adContent1 = (item, i) => (<div key={i} className='col-lg-4 '>
      <div className='right-ad'>
        <div className='advertisement-label'>
          Advertisement
        </div>
        <div className='advertisement-img' >
          {/*<img src={RightAd} alt='alt'/>*/}
          <div id="Sec_M_MedRec1" ref = "cpDev1">
          </div>
        </div>
      </div>
    </div>)
  
    const adContent2 = (item, i) => (<div key={i} className='col-lg-4 '>
      <div className='right-ad'>
        <div className='advertisement-label'>
          Advertisement
        </div>
        <div className='advertisement-img'>
          {/*<img src={RightAd} alt='alt'/>*/}
          <div id="Sec_M_MedRec2">

          </div>
        </div>
      </div>
    </div>)

    //const gridTwo = posts.slice(0, 2).map((item, i) => postContent(item, i))
    // const gridTwo = tempContent()
    
    const displayAd1 = adContent1('', 2)
    
    // posts.map((item, i) => {
    //   console.log("display ad:" + i)
    //   if (i === 2) {
    //     return adContent1(item, i)
    //   }
    // })

    const gridTwentyNine = posts.slice(2, 31).map((item, i) => postContent(item, i))

    const displayAd2 = posts.map((item, i) => {
      if (i === 31) {
        return adContent2(item, i)
      }
    })



    const gridRemainder = posts.slice(31).map((item, i) => postContent(item, i))

    return (<div className='wrapper' ref = "nick" >
      <MobileAd/>
      <div className='banner-wrapper'>
        <div className='into-container'>
          {heroBanner()}
        </div>
      </div>
      <div className='page'>
        <div className='category-wrapper'>
          <div className='into-container category-list' id="jun">
            <div className='video-logo text-uppercase'>
              <img src={IntoLogo} alt='alt'/>
              <span>video</span>
            </div>
            <div className='main-section-subhead'>
              <ul>
                {this.filterResults}
              </ul>
            </div>
            <div className='row category-list-all'>
              {/*gridTwo*/}
              {tempContent('into-post-0')}
              {tempContent('into-post-1')}
              {displayAd1}
              {/*gridTwentyNine*/}
              {tempContent('into-post-2')}
              {tempContent('into-post-3')}
              {tempContent('into-post-4')}
              {tempContent('into-post-5')}
              {tempContent('into-post-6')}
              {tempContent('into-post-7')}
              {tempContent('into-post-8')}
              {tempContent('into-post-9')}
              {tempContent('into-post-10')}
              {tempContent('into-post-11')}
              {tempContent('into-post-12')}
              {tempContent('into-post-13')}
              {tempContent('into-post-14')}
              {tempContent('into-post-15')}
              {tempContent('into-post-16')}
              {tempContent('into-post-17')}
              {tempContent('into-post-18')}
              {tempContent('into-post-19')}
              {displayAd2}
              {gridRemainder}
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Category





