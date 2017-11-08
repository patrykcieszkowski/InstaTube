import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import style from './style'

const Locked = props => (
  <div
    className={`${css(
      style.container
    )} d-xl-flex justify-content-xl-center align-items-xl-center flex-column`}
  >
    <Row className={css(style.wrapper)}>
      <Col xs='12' className={css(style.box)}>
        <i
          className={`la la-lock ${css(style.lockIcon)}`}
          aria-hidden='true'
          title='copy link'
        />
      </Col>
      <Col xs='12' className={css(style.box)}>
        <span className={css(style.spanLocked)}>
          This content is{' '}
          <span className={css(style.spanLockedColor)}>locked</span> by user
        </span>
      </Col>
    </Row>
    <Row className={css(style.wrapper)}>
      <Col xs='12' className={css(style.box)}>
        <span className={css(style.spanUnlock)}>
          You can easily unlock it by paying{' '}
          <span className={css(style.spanUnlockColor)}>$5.00</span>
        </span>
      </Col>
      <Col xs='12' className={css(style.box, style.buttonUnlockBox)}>
        <Link
          to={`${props.homePath || ''}/auth`.replace('//', '/')}
          className={css(style.buttonUnlock)}
        >
          Unlock Content Now!
        </Link>
      </Col>
    </Row>
  </div>
)

export default Locked
