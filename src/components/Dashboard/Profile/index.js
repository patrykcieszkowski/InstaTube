import React from 'react'
import { css } from 'aphrodite'
import { Container, Row } from 'reactstrap'

import style from './style'

import SidebarHeader from '../../partials/SidebarHeader'
import SettingsForm from './partials/SettingsForm'

export class Profile extends React.Component {
  render() {
    return (
      <Container fluid className={css(style.main.container)}>
        <Row>
          <SidebarHeader title="Profile" paddingBottom md={true} />
        </Row>
        <SettingsForm />
      </Container>
    )
  }
}

export default Profile
