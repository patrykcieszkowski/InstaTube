import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../style'

export const UploadedList = props => [
  <UploadedListItem key={0} />,
  <UploadedListItem key={1} />
]

const UploadedListItem = props => (
  <Row className={css(style.uploaded.box)}>
    <Col xs="6" className={`d-lg-none`}>
      <ItemDescriptionRow />
    </Col>
    <Col xs="6" lg="12">
      <ItemValuesRow />
    </Col>
  </Row>
)

const ItemDescriptionRow = props => (
  <Row>
    <Col xs="12">
      <span className={css(style.uploaded.labelSpan)}>status</span>
    </Col>
    <Col xs="12">
      <span className={css(style.uploaded.labelSpan)}>name</span>
    </Col>
    <Col xs="12">
      <span className={css(style.uploaded.labelSpan)}>views</span>
    </Col>
    <Col xs="12">
      <span className={css(style.uploaded.labelSpan)}>price</span>
    </Col>
    <Col xs="12">
      <span className={css(style.uploaded.labelSpan)}>earn</span>
    </Col>
    <Col xs="12">
      <span className={css(style.uploaded.labelSpan)}>time left</span>
    </Col>
    <Col xs="12">
      <span className={css(style.uploaded.labelSpan)}>actions</span>
    </Col>
  </Row>
)

const ItemValuesRow = props => (
  <Row>
    <Col xs="12" lg="1">
      <div
        className={css(
          style.uploaded.statusCircle,
          style.uploaded.statusCircleOnline
        )}
      />
    </Col>
    <Col xs="12" lg="4">
      <span
        className={css(style.uploaded.valueSpan, style.uploaded.titleValue)}
      >
        Lorem ipsum
      </span>
    </Col>
    <Col xs="12" lg="1">
      <span className={css(style.uploaded.valueSpan)}>
        45/
        <span className={css(style.uploaded.fatSpan)}>50</span>
      </span>
    </Col>
    <Col xs="12" lg="1">
      <span
        className={css(style.uploaded.valueSpan, style.uploaded.valuePrice)}
      >
        $5.00
      </span>
    </Col>
    <Col xs="12" lg="1">
      <span className={css(style.uploaded.valueSpan, style.uploaded.earnValue)}>
        $180
      </span>
    </Col>
    <Col xs="12" lg="2">
      <span className={`${css(style.uploaded.valueSpan)}, d-none d-lg-block`}>
        12h 5m 2s
      </span>
      <span className={`${css(style.uploaded.valueSpan)}, d-lg-none`}>
        23-12-07 10:45:21
      </span>
    </Col>
    <Col xs="12" lg="2">
      <span className={css(style.uploaded.valueSpan)}>
        <a href="#">
          <i
            className={`la la-link ${css(style.uploaded.actionIcon)}`}
            aria-hidden="true"
            title="copy link"
          />
        </a>

        <a href="#">
          <i
            className={`la la-clock-o ${css(style.uploaded.actionIcon)}`}
            aria-hidden="true"
            title="expand"
          />
        </a>

        <a href="#">
          <i
            className={`la la-trash-o ${css(
              style.uploaded.actionIcon,
              style.uploaded.actionIconTrash
            )}`}
            aria-hidden="true"
            title="expand"
          />
        </a>
      </span>
    </Col>
  </Row>
)

export default UploadedList
