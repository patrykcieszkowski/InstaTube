import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
import { Scrollbars } from 'react-custom-scrollbars'

import style from './style'

import Column from '../../Col'

import SidebarHeader from '../../SidebarHeader'
import ScrollArea from '../../ScrollArea'
import LoginForm from './partials/LoginForm'
import RegisterForm from './partials/RegisterForm'

export class Auth extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className={css(style.main.wrapper)}>
          <RenderSider {...this.props} />
          <Col className={css(style.content.wrapper)}>
            <ScrollArea
              style={{ width: '100%', height: `100%` }}
              renderClassName="row"
            >
              <Column
                xs="12"
                xl="12"
                xxl="6"
                xxxl="5"
                xxxxl="5"
                className={css(style.content.colWrapper)}
              >
                <Row>
                  <SidebarHeader title={`Login`} paddingTop paddingBottom />
                </Row>
                <LoginForm />
              </Column>
              <Column
                xs="12"
                xl="12"
                xxl="6"
                xxxl="5"
                xxxxl="5"
                className={css(style.content.colWrapper)}
              >
                <Row>
                  <SidebarHeader
                    title={`Register`}
                    paddingTop
                    paddingBottom
                    className={`d-none d-xl-block`}
                  />
                  <SidebarHeader title={`Register`} className={`d-xl-none`} />
                </Row>
                <RegisterForm />
              </Column>
            </ScrollArea>
          </Col>
        </Row>
      </Container>
    )
  }
}

const RenderSider = props => {
  if (!props.xl) {
    return null
  }

  return (
    <Column
      xl="auto"
      xxxxl="3"
      className={`d-none d-xl-flex ${css(
        style.sider.wrapper
      )}`}
    >
      <Row className={`${css(style.sider.box)}`} />
    </Column>
  )
}

export default Auth
