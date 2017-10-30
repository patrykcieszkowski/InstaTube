import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'

import style from './style'

import Media from './partials/Media'
import PieTimer from '../../partials/PieTimer'

export class Main extends React.Component {
  onTimerComplete() {
    console.log('hello')
  }

  render() {
    return (
      <Container>
        <Row className={css(style.grid.content)}>
          <Col xs="12" style={{ marginBottom: `30px` }}>
            <Row
              style={{
                height: `70px`,
                background: `#72488e`,
                left: `0px`,
                right: `0px`,
                margin: `0 -15px`,
                position: `relative`
              }}
            />
            <PieTimer
              style={{
                position: `absolute`,
                top: `calc(50% - 50px)`,
                right: `calc(50% - 50px)`
              }}
              onComplete={this.onTimerComplete.bind(this)}
              timeout={10}
              stroke={12}
              size={94}
            />
          </Col>
          <Col xs="12">
            <Media />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main
