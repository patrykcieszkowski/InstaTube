import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

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
    <RenderPaymentType {...props} />
  </div>
)

const RenderPaymentType = props => {
  if (props.media.instagram) {
    return (
      <Row className={css(style.wrapper)}>
        <Col xs='12' className={css(style.box)}>
          <span className={css(style.spanUnlock)}>
            You can easily unlock it by{' '}
            <span className={css(style.spanUnlockColor)}>
              leaving Instagram like
            </span>
          </span>
        </Col>
        <Col xs='12' className={css(style.box, style.buttonUnlockBox)}>
          <a
            href='#pay'
            onClick={props.onPPIClick}
            className={css(style.buttonUnlock)}
          >
            PayByLike
          </a>
        </Col>
      </Row>
    )
  }

  return (
    <Row className={css(style.wrapper)}>
      <Col xs='12' className={css(style.box)}>
        <span className={css(style.spanUnlock)}>
          You can easily unlock it by paying{' '}
          <span className={css(style.spanUnlockColor)}>
            5.00{props.media.currency}
          </span>
        </span>
      </Col>
      <Col xs='12' className={css(style.box, style.buttonUnlockBox)}>
        <a
          href='#pay'
          onClick={props.onPPVSubmit}
          className={css(style.buttonUnlock)}
        >
          Unlock Content Now!
        </a>
      </Col>
    </Row>
  )
}

export default Locked
