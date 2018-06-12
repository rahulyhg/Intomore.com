import React, { Component}  from 'react'
import './assets/style.css'
import Bun from '../../assets/imgs/hotdog-bun.png'

export class Error extends Component {
  render() {
    return (<div className='page'>
      <div className='error-wrapper'>
        <div className='into-container'>
            <div className='not-found'>
              <span className='left'>Something's</span>
              <img src={Bun} alt='alt' style={{
                  width: 110,
                  height: 100
                }}/>
              <span className='right'>
                missing
              </span>
            </div>
            <div className='error-container'>
              <h1>
                404 Error
              </h1>
              <p>
                The requested url was not found on this server. Sorry.
              </p>
            </div>
        </div>

      </div>
    </div>)
  }
}

export default Error
