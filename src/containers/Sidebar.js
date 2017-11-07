import React from 'react'
import { Switch, Route, matchPath } from 'react-router-dom'

import Components from '../components'

export class SidebarContainer extends React.Component {
  render() {
    const match =
      this.props.location.pathname !== this.props.homePath
        ? matchPath(this.props.location.pathname, {
            path: `${this.props.homePath}/(.*)`.replace('//', '/')
          }) || { isExact: false }
        : { isExact: false }

    const currentRoute = this.props.routeList.find(
      a =>
        match.url
          ? match.url.replace(this.props.homePath, '') === a.path
          : false
    )
    const sizeChart = {
      md: this.props.md,
      sm: this.props.sm,
      lg: this.props.lg,
      xl: this.props.xl || !(this.props.md || this.props.sm || this.props.lg)
    }

    if (currentRoute) {
      sizeChart.md = currentRoute.size === 'md'
      sizeChart.sm = currentRoute.size === 'sm'
      sizeChart.lg = currentRoute.size === 'lg'
      sizeChart.xl =
        currentRoute.size === 'xl' ||
        !['md', 'sm', 'lg'].includes(currentRoute.size)
    }

    return (
      <Components.partials.SidebarContainer
        isOpen={match.isExact}
        stickToTop={this.props.stickToTop}
        stickToTopXLG={this.props.stickToTopXLG}
        fullHeight={this.props.fullHeight}
        {...sizeChart}
      >
        <Switch>
          {this.props.routeList.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={`${this.props.homePath}${route.path}`.replace('//', '/')}
              title={route.title}
              render={props => (
                <Components.partials.SidebarContent
                  title={route.title}
                  homePath={this.props.homePath || '/'}
                >
                  <route.component {...sizeChart} {...props} />
                </Components.partials.SidebarContent>
              )}
            />
          ))}
        </Switch>
      </Components.partials.SidebarContainer>
    )
  }
}

export default SidebarContainer
