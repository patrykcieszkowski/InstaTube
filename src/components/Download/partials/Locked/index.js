import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import Payment from '../../../partials/Payment'

import style from './style'

const Locked = props => {
  return (
    <div
      className={`${css(
        style.container
      )} d-flex justify-content-center align-items-center flex-column`}
    >
      <RenderPaymentStage {...props} />
    </div>
  )
}

const RenderPaymentStage = props => {
  if (props.state.ppv) {
    return <Payment {...props} />
  }

  return [
    <Row className={css(style.wrapper)} key={0}>
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
    </Row>,
    <RenderPaymentType {...props} key={1} />
  ]
}

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
            Follow For View
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
            {props.media.amount}
            {props.media.currency}
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
