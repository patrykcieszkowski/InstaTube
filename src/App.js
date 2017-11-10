import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import stores from './stores'

import Containers from './containers'

class App extends React.Component {
  render() {
    return (
      <Provider store={stores} {...stores}>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard" component={Containers.Dashboard} />
            <Route path="/m/:mediaId" component={Containers.Download} />
            <Route path="/" component={Containers.Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
