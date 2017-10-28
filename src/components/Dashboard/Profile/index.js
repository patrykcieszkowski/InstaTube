import React from 'react'
import { Container } from 'reactstrap'

import SettingsForm from './partials/SettingsForm'

export class Profile extends React.Component {
  render() {
    return (
      <Container fluid>
        <SettingsForm />
      </Container>
    )
  }
}

export default Profile
