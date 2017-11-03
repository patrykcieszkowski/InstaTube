import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import ScrollArea from '../../partials/ScrollArea'
import UploadForm from '../../partials/UploadForm'
import Container from '../../partials/Container'

import Header from './partials/Header'
import PaymentsList from './partials/PaymentsList'
import Uploaded from './partials/Uploaded'
import UploadedListTitles from './partials/Uploaded/partials/titlesRow'
import style from './style'

const uploadFilesList = require('../../../json/dashboard-upload-files.json')

export class Main extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className={css(style.header.wrapper)}>
          <Header />
        </Row>
        <Row>
          <Col xs="12" className={`d-xl-none`}>
            <Link to="#" className={css(style.header.button)}>
              Add new file
            </Link>
          </Col>
          <Col
            xl="auto"
            className={`d-none d-xl-block ${css(style.main.colWrapper)}`}
          >
            <UploadForm />
          </Col>
          <Col
            xs="12"
            xl=""
            className={css(style.uploaded.wrapper, style.main.colWrapper)}
          >
            <Row>
              <Col xs="12">
                <h3 className={css(style.shared.h3)}>Uploaded files</h3>
              </Col>
              <Col xs="12" className={`d-none d-xl-block`}>
                <UploadedListTitles />
              </Col>
              <Col xs="12">
                <ScrollArea style={{ width: '100%', height: `382px` }}>
                  <Uploaded items={uploadFilesList} />
                </ScrollArea>
              </Col>
            </Row>
          </Col>
          <Col
            xs="12"
            xl="3"
            className={css(style.payments.wrapper, style.main.colWrapper)}
          >
            <Col xs="12">
              <h3 className={css(style.shared.h3)}>Payment history</h3>
            </Col>
            <Col xs="12" className={css(style.payments.content)}>
              <ScrollArea style={{ width: '100%', height: `200px` }}>
                <PaymentsList />
              </ScrollArea>
            </Col>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main
