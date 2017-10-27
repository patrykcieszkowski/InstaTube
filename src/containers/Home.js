import React from 'react'

import Components from '../components'
import Sidebar from './Sidebar'

export class HomeContainer extends React.Component {
  render() {
    // const { screenProps } = this.props

    const sidebarRouteList = [
      { title: 'Help', path: '/help', component: Components.Home.Help },
      { title: 'About us', path: '/about', component: Components.Home.About },
      {
        title: 'Login',
        path: '/auth',
        component: Components.Home.Auth.Auth,
        exact: true
      },
      {
        title: 'Remind',
        path: '/auth/remind',
        component: Components.Home.Auth.Remind
      }
    ]

    return (
      <Components.partials.Container fluid overflowHidden noPadding>
        <Components.partials.Navbar />
        <Components.partials.Container fluid noPadding>
          <Components.Home.Home />

          <Sidebar {...this.props} routeList={sidebarRouteList} />
        </Components.partials.Container>
      </Components.partials.Container>
    )
  }
}

export default HomeContainer
