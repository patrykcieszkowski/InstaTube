import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'

import style from './style'

import Media from './partials/Media'
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
      <Container>
        <Row className={css(style.grid.content)}>
          <Col xs="12" className={css(style.timer.wrapper)}>
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
              timeout={10}
              stroke={12}
              size={94}
            />
          </Col>
          <Col xs="12">
            <Media timer={this.state.timer} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main
