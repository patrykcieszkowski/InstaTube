import React from 'react'

import Components from '../components'
import Sidebar from './Sidebar'

export class HomeContainer extends React.Component {
  render() {
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
        title: 'Login',
        path: '/auth',
        component: Components.Home.Auth.Auth,
        exact: true,
        size: `xl`
      },
      {
        title: 'Remind',
        path: '/auth/remind',
        component: Components.Home.Auth.Remind,
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
          homePath={'/'}
        />
      </Components.partials.Container>
    )
  }
}

export default HomeContainer
