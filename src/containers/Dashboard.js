import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Components from '../components'
import Sidebar from './Sidebar'

export class DashboardContiner extends React.Component {
  render() {
    const sidebarRouteList = [
      { title: 'Settings', path: '/profile', component: Components.Home.Help },
      { title: 'About us', path: '/about', component: Components.Home.About },
      {
        title: 'Login',
        path: '/auth',
        component: Components.Home.Auth.Auth,
        exact: true
      },
      {
        title: 'Remind',
        path: '/nav/auth/remind',
        component: Components.Home.Auth.Remind
      }
    ]

    return (
      <Components.partials.Container fluid overflowHidden noPadding>
        <Components.partials.Navbar bg />
        <Components.partials.Container fluid noPadding>
          <Components.Dashboard.Main />
        </Components.partials.Container>
        <Sidebar
          {...this.props}
          routeList={sidebarRouteList}
          homePath={`/dashboard`}
          stickToTop
        />
      </Components.partials.Container>
    )
  }
}

export default DashboardContiner
