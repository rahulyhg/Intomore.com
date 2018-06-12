import React, { Component}  from 'react'
import './assets/style.css'



const submitted = () => {
	document.querySelector('body').classList.add('form-submitted')
}

export class SubscribeForm extends Component {
  render() {
    return (
      <div className='subscription-form'>
				<iframe title='title' name='hidden_iframe' className='hidden_iframe'></iframe>
        <form action='https://docs.google.com/forms/d/e/1FAIpQLSf1mhole3qP7ZeF984VE-CRFTaevbKiQj1jVGiTtu_q-SUjIw/formResponse' onSubmit={()=>submitted()} target='hidden_iframe'>
					
					<div className='grindr-sub'>
						<input type='email' id='email' name='entry.1877999879' required  placeholder='yourname@email.com' />
					</div>
					<input className='submit-button btn-grindr-sub' type='submit' value='Subscribe' />
				</form>
        <p>Woohoo!!! You're on the list!</p>
      </div>
			)
  }
}

export default SubscribeForm






