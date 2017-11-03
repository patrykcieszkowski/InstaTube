import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import PaymentsListItem from './partials/listItem'
import style from '../../style'

export const PaymentsList = props =>
  props.items.map((item, index) => <PaymentsListItem item={item} key={index} />)

export default PaymentsList
