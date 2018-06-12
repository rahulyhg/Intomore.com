import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Moment from 'react-moment'
import Dotdotdot from 'react-dotdotdot'
import './assets/article.css'
import Error from '../Error'
import SubscribeForm from '../../components/SubscribeForm'
import MobileAd from '../../components/MobileAd'
import FacebookProvider, { Share } from 'react-facebook'
import {Helmet} from "react-helmet"


export class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: [],
      relatedPosts: [],
      trendingPosts: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    
    this.articleSlug = this.props.location.pathname.split('/')[2]
    
    this.getPost = () => {
      fetch('https://cms.stage-intomore.com/wp-json/wp/v2/posts/?slug=' + this.articleSlug + '')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(post => this.setState({post, loading: false}))
      .catch(error => console.error(error))
    }
    this.getPost()

    const getRelatedPosts = () => {
      const categorySlug = window.location.pathname.split('/')[1]
      if (categorySlug === 'videos') {
        this.categoryNum = 'categories=54'
      } else if (categorySlug === 'travel') {
        this.categoryNum = 'categories=3'
      } else if (categorySlug === 'culture') {
        this.categoryNum = 'categories=4'
      } else if (categorySlug === 'you') {
        this.categoryNum = 'categories=5'
      } else if (categorySlug === 'impact') {
        this.categoryNum = 'categories=6'
      }
      console.log(categorySlug)
      fetch('https://cms.stage-intomore.com/wp-json/wp/v2/posts/?' + this.categoryNum + '')
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(response)
        } else {
          throw new Error('Something went wrong')
        }
      })
      .then(relatedPosts => this.setState({relatedPosts, loading: false}))
      .catch(error => console.error(error))
    }
    getRelatedPosts()

    const getTrendingPosts = () => {
      fetch('https://cms.stage-intomore.com/wp-json/wp/v2/posts/?page=2')
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
    
    this.iframes = () => [...document.querySelectorAll('.content iframe')].map((item) => {
      item.parentElement.classList.add('responsive-wrapper')
    })
    
    this.pTags = () => [...document.querySelectorAll('.content p')].map((item) => {
      item.innerHTML === '&nbsp;' ? item.remove() : null
    })
    
    this.addTwitterWidget = () => {
      const script = document.createElement("script")
      script.src = "https://platform.twitter.com/widgets.js"
      script.async = true
      document.body.appendChild(script)
    }
    
    
    this.authorName = () => {
      
      const authorH1 = document.querySelector('.author-data h1').innerText
      const authorTitle = document.querySelector('.grindr-banner-author strong').innerText = authorH1

    }
    
    this.Ads = () => {
      const script0 = document.createElement("script")
      script0.text = "apntag.anq.push(function() {\n" +
          "apntag.showTag('A_D_Top_LB')\n" +
          "})"
      document.getElementById("A_D_Top_LB").appendChild(script0)

      window.addEventListener("load", function(event) {
        const script1 = document.createElement("script")
        script1.text = "apntag.anq.push(function() {\n" +
          "apntag.showTag('A_D_HalfPage')\n" +
        "})"
        setTimeout(()=>{
          document.getElementById("A_D_HalfPage").appendChild(script1)
        },2000)
      })
      
      const script2 = document.createElement("script")
      script2.text = "apntag.anq.push(function() {\n" +
          "apntag.showTag('A_M_Banner')\n" +
          "})"
      setTimeout(()=>{
        document.getElementById("A_M_Banner").appendChild(script2)
      },2000)
    }
    
    window.addEventListener('load', () => {
      this.iframes()
      this.addTwitterWidget()
      this.pTags()      
      // this.authorName()
    }, true)
  }
  
  componentWillMount() {
    this.routeChange = this.props.history.listen((location, action) => {
      this.articleSlug = window.location.pathname.split('/')[2]
      this.getPost()
      window.location.reload()
    })
  }
  
  componentDidUpdate() {
    this.iframes()
    this.addTwitterWidget()
    this.pTags()
    this.Ads()
  }
  
  render() {
    const {
      post, 
      relatedPosts, 
      trendingPosts, 
      loading
    } = this.state
    
    const authorData = post.map((item, i) => (
        <div key={i} className='author-data' dangerouslySetInnerHTML={{
            __html: item.acf.select_author
          }}/>)
    )
    
    const categoryType = post.map((item, i) => {
      let category
      if (item.categories[0] === 54) {
        category = 'videos'
        document.querySelector('body').classList.add('video-page')
        document.querySelector('body').classList.remove('video-category')
      } else if (item.categories[0] === 3) {
        category = 'travel'
        document.querySelector('body').classList.remove('video-page')
      } else if (item.categories[0] === 4) {
        category = 'culture'
        document.querySelector('body').classList.remove('video-page')
      } else if (item.categories[0] === 5) {
        category = 'you'
        document.querySelector('body').classList.remove('video-page')
      } else if (item.categories[0] === 6) {
        category = 'impact'
        document.querySelector('body').classList.remove('video-page')
      } else {
        category = 'culture'
      }
      return category
    })

    const postContent = (item, i, addClasses) => {
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
        <Link key={i} className={addClasses} to={`/${category}/${item.slug}`}>
          <div className='gc-image' style={{
              backgroundImage: 'url(' + item.acf.wide_crop + ')'
            }}/>
          <div className='gc-detail'>
            <p className='gc-detail-section'>{category}</p>
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
    }

    const trending = trendingPosts.slice(0, 5).map((item, i) => (
      <div key={i}>
        {postContent(item, i, 'gc  gc-sm')}
      </div>)
    )

    const related = relatedPosts.slice(0, 6).map((item, i) => (
      <div key={i} className='col-lg-4 col-12'>
        {postContent(item, i, 'gc gc-mobile-float')}
    </div>)
    )

    const Article = ({match, data}) => {
      const article = data.find(c => c.slug === match.params.articleId)
      let articleData
      if (article)
        articleData = <div className='into-container-article'>
          <Helmet>
            <title>{article.acf.seo_title}</title>
            <meta name='description' content={article.acf.seo_description}/>
            <meta property='og:title' content={article.acf.seo_title} />
            <meta property='og:description' content={article.acf.seo_description} />
            <meta property='og:url' content={window.location.href} />
            <meta property='og:image' content={article.acf.wide_crop} />
            <meta property='og:image:width' content='475' />
            <meta property='og:image:height' content='250' />
            <meta property='og:type' content='website' />
            <meta property='fb:app_id' content='1666046386764956' />
          </Helmet>
          <MobileAd/>
          {/* display  in pc and pad */}
          <div className='article-share-buttons pc-block'>
            <FacebookProvider appId="1666046386764956">
              <Share href={window.location.href}>
                <a className='social-svg facebook-svg'><span/></a>
              </Share>
            </FacebookProvider>
            <a href={'https://twitter.com/share?url=' + window.location.href} target='_blank' rel='noopener noreferrer' className='social-svg twitter-svg'><span/></a>  
          </div>
          <div className='article-banner'>
            <div className='grindr-banner order-md-1'>
              <div className='banner-image' style={{
                  backgroundImage: 'url(' + article.acf.wide_crop + ')'
                }}>
              </div>
              <div className='banner-video' dangerouslySetInnerHTML={{
                  __html: article.acf.video_embed
                }}/>
            </div>
            <div className='grindr-title order-md-0'>
              <div className='grindr-banner-section'>{categoryType}</div>
              <div className='grindr-banner-title' dangerouslySetInnerHTML={{
                  __html: article.title.rendered
                }}/>
              <div className='grindr-banner-byline'>
                <div className='grindr-banner-author'>By:&nbsp;<strong>{authorData}</strong>&nbsp;</div>
                <div className='grindr-banner-time'>
                  <Moment format="DD MMM YYYY">{article.date}</Moment>
                </div>
              </div>
              {/* display  in mobile */}
              <div className='article-share-buttons mobile-block'>
                <div className='artice-mobile-container'>
                  <FacebookProvider appId="1666046386764956">
                    <Share href={window.location.href}>
                      <a className='social-svg facebook-svg'><span/></a>
                    </Share>
                  </FacebookProvider>  
                  <a href={'https://twitter.com/share?url=' + window.location.href} target='_blank' rel='noopener noreferrer' className='social-svg twitter-svg'><span/></a>
                </div>
              </div>
            </div>
          </div>
          <div className='article-content'>
            <div className='row'>
              <div className='col-lg-7 col-12'>
                <div className='content' dangerouslySetInnerHTML={{
                    __html: article.content.rendered
                  }}/>
                <div className='author-extra'>
                  <div className='author-box'>
                    <div className='w-100'>
                      <hr/>
                    </div>
                    <div className='author-msg'>
                      {authorData}
                      <div className='author-image'/>
                      <div className='author-text '>
                        <div className='author-title'></div>
                        <div className='author-description'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 col-12'>
                <div className='article-right-ad'>
                  <div id="A_D_HalfPage"></div>
                </div>
                <div className='article-right-trend'>
                  {/* trend */}
                  <div className='trend'>
                    <div className='trend-label text-uppercase'>trending</div>
                    {trending}
                  </div>
                  {/* sidebar-subscribe */}
                  <div className='sidebar-subscribe'>
                    <div className='black-box'>
                      <div className='queer-news'>
                        Queer news and culture.
                      </div>
                      <div className='for-everyone'>
                        For everyone.
                      </div>
                    </div>
                    <SubscribeForm/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* related articles */}
          <div className='related-articles'>
            <div className='grindr-section-head'>
              <h1>
                Related Articles
              </h1>
            </div>
            <div className='row'>
              {related}
            </div>
          </div>
        </div>
      else
        articleData = null

      return (<div>
        <div className='article-wrapper'>{articleData}</div>
      </div>)
    }

    return (<div className='page'>
        {
          (loading)
            ? <span></span>
            : <Route path={`/` + categoryType + `/:articleId`} render={(props) => <Article data={post} {...props}/>}/>
        }
      </div>)
  }
}

export default Article
