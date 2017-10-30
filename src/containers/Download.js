import React from 'react'

import Components from '../components'
import Sidebar from './Sidebar'

export class DownloadContainer extends React.Component {
  render() {
    return (
      <Components.partials.Container fluid noPadding>
        <Components.partials.Navbar />
        <Components.partials.Container fluid noPadding>
          <Components.Download.Main />
        </Components.partials.Container>
      </Components.partials.Container>
    )
  }
}

export default DownloadContainer
