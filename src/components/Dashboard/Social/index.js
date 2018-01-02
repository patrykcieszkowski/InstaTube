import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

import Alert from '../../partials/FormAlert'

import SidebarHeader from '../../partials/SidebarHeader'
import SocialHistory from './partials/SocialHistory'
import AddInstagram from './partials/AddInstagram'

@inject('social')
@observer
export class Social extends React.Component {
  componentWillMount () {
    document.title = `${this.props.title} - ${this.props.homeTitle}`
  }

  onClick (e) {
    e.preventDefault()
    const { instagram } = this.props.social.data.data
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${instagram.apikey}&redirect_uri=${instagram.url}&response_type=code&scope=basic+follower_list+relationships+public_content`
  }

  render () {
    return (
      <Container fluid className={css(style.main.container)}>
        <Row>
          <SidebarHeader title='Social Networks' paddingBottom md />
        </Row>
        <Alert {...this.props.social.data.response} />
        <Row className={css(style.main.mainRow)}>
          <Col xs='12' className={css(style.history.wrapper)}>
            <SocialHistory />
          </Col>
          <Col xs='12' className={css(style.button.wrapper)}>
            <AddInstagram onClick={this.onClick.bind(this)} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Social
