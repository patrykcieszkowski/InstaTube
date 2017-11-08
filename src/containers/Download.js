import React from 'react'

import Components from '../components'
import Sidebar from './Sidebar'

export class DownloadContainer extends React.Component {
  render () {
    const sidebarRouteList = [
      {
        title: 'Help',
        path: '/help',
        component: Components.partials.Tabs.Help,
        size: `lg`
      },
      {
        title: 'About us',
        path: '/about',
        component: Components.partials.Tabs.About,
        size: `lg`
      },
      {
        title: 'Login',
        path: '/auth',
        component: Components.partials.Tabs.Auth.Auth,
        exact: true,
        size: `lg`
      },
      {
        title: 'Remind',
        path: '/auth/remind',
        component: Components.partials.Tabs.Auth.Remind,
        size: `lg`
      },
      {
        title: 'Locked',
        path: '/locked',
        component: Components.Download.Locked,
        size: 'sm',
        navigation: false,
        close: false,
        zIndex: true
      }
    ]

    return (
      <Components.partials.Container fluid noPadding minHeight bg={`dashboard`}>
        <Components.partials.Navbar
          {...this.props}
          homePath={this.props.match.url}
        />
        {/* <Components.Download.partials.Locked /> */}
        <Components.partials.Container fluid noPadding fullHeight>
          <Components.Download.Main {...this.props} />
        </Components.partials.Container>
        <Sidebar
          {...this.props}
          routeList={sidebarRouteList}
          stickToTopXLG
          fullHeight
          homePath={this.props.match.url}
        />
      </Components.partials.Container>
    )
  }
}

export default DownloadContainer
