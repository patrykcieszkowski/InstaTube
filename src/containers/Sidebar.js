import React from 'react'
import { Switch, Route, matchPath } from 'react-router-dom'

import Components from '../components'

export class SidebarContainer extends React.Component {
  render() {
    // const screenProps = {}
    const match = matchPath(this.props.location.pathname, {
      path: `${this.props.homePath || ''}/nav/(.*)`
    }) || { isExact: false }

    return (
      <Components.partials.SidebarContainer
        isOpen={match.isExact}
        stickToTop={this.props.stickToTop}
        stickToTopXLG={this.props.stickToTopXLG}
        fullHeight={this.props.fullHeight}
      >
        <Switch>
          {this.props.routeList.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={`${this.props.homePath || ''}/nav${route.path}`}
              title={route.title}
              render={props => (
                <Components.partials.SidebarContent
                  title={route.title}
                  homePath={this.props.homePath || '/'}
                >
                  <route.component {...props} />
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
