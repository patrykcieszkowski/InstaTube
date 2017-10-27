import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import { Scrollbars } from 'react-custom-scrollbars'

import Container from '../../partials/Container'
import Header from './partials/Header'
import PaymentsList from './partials/PaymentsList'
import UploadedList from './partials/UploadedList'

import style from './style'

export class Main extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className={css(style.header.wrapper)}>
          <Header />
        </Row>
        <Row>
          <Col xs="12">
            <Link to="#" className={css(style.header.button)}>
              Add new file
            </Link>
          </Col>
          <Col xs="12" sm="6" lg="6" className={css(style.uploaded.wrapper)}>
            <Row>
              <Col xs="12">
                <h3 className={css(style.shared.h3)}>Uploaded files</h3>
              </Col>
              <Col xs="12">
                <Scrollbars style={{ width: '100%', height: `200px` }}>
                  <UploadedList />
                </Scrollbars>
              </Col>
            </Row>
          </Col>
          <Col xs="12" sm="6" lg="3" className={css(style.payments.wrapper)}>
            <Col xs="12">
              <h3 className={css(style.shared.h3)}>Payment history</h3>
            </Col>
            <Col xs="12" className={css(style.payments.content)}>
              <Scrollbars style={{ width: '100%', height: `200px` }}>
                <PaymentsList />
              </Scrollbars>
            </Col>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main
