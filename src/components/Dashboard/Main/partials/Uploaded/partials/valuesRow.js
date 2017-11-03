import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import utils from '../../../../../../utils'
import style from '../../../style'

const ItemValuesRow = props => {
  const endDate = new Date(props.item.end).getTime()
  const nowDate = Date.now()
  let parsedTime =
    endDate > nowDate
      ? utils.secondsToTime((endDate - nowDate) / 1000).slice(0, 3)
      : null

  return (
    <Row
      onMouseOver={props.onDateActionHover}
      onMouseOut={props.onDateActionHoverOut}
    >
      <Col
        xs="12"
        xl="1"
        className={`d-flex justify-content-xl-center align-items-center ${css(
          style.uploaded.valueBox
        )}`}
      >
        <div
          className={css(
            style.uploaded.statusCircle,
            props.item.active ? style.uploaded.statusCircleOnline : ''
          )}
        />
      </Col>
      <Col xs="12" xl="" className={css(style.uploaded.valueBox)}>
        <span
          className={css(style.uploaded.valueSpan, style.uploaded.titleValue)}
        >
          {props.item.file}
        </span>
      </Col>
      <Col xs="12" xl="2" className={css(style.uploaded.valueBox)}>
        <span className={css(style.uploaded.valueSpan)}>
          {props.item.seen || '-'}/
          <span className={css(style.uploaded.fatSpan)}>50</span>
        </span>
      </Col>
      <Col xs="12" xl="2" className={css(style.uploaded.valueBox)}>
        <span
          className={css(style.uploaded.valueSpan, style.uploaded.valuePrice)}
        >
          {props.item.price ? `$${props.item.price}` : '-'}
        </span>
      </Col>
      <Col xs="12" xl="2" className={css(style.uploaded.valueBox)}>
        <span
          className={css(
            style.uploaded.valueSpan,
            props.item.earn && props.item.active ? style.uploaded.earnValue : ''
          )}
        >
          {props.item.earn ? `$${props.item.earn}` : '-'}
        </span>
      </Col>
      <Col
        xl="3"
        className={`${css(style.uploaded.valueBox)} d-none d-xl-block`}
      >
        <div
          className={css(
            style.uploaded.actionDateToggle,
            props.item.actionDateToggle || !props.item.active
              ? style.uploaded.actionDateToggleActive
              : ''
          )}
        >
          <div className={css(style.uploaded.valueBox)}>
            <span
              className={`${css(style.uploaded.valueSpan)} d-none d-xl-block`}
            >
              {parsedTime
                ? parsedTime.map(val => `${val[0]}${val[1][0]}`).join(' ')
                : 'end'}
            </span>
          </div>
          <div>
            <span className={css(style.uploaded.valueSpan)}>
              <a href="#" onClick={props.onCopyActionToggle}>
                <i
                  className={`la la-link ${css(style.uploaded.actionIcon)}`}
                  aria-hidden="true"
                  title="copy link"
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
          </div>
        </div>
      </Col>
      <Col xd="12" className={`${css(style.uploaded.valueBox)} d-xl-none`}>
        <span className={css(style.uploaded.valueSpan)}>23-12-07 10:45:21</span>
      </Col>
      <Col xs="12" xl="" className={`d-xl-none`}>
        <span className={css(style.uploaded.valueSpan)}>
          <a href="#" onClick={props.onCopyActionToggle}>
            <i
              className={`la la-link ${css(style.uploaded.actionIcon)}`}
              aria-hidden="true"
              title="copy link"
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
      <Col
        xs="5"
        className={`${css(
          style.uploaded.copyBlock,
          props.item.copyActionToggle ? style.uploaded.copyBlockActive : ''
        )} d-flex align-items-center`}
      >
        <Row className={css(style.uploaded.copyBlockWrapper)}>
          <Col className={css(style.uploaded.copyInputWrapper)}>
            <input
              type="text"
              dir="rtl"
              readOnly={true}
              value={props.item.url}
              className={css(style.uploaded.copyInput)}
            />
          </Col>
          <Col xs="1" className={css(style.uploaded.actionIconBox)}>
            <a href="#" onClick={props.onCopyClick}>
              <i
                className={`la la-copy ${css(style.uploaded.actionIcon)}`}
                aria-hidden="true"
                title="copy link"
              />
            </a>
          </Col>
          <Col xs="1" className={css(style.uploaded.actionIconBox)}>
            <a href="#" onClick={props.onCopyActionToggle}>
              <i
                className={`la la-close ${css(style.uploaded.actionIcon)}`}
                aria-hidden="true"
                title="close"
              />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ItemValuesRow
