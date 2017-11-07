import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../style'

const HelpBox = props => (
  <Col
    xs="12"
    className={css(
      style.box.box,
      !props.state.isExpanded ? style.box.hiddenBox : ''
    )}
    onClick={props.onClick}
  >
    <Row className={`align-items-center ${css(style.box.header)}`}>
      <Col xs="1" className={`d-flex align-items-center`}>
        {HelpDeskIcon(!props.state.isExpanded)}
      </Col>
      <Col className={`d-flex align-items-center`}>
        <span className={css(style.box.title)}>{props.title}</span>
      </Col>
    </Row>
    <Row
      className={css(
        style.box.row,
        style.box.content,
        !props.state.isExpanded ? style.box.hiddenContent : ''
      )}
    >
      <Col xs="1" />
      <Col>
        <p className={css(style.box.p)}> {props.children}</p>
      </Col>
    </Row>
  </Col>
)

const HelpDeskIcon = isExpanded => {
  return (
    <i
      className={`la la-${isExpanded ? 'plus' : 'minus'}-circle ${css(
        style.box.icon
      )}`}
      aria-hidden="true"
      title="expand/hide"
    />
  )
}

export default HelpBox
