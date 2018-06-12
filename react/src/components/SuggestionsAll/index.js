import React from 'react'
import './assets/style.css'
import Dotdotdot from 'react-dotdotdot'

const SuggestionsAll = (props) => {
    if ("results" in props && props['results']) {
        const options = props.results.map(r => {
          let category
          if (r.categories[0] === 54) {
            category = 'videos'
          } else if (r.categories[0] === 3) {
            category = 'travel'
          } else if (r.categories[0] === 4) {
            category = 'culture'
          } else if (r.categories[0] === 5) {
            category = 'you'
          } else if (r.categories[0] === 6) {
            category = 'impact'
          } else {
            category = 'culture'
          }
          return (
            <div className="col-lg-4" key={r.id}>
                <a className="gc " href={`${window.location.origin}/${category}/${r.slug}`}>
                    <div className="gc-image" style={{backgroundImage: `url(${r.acf.square_crop})`}}></div>
                    <div className="gc-detail">
                        <Dotdotdot clamp={3}>
                          <h2 className='gc-detail-title' dangerouslySetInnerHTML={{
                            __html: r.title.rendered
                          }}/>
                        </Dotdotdot>
                    </div>
                </a>
            </div>
          )
        })
        return (
            <div className="col-lg-7 ">
                <div className="row category-list-all">
                    {options}
                </div>
            </div>
        );
    } else {
        return <div>something is wrong</div>
    }
}

export default SuggestionsAll








