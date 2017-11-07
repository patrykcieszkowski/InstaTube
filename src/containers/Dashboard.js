import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Components from '../components'
import Sidebar from './Sidebar'

export class DashboardContiner extends React.Component {
  render() {
    const sidebarRouteList = [
      {
        title: 'Help',
        path: '/help',
        component: Components.partials.Tabs.Help,
        size: 'lg'
      },
      {
        title: 'About us',
        path: '/about',
        component: Components.partials.Tabs.About,
        size: 'lg'
      },
      {
        title: 'Profile',
        path: '/profile',
        component: Components.Dashboard.Profile,
        size: 'md'
      },
      {
        title: 'Payout History',
        path: '/payout',
        component: Components.Dashboard.Payout,
        size: 'md'
      },
      {
        title: 'Go Premium!',
        path: '/premium',
        component: Components.Dashboard.Premium,
        size: 'md'
      }
    ]

    return (
      <Components.partials.Container fluid noPadding minHeight bg={`dashboard`}>
        <Components.partials.Navbar
          {...this.props}
          bg
          dashboard
          homePath={`/dashboard`}
        />
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
