import React, { Component } from 'react'
import axios from 'axios'
import Close from '../../assets/imgs/close.png'
import './assets/style.css'
import Suggestions from '../Suggestions'

const API_URL = 'https://cms.stage-intomore.com/wp-json/wp/v2/posts/?per_page=100&search='
class Search extends Component {
    constructor(){
        super();
        this.state = {
            query: '',
            results: []
        }
    }
    getInfo = () => {
        axios.get(`${API_URL}${this.state.query}`)
        // fetch(`${API_URL}${this.state.query}`)
            .then(({ data }) => {
                this.setState({
                    results: data // MusicGraph returns an object named data,
                                       // as does axios. So... data.data
                })
            })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }else if(this.state.query.length===0){
                this.setState({
                    results:[]
                })
            }
        })
    }
    cancleSearch=()=>{
        this.setState({
            results:[],
            query:''
        })
    }
    skip=(event)=>{
        if(event.keyCode ===13){
          event.preventDefault();
            // window.location.href='/searchResult?q='+this.state.query;
        }
    }

    render() {
        return (
            <div className="search-section">
                <span className="search-close nav-search" onClick={this.cancleSearch}><img src={Close} alt='alt' /></span>
            <input type='text'   value={this.state.query}   ref={input => this.search = input}  onChange={this.handleInputChange} onKeyUp={this.skip} placeholder='Search...'/>
                  <Suggestions results={this.state.results} query={this.state.query} />
            </div>
        )
    }
}

export default Search