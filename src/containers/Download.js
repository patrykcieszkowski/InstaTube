import React from 'react'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'

import Components from '../components'
import Sidebar from './Sidebar'

@inject('auth', 'media')
@observer
export class DownloadContainer extends React.Component {
  componentWillMount () {
    this.props.media.fetch(this.props.match.params.mediaId)
  }

  render () {
    if (!this.props.match.params.mediaId) {
      return <Redirect to='/' />
    }

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
        to: this.props.auth.auth.local ? '/dashboard' : null,
        component: Components.partials.Tabs.Auth.Auth,
        exact: true,
        size: `lg`
      },
      {
        title: 'Remind',
        path: '/auth/remind',
        to: this.props.auth.auth.local ? '/dashboard' : null,
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

    const authTabs = []

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
