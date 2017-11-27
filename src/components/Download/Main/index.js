import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import { matchPath, Redirect } from 'react-router-dom'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

import Container from '../../partials/Container'
import Media from './partials/Media'
import SignupInfo from './partials/SignupInfo'
import PieTimer from '../../partials/PieTimer'

@inject('media')
@observer
export class Main extends React.Component {
  constructor (props) {
    super(props)
    const state = {}
    state.timer = {}
    state.loadComplete = false
    this.state = state
    this.media = this.props.media.media
  }

  onLoadComplete () {
    this.setState({
      ...this.state,
      loadComplete: true
    })
  }

  onTimerComplete () {
    this.props.history.push('/')
  }

  onTimerProgress (timer) {
    this.setState({
      ...this.state,
      timer
    })
  }

  renderTimer () {
    if (!this.props.media.media.premium || !this.state.loadComplete) {
      return null
    }

    return (
      <PieTimer
        ref='timer'
        renderClassName={css(style.timer.timer)}
        onComplete={this.onTimerComplete.bind(this)}
        onProgress={this.onTimerProgress.bind(this)}
        timeout={this.props.media.media.display}
        stroke={12}
        size={118}
      />
    )
  }

  render () {
    const isLocked = matchPath(this.props.location.pathname, {
      path: `${this.props.match.url}/locked`.replace('//', '/')
    })

    if (!this.props.media.media && !this.props.media.error) {
      return null
    }

    if (this.props.media.error) {
      return <Redirect to={`/`} />
    }

    if (!isLocked && !this.props.media.media.unlock) {
      return (
        <Redirect to={`${this.props.match.url}/locked`.replace('//', '/')} />
      )
    }

    return [
      <div
        key={0}
        style={{ display: isLocked ? `block` : `none` }}
        className={css(style.main.overlay)}
      />,
      <Container key={1} fluid fullHeight minHeight>
        <Row className={css(style.main.content)}>
          <Col
            xs='12'
            xl='3'
            className={`${css(
              style.timer.wrapper
            )} d-xl-flex justify-content-xl-end`}
          >
            <Row className={`${css(style.timer.row)} d-lg-none `} />
            {this.renderTimer()}
          </Col>
          <Col xs='12' xl='6'>
            <Media
              timer={this.state.timer}
              onLoadComplete={this.onLoadComplete.bind(this)}
            />
          </Col>
          <Col
            xl='3'
            className={`d-none d-xl-flex align-items-center ${css(
              style.signup.wrapper
            )}`}
          >
            <Row className={`${css(style.signup.box)}`}>
              <SignupInfo />
            </Row>
          </Col>
        </Row>
      </Container>
    ]
  }
}

export default Main
