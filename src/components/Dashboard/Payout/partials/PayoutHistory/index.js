import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import { inject, observer } from 'mobx-react'

import style from '../../style'

import ScrollArea from '../../../../partials/ScrollArea'

import PayoutHistoryTitles from './partials/titleRow.js'
import PayoutHistoryItem from './partials/listItem.js'

@inject('payouts')
@observer
class PayoutHistory extends React.Component {
  constructor(props) {
    super(props)
    this.all = this.props.payouts.all
  }

  render() {
    return (
      <Row className={css(style.history.mainRow)}>
        <Col xs="12" className={css(style.history.titleWrapper)}>
          <PayoutHistoryTitles />
        </Col>
        <Col xs="12" className={css(style.history.contentWrapper)}>
          <ScrollArea
            style={{ width: '100%', height: `100%` }}
            autoHide={true}
            autoHideTimeout={1000}
            autoHideDuration={200}
          >
            { this.all.slice().map((item, index) => (
              <PayoutHistoryItem item={item} key={index} />
            )) }
          </ScrollArea>
        </Col>
      </Row>  
    )
  }
}

export default PayoutHistory
