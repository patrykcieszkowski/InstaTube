import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomeContainer from './containers/Home'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeContainer} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
