/* global FB */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import stores from './stores'
import Containers from './containers'
import utils from './utils'

class App extends React.Component {
  componentWillMount () {
    // check whether access_token param is applied (instagram callback)
    const hashParams = utils.parseHashParams(window.location.hash.substr(1))
    if (hashParams.access_token) {
      stores.auth.setAuthenticationStatus('instagram', {
        accessToken: hashParams.access_token
      })
      // verify it through the server
      stores.auth.validateInstagramToken()
    } else {
      // if not, check localStorage status
      if (stores.auth.auth.facebook) {
        // if facebook accessToken is available
        // verify it through the server
        stores.auth.validateFacebookToken()
      } else if (stores.auth.auth.instagram) {
        // else if instagram accessToken is available
        // verify it through the server
        stores.auth.validateInstagramToken()
      } else if (stores.auth.auth.local) {
        // else, if user is signed in, validate their status
        stores.auth.validateAuthStatus()
      }
    }
  }

  componentDidMount () {
    // inject facebook sdk script
    window.fbAsyncInit = () => {
      FB.init({
        appId: process.env.REACT_APP_FB_ID,
        xfbml: true,
        version: 'v2.6'
      })
    }

    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
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
            <Route path='/' component={Containers.Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
