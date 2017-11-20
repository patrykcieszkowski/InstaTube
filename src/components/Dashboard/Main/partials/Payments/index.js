import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import PaymentsListItem from './partials/listItem'
import style from '../../style'

@inject('payments')
@observer
export class PaymentsList extends React.Component {
  render() {
    return (
      this.props.payments.all.map((item, index) => 
        <PaymentsListItem item={item} key={index} />
      )
    )
  }
}

export default PaymentsList
