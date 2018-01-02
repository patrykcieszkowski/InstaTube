import React from 'react'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */
import { Redirect } from 'react-router-dom'

import Components from '../components'
import Sidebar from './Sidebar'

@inject('auth', 'media', 'config')
@observer
export class DownloadContainer extends React.Component {
  componentWillMount () {
    this.props.media.fetch(this.props.match.params.mediaId)
    document.title = this.props.config.name
  }

  componentWillUpdate () {
    if (this.props.media.media) {
      document.title = `${this.props.media.media.name}`
    } else {
      document.title = this.props.config.name
    }
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
        title: 'Rules',
        path: '/rules',
        component: Components.partials.Tabs.Rules,
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
        title: 'Reset',
        path: '/auth/recovery/:token',
        component: Components.partials.Tabs.Auth.Reset,
        size: `xl`
      },
      {
        title: 'Instagram',
        path: '/auth/instagram',
        to: this.props.auth.auth.local ? '/dashboard' : null,
        component: Components.partials.Tabs.Auth.Instagram,
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
          <Components.Download.Main
            {...this.props}
            homeTitle={
              this.props.media.media
                ? this.props.media.media.name
                : this.props.config.name
            }
          />
          <Components.partials.Alert />
        </Components.partials.Container>
        <Sidebar
          {...this.props}
          routeList={sidebarRouteList}
          stickToTopXLG
          fullHeight
          homePath={this.props.match.url}
          homeTitle={
            this.props.media.media
              ? this.props.media.media.name
              : this.props.config.name
          }
        />
      </Components.partials.Container>
    )
  }
}

export default DownloadContainer
