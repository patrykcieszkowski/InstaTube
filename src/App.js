import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Containers from './containers'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Containers.Dashboard} />
          <Route path="/" component={Containers.Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
