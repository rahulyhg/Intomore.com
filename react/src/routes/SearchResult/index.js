import React, {Component} from 'react'
import axios from 'axios'
import Close from '../../assets/imgs/close.png'
import './assets/style.css'
import SuggestionsAll from '../../components/SuggestionsAll'

const API_URL = 'https://cms.stage-intomore.com/wp-json/wp/v2/posts/?per_page=100&search='

export class SearchResultList extends Component {
    constructor() {
        super();
        this.state = {
            query: window.location.href.split("?")[1].split('=')[1],
            results: [],
            value:""
        }
    }
   getInfo = () => {
        axios.get(`${API_URL}${this.state.query}`)
            .then(({data}) => {
                this.setState({
                    // results: data,query:this.state.query
                    results: data
                })
            })
    }
    componentDidMount() {
        this.getInfo()
        const script0 = document.createElement("script")
        script0.text = "apntag.anq.push(function() {\n" +
            "apntag.showTag('Sec_D_Top_LB')\n" +
            "})"
        document.getElementById("Sec_D_Top_LB").appendChild(script0)

        const script = document.createElement("script")
        script.text = "apntag.anq.push(function() {\n" +
            "apntag.showTag('A_D_HalfPage')\n" +
            "})"

        setTimeout(() => {
            document.getElementById("A_D_HalfPage").appendChild(script)
        }, 2000)

    }
   valChange=()=>{
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }else if(this.state.query.length===0){

            }
        })
    }

    cancleSearch=()=>{
        this.setState({
            results:[],
            query:""
        })
    }

    render() {
        return (<div className="search-result-list">
                <div className="result-search-again row">
                    <div className="col-xs-12 col-lg-12">
                        <div className="search-again-box search-box">
                            <input type="text" placeholder="Search..." ref={input => this.search = input}  onChange={this.valChange}
                                  value={this.state.query} />
                                <span className="search-close" onClick={this.cancleSearch}><img src={Close} alt='alt'/></span>
                        </div>
                    </div>
                </div>
                <div className="article-content">
                    <div className="row">
                        <SuggestionsAll results={this.state.results} query={this.state.query}/>
                        <div className="col-lg-5">
                            <div className="article-right-ad">
                                <div id="A_D_HalfPage"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResultList




