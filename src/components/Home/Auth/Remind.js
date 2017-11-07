import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'

import style from './style'
import Column from '../../partials/Col'
import SidebarHeader from '../../partials/SidebarHeader'
import SignupInfo from '../partials/SignupInfo'
import ScrollArea from '../../partials/ScrollArea'
import RemindForm from './partials/RemindForm'

export class Auth extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className={css(style.main.wrapper)}>
          <Column
            xl="auto"
            xxxxl="3"
            className={`d-none d-xl-flex align-items-start ${css(
              style.sider.wrapper
            )}`}
          >
            <Row className={css(style.sider.box)} />
          </Column>
          <Col xs="12" xl={6} className={css(style.content.wrapper)}>
            <Row>
              <SidebarHeader title={`Remind Password`} md={false} paddingTop />
            </Row>
            <RemindForm />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Auth
