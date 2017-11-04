import React from 'react'

import Components from '../components'
import Sidebar from './Sidebar'

export class DownloadContainer extends React.Component {
  render() {
    return (
      <Components.partials.Container fluid noPadding minHeight bg={`dashboard`}>
        <Components.partials.Navbar />
        {/* <Components.Download.partials.Locked /> */}
        <Components.partials.Container fluid noPadding fullHeight>
          <Components.Download.Main />
        </Components.partials.Container>
      </Components.partials.Container>
    )
  }
}

export default DownloadContainer
