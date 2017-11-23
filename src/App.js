/* global FB */
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

      setInterval(() => {
        stores.auth.extend()
        stores.user.fetchDashboard()
      }, 1000 * 60 * 5)
    }

    // inject facebook sdk script
    window.fbAsyncInit = () => {
      FB.init({
        appId: process.env.REACT_APP_FB_ID,
        xfbml: true,
        version: 'v2.6'
      })
    }
    ;(function (d, s, id) {
      var js = null
      var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = '//connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
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
