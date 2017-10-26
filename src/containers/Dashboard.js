import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Components from '../components'

export class DashboardContiner extends React.Component {
  render() {
    return (
      <Components.partials.Container fluid overflowHidden noPadding>
        <Components.partials.Navbar />
        <Components.partials.Container fluid noPadding>
          <Components.Dashboard.Main />
        </Components.partials.Container>
      </Components.partials.Container>
    )
  }
}

export default DashboardContiner