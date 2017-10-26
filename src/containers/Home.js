import React from 'react'
import { Container } from 'reactstrap'
import { Switch, Route, matchPath } from 'react-router-dom'

import Components from '../components'
import Sidebar from './Sidebar'

export class HomeContainer extends React.Component {
  render() {
    const { screenProps } = this.props

    return (
      <Components.partials.Container fluid overflowHidden noPadding>
        <Components.partials.Navbar />
        <Components.partials.Container fluid noPadding>
          <Components.Home.Home />

          <Sidebar {...this.props} />
        </Components.partials.Container>
      </Components.partials.Container>
    )
  }
}

export default HomeContainer
