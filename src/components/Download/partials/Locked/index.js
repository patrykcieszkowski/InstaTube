import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'

import style from './style'

const Locked = props => (
  <div className={css(style.container)}>
    <Row className={css(style.wrapper)}>
      <Col xs="12" className={css(style.box)}>
        <i
          className={`la la-lock ${css(style.lockIcon)}`}
          aria-hidden="true"
          title="copy link"
        />
      </Col>
      <Col xs="12" className={css(style.box)}>
        <span className={css(style.spanLocked)}>
          This content is{' '}
          <span className={css(style.spanLockedColor)}>locked</span> by user
        </span>
      </Col>
      <Col xs="12" className={css(style.box)}>
        <span className={css(style.spanUnlock)}>
          You can easily unlock it by paying{' '}
          <span className={css(style.spanUnlockColor)}>$5.00</span>
        </span>
      </Col>
      <Col xs="12" className={css(style.box, style.buttonUnlockBox)}>
        <a href="#" className={css(style.buttonUnlock)}>
          Unlock Content Now!
        </a>
      </Col>
    </Row>
  </div>
)

export default Locked
