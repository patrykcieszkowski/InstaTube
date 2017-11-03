import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../../../style'

import ItemDescriptionRow from './descriptionRow'
import ItemValuesRow from './valuesRow'

const UploadedListItem = props => (
  <Row
    className={css(
      !!props.item.active ? style.uploaded.boxActive : '',
      style.uploaded.box
    )}
  >
    <Col xs="6" className={`d-xl-none`}>
      <ItemDescriptionRow />
    </Col>
    <Col xs="6" xl="12">
      <ItemValuesRow {...props} />
    </Col>
  </Row>
)

export default UploadedListItem
