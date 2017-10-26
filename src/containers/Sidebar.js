import React from 'react'
import { Container } from 'reactstrap'
import { Switch, Route, matchPath } from 'react-router-dom'

import Components from '../components'

const routeList = [
  { title: 'Help', path: '/nav/help', component: Components.Home.Help },
  { title: 'About us', path: '/nav/about', component: Components.Home.About },
  { title: 'Login', path: '/nav/auth', component: Components.Home.Auth }
]

export class SidebarContainer extends React.Component {
  render() {
    const screenProps = {}
    const match = matchPath(this.props.location.pathname, {
      path: '/nav/:path'
    }) || { isExact: false }

    return (
      <Components.partials.SidebarContainer isOpen={match.isExact}>
        <Switch>
          {routeList.map((route, index) => (
            <Route
              key={index}
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
