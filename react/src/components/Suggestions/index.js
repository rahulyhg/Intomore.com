import React from 'react'
import './assets/style.css'

const Suggestions = (props) => {
    if("results" in props && props['results']) {
        const options = props.results.slice(0,5).map(r => {
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
              <li key={r.id}>
                  <a href={`${window.location.origin}/${category}/${r.slug}`}>
                      <div className="gc-image" style={{backgroundImage:`url(${r.acf.square_crop})`}}></div>
                      <div className="gc-detail">
                        <h2 dangerouslySetInnerHTML={{
                          __html: r.title.rendered
                        }}/>
                      </div>
                  </a>
              </li>
            )
        });
        let attrs = {"href": "/SearchResult?q=" + props['query']}
        let more = options.length ? <a className="search-check-more" {...attrs} >MORE RESULTS</a>  : "";
        return (<div className="search-result"><ul className='resultList'>
            {options}
            </ul>
            {more}
        </div>);
    }else{
        return <div>something is wrong</div>
    }
}

export default Suggestions











