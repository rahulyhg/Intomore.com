import React, {Component} from 'react'
import './assets/about.css'


export class About extends Component {
    componentDidMount() {

        const script0 = document.createElement("script")
        script0.text = "apntag.anq.push(function() {\n" +
            "apntag.showTag('Sec_D_Top_LB')\n" +
            "})"
        document.getElementById("Sec_D_Top_LB").appendChild(script0)

    }
    render() {
        return (
            <div className='into-container-article ' id='about-us'>
                {/*display  in pc and pad*/}
                <div className='article-share-buttons pc-block'>
                    <a href='https://www.facebook.com/sharer/sharer.php?app_id=472756216419966&sdk=joey&u=https://intomore.com/you/Missed-Connections-What-The-Craigslist-Personals-Section-Meant-to-LGBTQ-People/9a85f1945daa494c&display=popup&ref=plugin&src=share_button' className='social-svg facebook-svg'><span/></a>
                    <a href='https://twitter.com/share' className='social-svg twitter-svg'><span/></a>
                </div>
                {/*display  in mobile*/}
                <div className='article-share-buttons mobile-block order-2'>
                    <div className='artice-mobile-container'>
                        <a href='https://www.facebook.com/sharer/sharer.php?app_id=472756216419966&sdk=joey&u=https://intomore.com/you/Missed-Connections-What-The-Craigslist-Personals-Section-Meant-to-LGBTQ-People/9a85f1945daa494c&display=popup&ref=plugin&src=share_button' className='social-svg facebook-svg'><span/></a>
                        <a href='https://twitter.com/share' className='social-svg twitter-svg'><span/></a>
                    </div>
                </div>

                <div className='article-content video-container'>
                    <div className='about-video'>
                        <div style={{
                            paddingTop: '56.25%',
                            position:'relative'}}>
                            <iframe src='//players.brightcove.net/5428591958001/ry4qHW6Lb_default/index.html?videoId=5538046364001'  allowFullScreen='' webkitallowfullscreen='' mozallowfullscreen='' title='title' style={{position:'absolute',top:0,left:0,width: '100%', height: '100%'}}></iframe>
                        </div>
                    </div>
                </div>
                <div className='about-content'>
                    <div className='row'>
                        <div className='col-md-7 col-xs-12 '>
                        <h1 className='column-title '>
                            <span className='content-title'>About us</span>
                        </h1>
                        <div className='content'>
                            <p>What are you INTO? Everyone has an answer.</p>
                            <p>Our preferences are the way we define who we are to the world. A calling card for anyone who wants to know what we’re about. They’re the people, places and epically cool stuff we discover, connect with, love, and share with the world (over and over again).</p>
                            <p>We’re into more of those connections.</p>
                            <p>We’re into more culture. We’re into recognizing our past, seizing the present, and driving our future. We’re into music to blast and looks to gag over. Into creators that play, activists that slay, and queens that throw shade. We’re into conversations and listening. We’re into stories about how we’ve evolved and paving new paths.&nbsp;</p>
                            <p>And we’re doing this now because everything you’re into is worth more than ever before. So what are you INTO? Get all of it here.</p>
                        </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}


export default About








