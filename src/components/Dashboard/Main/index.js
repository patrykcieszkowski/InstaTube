import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import ScrollArea from '../../partials/ScrollArea'
import UploadForm from '../../partials/UploadForm'
import Container from '../../partials/Container'

import Header from './partials/Header'
import Payments from './partials/Payments'
import PaymentsListTitles from './partials/Payments/partials/titlesRow'

import Uploaded from './partials/Uploaded'
import UploadedListTitles from './partials/Uploaded/partials/titlesRow'
import style from './style'

@inject('user', 'social', 'alert')
@observer
export class Main extends React.Component {
  constructor (props) {
    super(props)
    const state = {}
    state.showUploadForm = false
    state.alert = {
      active: false
    }
    this.state = state
  }

  componentWillMount () {
    document.title = `${this.props.homeTitle}`
  }

  openAlert (args) {
    this.props.alert.setAlert({
      active: true,
      success: {
        text: args.success.text,
        onClick: () => {
          args.success.onClick()
        }
      },
      cancel: {
        text: args.cancel.text,
        onClick: () => {
          args.cancel.onClick()
        }
      },
      text: args.text
    })
  }

  onShowUploadClick () {
    this.setState({
      showUploadForm: !this.state.showUploadForm
    })
  }

  render () {
    return (
      <Container fluid>
        <Row className={css(style.header.wrapper)}>
          <Header
            {...this.props.user.dashboard.data}
            {...this.props.user.profile.data}
          />
        </Row>
        <Row className={css(style.main.mainRow)}>
          <Col xs='12' className={`d-xl-none`}>
            <Link
              to='#'
              className={css(style.header.button)}
              onClick={this.onShowUploadClick.bind(this)}
            >
              {this.state.showUploadForm ? 'Hide Upload Form' : 'Add new file'}
            </Link>
          </Col>
          <Col
            xl='auto'
            className={`d-flex align-items-center ${css(
              style.main.colWrapper,
              style.uploadform.wrapper,
              !this.state.showUploadForm ? style.uploadform.hide : ''
            )}`}
          >
            <UploadForm
              dashboard
              instagramAccounts={this.props.social.data.data.data}
              currency={this.props.user.dashboard.data.currency}
            />
          </Col>
          <Col
            xs='12'
            xl=''
            className={css(style.uploaded.wrapper, style.main.colWrapper)}
          >
            <Row className={css(style.uploaded.mainRow)}>
              <Col xs='12'>
                <h3 className={css(style.shared.h3)}>Uploaded files</h3>
              </Col>
              <Col xs='12' className={`d-none d-xl-block`}>
                <UploadedListTitles />
              </Col>
              <Col xs='12'>
                <ScrollArea
                  style={{
                    width: '100%',
                    height: `382px`,
                    overflowX: `hidden`
                  }}
                >
                  <Uploaded openAlert={this.openAlert.bind(this)} />
                </ScrollArea>
              </Col>
            </Row>
          </Col>
          <Col
            xs='12'
            xl='3'
            className={css(style.payments.wrapper, style.main.colWrapper)}
          >
            <Col xs='12'>
              <h3 className={css(style.shared.h3)}>Payment history</h3>
            </Col>
            <Col xs='12' className={`d-none d-xl-block`}>
              <PaymentsListTitles />
            </Col>
            <Col xs='12' className={css(style.payments.content)}>
              <ScrollArea style={{ width: '100%', height: `382px` }}>
                <Payments />
              </ScrollArea>
            </Col>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main
