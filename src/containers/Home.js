import React from 'react'
import Components from '../components'
import Sidebar from './Sidebar'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import { Redirect } from 'react-router-dom'

@inject('auth')
@observer
export class HomeContainer extends React.Component {
  render () {
    if (this.props.auth.auth.local) {
      return <Redirect to='/dashboard' />
    }

    const sidebarRouteList = [
      {
        title: 'Help',
        path: '/help',
        component: Components.partials.Tabs.Help,
        size: `xl`
      },
      {
        title: 'About us',
        path: '/about',
        component: Components.partials.Tabs.About,
        size: `xl`
      },
      {
        title: 'Rules',
        path: '/rules',
        component: Components.partials.Tabs.Rules,
        size: `xl`
      },
      {
        title: 'Login',
        path: '/auth',
        component: Components.partials.Tabs.Auth.Auth,
        exact: true,
        size: `xl`
      },
      {
        title: 'Remind',
        path: '/auth/remind',
        component: Components.partials.Tabs.Auth.Remind,
        size: `xl`
      },
      {
        title: 'Reset',
        path: '/auth/recovery/:token',
        component: Components.partials.Tabs.Auth.Reset,
        size: `xl`
      },
      {
        title: 'Instagram',
        path: '/auth/instagram',
        component: Components.partials.Tabs.Auth.Instagram,
        size: `xl`
      }
    ]

    return (
      <Components.partials.Container fluid noPadding minHeight bg={`home`}>
        <Components.partials.Navbar {...this.props} homePath={'/'} />
        <Components.partials.Container fluid noPadding fullHeight>
          <Components.Home.Home />
        </Components.partials.Container>
        <Sidebar
          {...this.props}
          routeList={sidebarRouteList}
          stickToTopXLG
          fullHeight
          navBG
          homePath={'/'}
        />
      </Components.partials.Container>
    )
  }
}

export default HomeContainer
