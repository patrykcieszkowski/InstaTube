import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../style'

export const PremiumInfo = props => (
  <Row className={css(style.info.box)}>
    <Col xs='12' className={css(style.info.colWrapper)}>
      <h4 className={css(style.info.h4)}>InstaTube Premium</h4>
    </Col>
    <Col xs='12' className={css(style.info.colWrapper)}>
      <span className={css(style.info.desc)}>
        Get more avibility space up to 20GB per 24h!
      </span>
    </Col>
    <Col xs='12' className={css(style.info.colWrapper)}>
      <a
        href='#premium'
        className={css(style.info.button)}
        onClick={props.onClick}
      >
        Buy now $5/<span className={css(style.info.buttonMonthSpan)}>
          month
        </span>
      </a>
    </Col>
  </Row>
)

export default PremiumInfo
