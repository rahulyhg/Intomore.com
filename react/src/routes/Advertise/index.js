import React, {Component} from 'react'
import './assets/advertise.css'

const submitted = () => {
	document.querySelector('body').classList.add('advertise-form-submitted')
}

export class Advertise extends Component {
    componentDidMount() {
        const script0 = document.createElement("script")
        script0.text = "apntag.anq.push(function() {\n" +
            "apntag.showTag('Sec_D_Top_LB')\n" +
            "})"
        document.getElementById("Sec_D_Top_LB").appendChild(script0)
    }
    render() {
        return (
            <div className='into-container-article ' id='advertise'>

             {/*display  in pc and pad*/}
                <div className='article-share-buttons pc-block'>
                    <a href='https://www.facebook.com/sharer/sharer.php?app_id=472756216419966&sdk=joey&u=https://intomore.com/you/Missed-Connections-What-The-Craigslist-Personals-Section-Meant-to-LGBTQ-People/9a85f1945daa494c&display=popup&ref=plugin&src=share_button' className='social-svg facebook-svg'><span/></a>
                    <a href='https://twitter.com/share' className='social-svg twitter-svg'><span/></a>
                </div>

               {/*display  in mobile*/}
                <div className='article-banner order-1'>
                    <div className='grindr-title'>
                        <div className='grindr-banner-title'>Advertise on INTO</div>
                    </div>
                </div>
                <div className='article-share-buttons mobile-block order-2'>
                    <div className='artice-mobile-container'>
                        <a href='https://www.facebook.com/sharer/sharer.php?app_id=472756216419966&sdk=joey&u=https://intomore.com/you/Missed-Connections-What-The-Craigslist-Personals-Section-Meant-to-LGBTQ-People/9a85f1945daa494c&display=popup&ref=plugin&src=share_button' className='social-svg facebook-svg'><span/></a>
                        <a href='https://twitter.com/share' className='social-svg twitter-svg'><span/></a>
                    </div>
                </div>

                <div className='article-content'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='content'>
                                <p>Want to show yourself off to a global audience? Bring it.</p>
                                <p>Advertise on INTO and reach millions of LGBTQ+ millennials and their allies.</p>
                                <p>We offer a variety of ways to showcase your brand within this powerful, fast-growing demographic. Dynamic partnership opportunities include:</p>
                                <ul className='bold'>
                                    <li>Branded Content</li>
                                    <li>Custom Editorials</li>
                                    <li>Video</li>
                                    <li>Takeovers</li>
                                    <li>Display Media</li>
                                </ul>
                                <p>Speak to them! Just fill out the form and we'll make it happen.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-xs-12'>
                          <iframe title='title' name='hidden_iframe' className='hidden_iframe'></iframe>
                          <form id='advertise-form' action='https://docs.google.com/forms/d/e/1FAIpQLSd1al9MKbay96UjXs1MYKtJ0XIM-IbLx4Doq1Ht43XRW5r7dw/formResponse' onSubmit={()=>submitted()} target='hidden_iframe'>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='form-item-wrapper'>
                                        <div className='form-item-label'>First Name</div>
                                        <input className='form-item-data' aria-label='First Name' name='entry.528676587' required='' />
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='form-item-wrapper'>
                                        <div className='form-item-label'>Last Name</div>
                                        <input className='form-item-data' aria-label='Last Name' name='entry.1535160502' required='' />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='form-item-wrapper'>
                                        <div className='form-item-label'>Email</div>
                                        <input className='form-item-data' aria-label='Email' name='entry.1543810627' required='' />
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='form-item-wrapper'>
                                        <div className='form-item-label'>Company</div>
                                        <input className='form-item-data' aria-label='Company' name='entry.1403168420' />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='form-item-wrapper'>
                                        <div className='form-item-label'>Website</div>
                                        <input className='form-item-data' aria-label='Website' name='entry.389684488' />
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='form-item-wrapper'>
                                        <div className='form-item-label'>Phone Number</div>
                                        <input className='form-item-data' aria-label='Phone Number' name='entry.1416489523' />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='form-item-wrapper'>
                                        <div className='form-item-label'>Comments</div>
                                        <textarea className='form-item-data' rows='5' aria-label='Comments' name='entry.1482980377'></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='form-item-wrapper'>
                                        
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='form-item-wrapper center'>
                                        <button type='submit' className='btn form-item-submit'>Send</button>
                                        <div className='form-item-done' style={{display: 'none'}}>Thank you and we'll be in touch!</div>
                                    </div>
                                </div>
                            </div>
                          </form>
                          <div className='submitted-text'>Your form has beeen submitted.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Advertise








