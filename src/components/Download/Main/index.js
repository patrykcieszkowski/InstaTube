import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from './style'

import Container from '../../partials/Container'
import Media from './partials/Media'
import SignupInfo from './partials/SignupInfo'
import PieTimer from '../../partials/PieTimer'

export class Main extends React.Component {
  constructor(props) {
    super(props)
    const state = {}
    state.timer = {}
    this.state = state
  }

  onTimerComplete() {
    console.log('hello')
  }

  onTimerProgress(timer) {
    this.setState({
      ...this.state,
      timer
    })
  }

  render() {
    return (
      <Container fluid fullHeight minHeight>
        <Row className={css(style.grid.content)}>
          <Col xs="12" className={`d-lg-none ${css(style.timer.wrapper)}`}>
            <Row className={css(style.timer.row)} />
            <PieTimer
              ref="timer"
              style={{
                position: `absolute`,
                top: `calc(50% - 50px)`,
                right: `calc(50% - 50px)`
              }}
              onComplete={this.onTimerComplete.bind(this)}
              onProgress={this.onTimerProgress.bind(this)}
              timeout={120}
              stroke={12}
              size={94}
            />
          </Col>

          <Col
            xl="3"
            className={`d-none d-xl-flex justify-content-end ${css(
              style.timer.wrapper
            )}`}
          >
            <PieTimer
              ref="timer"
              style={{
                position: `relative`
              }}
              onComplete={this.onTimerComplete.bind(this)}
              onProgress={this.onTimerProgress.bind(this)}
              timeout={120}
              stroke={12}
              size={118}
            />
          </Col>
          <Col xs="12" xl="6">
            <Media timer={this.state.timer} />
          </Col>
          <Col
            xl="3"
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
    )
  }
}

export default Main
