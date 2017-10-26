import React from 'react'
import { Container } from 'reactstrap'
import { Switch, Route, matchPath } from 'react-router-dom'

import Components from '../components'
import Sidebar from './Sidebar'

export class HomeContainer extends React.Component {
  render() {
    const { screenProps } = this.props

    return (
      <Components.partials.Container>
        <Components.partials.Navbar />
        <Container fluid style={{ position: 'relative' }}>
          <Components.Home.Home />

          <Sidebar {...this.props} />
        </Container>
      </Components.partials.Container>
    )
  }
}

export default HomeContainer
