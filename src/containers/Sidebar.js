import React from 'react'
import { Switch, Route, matchPath } from 'react-router-dom'

import Components from '../components'

const routeList = [
  { title: 'Help', path: '/nav/help', component: Components.Home.Help },
  { title: 'About us', path: '/nav/about', component: Components.Home.About },
  {
    title: 'Login',
    path: '/nav/auth',
    component: Components.Home.Auth.Auth,
    exact: true
  },
  {
    title: 'Remind',
    path: '/nav/auth/remind',
    component: Components.Home.Auth.Remind
  }
]

export class SidebarContainer extends React.Component {
  render() {
    // const screenProps = {}
    const match = matchPath(this.props.location.pathname, {
      path: '/nav/(.*)'
    }) || { isExact: false }

    return (
      <Components.partials.SidebarContainer isOpen={match.isExact}>
        <Switch>
          {routeList.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              title={route.title}
              render={props => (
                <Components.partials.SidebarContent title={route.title}>
                  <route.component {...props} />
                </Components.partials.SidebarContent>
              )}
            />
          ))}
        </Switch>
      </Components.partials.SidebarContainer>
    )
  }
}

export default SidebarContainer
