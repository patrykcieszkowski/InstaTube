import React from 'react'
import { Redirect } from 'react-router-dom'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import Components from '../components'
import Sidebar from './Sidebar'

const HOME_PATH = '/dashboard'
const HOME_NAME = 'Dashboard'

@inject('uploads', 'payments', 'auth', 'user', 'social', 'config')
@observer
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

    this.interval = setInterval(() => {
      this.props.uploads.fetch()
    }, 1000 * 60 * 5)

    document.title = HOME_NAME
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentWillUpdate () {
    if (document.location.pathname === HOME_PATH) {
      document.title = HOME_NAME
    }
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
        title: 'Rules',
        path: '/rules',
        component: Components.partials.Tabs.Rules,
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
          homePath={HOME_PATH}
        />
        <Components.partials.Container fluid noPadding minHeight fullHeight>
          <Components.Dashboard.Main homeTitle={HOME_NAME} />
        </Components.partials.Container>
        <Sidebar
          {...this.props}
          routeList={sidebarRouteList}
          homePath={HOME_PATH}
          stickToTop
          homeTitle={HOME_NAME}
        />
      </Components.partials.Container>
    )
  }
}

export default DashboardContiner
