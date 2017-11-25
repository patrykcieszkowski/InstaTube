import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import stores from './stores'
import Containers from './containers'

class App extends React.Component {
  componentDidMount () {
    stores.config.fetch()
    stores.about.fetch()
    stores.rules.fetch()
    stores.help.fetch()

    if (stores.auth.auth.local) {
      stores.auth.extend()
      stores.user.fetchProfile()
      stores.user.fetchDashboard()

      // setInterval(() => {
      //   stores.auth.extend()
      //   stores.user.fetchDashboard()
      // }, 1000 * 60 * 5)
    }
  }

  render () {
    return (
      <Provider store={stores} {...stores}>
        <BrowserRouter>
          <Switch>
            <Route path='/dashboard' component={Containers.Dashboard} />
            <Route path='/m/:mediaId' component={Containers.Download} />
            <Route path='/auth/recovery/:token' component={Containers.Home} />
            <Route path='/' component={Containers.Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
