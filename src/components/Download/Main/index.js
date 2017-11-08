import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import { matchPath } from 'react-router-dom'

import style from './style'

import Container from '../../partials/Container'
import Media from './partials/Media'
import SignupInfo from './partials/SignupInfo'
import PieTimer from '../../partials/PieTimer'

export class Main extends React.Component {
  constructor (props) {
    super(props)
    const state = {}
    state.timer = {}
    this.state = state
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

  render () {
    const isLocked = matchPath(this.props.location.pathname, {
      path: `${this.props.match.url}/locked`.replace('//', '/')
    })
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
            className={`
              ${css(style.timer.wrapper)}
              d-xl-flex justify-content-xl-end 
            `}
          >
            <Row className={`${css(style.timer.row)} d-xl-none`} />
            <PieTimer
              ref='timer'
              renderClassName={css(style.timer.timer)}
              onComplete={this.onTimerComplete.bind(this)}
              onProgress={this.onTimerProgress.bind(this)}
              timeout={30}
              stroke={12}
              size={94}
            />
          </Col>
          <Col xs='12' xl='6'>
            <Media timer={this.state.timer} premium />
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
