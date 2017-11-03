import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Components from '../components'
import Sidebar from './Sidebar'

export class DashboardContiner extends React.Component {
  render() {
    const sidebarRouteList = [
      {
        title: 'Profile',
        path: '/profile',
        component: Components.Dashboard.Profile
      },
      {
        title: 'Payout History',
        path: '/payout',
        component: Components.Dashboard.Payout
      },
      {
        title: 'Go Premium!',
        path: '/premium',
        component: Components.Dashboard.Premium
      }
    ]

    return (
      <Components.partials.Container fluid noPadding minHeight bg={`dashboard`}>
        <Components.partials.Navbar bg />
        <Components.partials.Container fluid noPadding minHeight fullHeight>
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
