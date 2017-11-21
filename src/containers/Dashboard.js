import React from 'react'
import { Redirect } from 'react-router-dom'
/* eslint-disable no-unused-vars */
import { inject } from 'mobx-react'
/* eslint-enable no-unused-vars */

import Components from '../components'
import Sidebar from './Sidebar'

@inject('uploads', 'payments', 'auth', 'user', 'social')
export class DashboardContiner extends React.Component {
  componentWillMount () {
    if (!this.props.auth.auth.local) {
      return
    }

    this.props.user.fetchProfile()
    this.props.user.fetchDashboard()
    this.props.uploads.fetch()
    this.props.payments.fetch()
    this.props.social.fetch()

    setInterval(() => {
      this.props.uploads.fetch()
    }, 1000 * 60 * 5)
  }

  render () {
    if (!this.props.auth.auth.local) {
      return <Redirect to='/' />
    }

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
      },
      {
        title: 'Social Network',
        path: '/social',
        component: Components.Dashboard.Social,
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
