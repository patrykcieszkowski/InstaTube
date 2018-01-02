import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-select/dist/react-select.css'
import './css/line-awesome.css'
import './css/titillium-web.css'
import './css/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

document.title = ''

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
