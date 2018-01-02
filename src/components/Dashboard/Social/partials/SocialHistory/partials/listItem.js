import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import Column from '../../../../../partials/Col'
import utils from '../../../../../../utils'

import style from '../../../style'

export const PayoutHistoryItem = props => {
  const date = utils.dateTimeStringToDate(props.item.date)
  return (
    <Row
      className={css(
        style.history.box,
        props.item.hide ? style.history.boxHidden : ''
      )}
    >
      <Col xs='12' className={css(style.history.innerWrapper)}>
        <Row>
          <Col xs='6'>
            <span className={css(style.history.valueSpan)}>
              @{props.item.name}
            </span>
          </Col>
          <Col xs='4'>
            <span
              className={css(style.history.valueSpan, style.history.dateSpan)}
            >
              {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}
            </span>
          </Col>
          <Col xs='2'>
            <Row>
              <ActionsColumn onDeleteItemClick={props.onDeleteItemClick} />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

const ActionsColumn = props => (
  <Column xs='12' xl='' xxxxl='auto'>
    <RenderActions {...props} />
  </Column>
)

const RenderActions = props => {
  return (
    <span
      className={`${css(
        style.history.valueSpan
      )} d-flex justify-content-xl-center align-items-center`}
    >
      <a href='#delete' onClick={props.onDeleteItemClick}>
        <i
          className={`la la-trash-o ${css(
            style.history.actionIcon,
            style.history.actionIconTrash
          )}`}
          aria-hidden='true'
          title='expand'
        />
      </a>
    </span>
  )
}

export default PayoutHistoryItem
