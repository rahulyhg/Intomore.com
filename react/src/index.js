import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import './assets/styles/normalize.css'
import './assets/styles/global.css'
import App from './routes/App'
import registerServiceWorker from './registerServiceWorker'

window.React = React

render(
  <BrowserRouter>
		<App />
	</BrowserRouter>
, document.getElementById('root'))
registerServiceWorker()
