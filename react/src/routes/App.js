import React, {Component} from 'react'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import Article from './Article'
import Category from './Category'
import Home from './Home'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import {Error} from './Error'
import About from './About'
import Advertise from './Advertise'
import SearchResult from './SearchResult'


class App extends Component {
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      document.body.scrollTop = 0
    })
  }
  render() {
    return (<div>
      <Header/>
      <Switch>

        <Route exact={true} path='/' component={Home}/>
        <Route exact={true} path='/latest' component={Category}/>
        <Route exact={true} path='/videos' component={Category}/>
        <Route exact={true} path='/travel' component={Category}/>
        <Route exact={true} path='/culture' component={Category}/>
        <Route exact={true} path='/you' component={Category}/>
        <Route exact={true} path='/impact' component={Category}/>
          
        /* This converts and redirects any uppercase urls to lowercase */
        <Route sensitive path="/:slug1*:slug2([A-Z]):slug3*/" render={props => <Redirect to={`${props.location.pathname.toLowerCase()}`}/>}/>

        <Route exact={true} path='/videos/:articleUrl*' component={Article}/>
        <Route exact={true} path='/travel/:articleUrl*' component={Article}/>
        <Route exact={true} path='/culture/:articleUrl*' component={Article}/>
        <Route exact={true} path='/you/:articleUrl*' component={Article}/>
        <Route exact={true} path='/impact/:articleUrl*' component={Article}/>

        <Route exact={true} path='/About' component={About}/>
        <Route exact={true} path='/Advertise' component={Advertise}/>
        <Route exact={true} path='/SearchResult' component={SearchResult}/>
        <Route exact={true} path='/Policy' component={() => window.location = 'https://www.grindr.com/app/privacy-policy/?lang=en'}/>
        <Route exact={true} path='/Service' component={() => window.location = 'https://www.grindr.com/app/terms-of-service/?lang=en'}/>
        <Route component={Error} />


      </Switch>
      <Footer/>
    </div>)
  }
}

export default withRouter(App)
