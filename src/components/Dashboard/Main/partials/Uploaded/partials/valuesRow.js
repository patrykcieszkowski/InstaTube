import React from 'react'
import { css } from 'aphrodite'
import { Row } from 'reactstrap'

import Column from '../../../../../partials/Col'

import utils from '../../../../../../utils'
import style from '../../../style'

const ItemValuesRow = props => {
  const endDate = utils.dateTimeStringToDate(props.item.end).getTime()
  const nowDate = new Date().getTime()
  const parsedTime =
    endDate > nowDate
      ? utils.secondsToTime((endDate - nowDate) / 1000).slice(0, 3)
      : null

  return (
    <Row
      onMouseOver={props.onDateActionHover}
      onMouseOut={props.onDateActionHoverOut}
    >
      <Column
        xs='12'
        xl='1'
        xxxl='auto'
        xxxxl='auto'
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
      </Column>
      <Column
        xs='12'
        xl='2'
        xxl='4'
        xxxl='4'
        xxxxl='4'
        className={css(style.uploaded.valueBox)}
        onClick={props.onNameToggleClick}
      >
        <span
          className={`${css(
            style.uploaded.valueSpan,
            style.uploaded.nameValue
          )} d-flex align-items-center`}
          onClick={props.onNameToggleClick}
        >
          {props.item.name}
        </span>
      </Column>
      <Column
        xs='12'
        xl='2'
        xxl='1'
        xxxl='1'
        xxxxl='1'
        className={css(style.uploaded.valueBox)}
      >
        <span
          className={`${css(
            style.uploaded.valueSpan
          )} d-flex justify-content-xl-center align-items-center`}
        >
          {props.item.viewed || '-'}/
          <span className={css(style.uploaded.fatSpan)}>
            {props.item.views}
          </span>
        </span>
      </Column>
      <Column
        xs='12'
        xl='2'
        xxl='2'
        xxxl='2'
        xxxxl='2'
        className={css(style.uploaded.valueBox)}
      >
        <span
          className={`${css(
            style.uploaded.valueSpan,
            style.uploaded.valuePrice
          )} d-flex justify-content-xl-center align-items-center`}
        >
          {props.item.amount ? `${props.item.amount}${props.currency}` : '-'}
        </span>
      </Column>
      <Column
        xs='12'
        xl='2'
        xxl='1'
        xxxxl='1'
        className={`${css(style.uploaded.valueBox)}`}
      >
        <span
          className={`${css(
            style.uploaded.valueSpan,
            props.item.earn && props.item.active ? style.uploaded.earnValue : ''
          )} d-flex justify-content-xl-center align-items-center`}
        >
          {props.item.earn ? `${props.item.earn}${props.currency}` : '-'}
        </span>
      </Column>
      <ActionExpireColumn props={props} parsedTime={parsedTime} />
      <DTimeLeftColumn props={props} parsedTime={parsedTime} />
      <ActionsColumn props={props} />
      <NamepBlockColumn props={props} />
      <CopyBlockColumn props={props} />
    </Row>
  )
}

const ActionExpireColumn = ({ props, parsedTime }) => (
  <Column
    xl='3'
    xxl
    className={`${css(
      style.uploaded.valueBox,
      style.grid['d-xxxxl-none']
    )} d-none d-xl-flex`}
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
          className={`${css(
            style.uploaded.valueSpan
          )} d-none d-xl-flex justify-content-xl-center align-items-center`}
        >
          {parsedTime
            ? parsedTime.map(val => `${val[0]}${val[1][0]}`).join(' ')
            : 'end'}
        </span>
      </div>
      <div>
        <RenderActions {...props} />
      </div>
    </div>
  </Column>
)

const RenderActions = props => {
  if (!props.item.active) {
    return (
      <span
        className={`${css(
          style.uploaded.valueSpan
        )} d-flex justify-content-xl-center align-items-center`}
      >
        <a href='#delete' onClick={props.onDeleteItemClick}>
          <i
            className={`la la-trash-o ${css(
              style.uploaded.actionIcon,
              style.uploaded.actionIconTrash
            )}`}
            aria-hidden='true'
            title='expand'
          />
        </a>
      </span>
    )
  }

  return (
    <span
      className={`${css(
        style.uploaded.valueSpan
      )} d-flex justify-content-xl-center align-items-center`}
    >
      <a href='#' onClick={props.onCopyActionToggle}>
        <i
          className={`la la-link ${css(style.uploaded.actionIcon)}`}
          aria-hidden='true'
          title='copy link'
        />
      </a>

      <a href='#' onClick={props.onDeleteItemClick}>
        <i
          className={`la la-trash-o ${css(
            style.uploaded.actionIcon,
            style.uploaded.actionIconTrash
          )}`}
          aria-hidden='true'
          title='expand'
        />
      </a>
    </span>
  )
}

const NamepBlockColumn = ({ props }) => (
  <Column
    xs='12'
    className={`${css(
      style.uploaded.popupBlock,
      style.uploaded.popupNameBlock,
      props.item.nameActionToggle ? style.uploaded.popupBlockActive : ''
    )} d-flex align-items-center`}
  >
    <Row className={css(style.uploaded.popupBlockWrapper)}>
      <Column
        xs
        className={`${css(
          style.uploaded.popupInputWrapper
        )} f-flex align-items-center`}
      >
        <input
          type='text'
          value={props.stateName}
          defaultValue={`${props.item.name}`}
          onChange={props.onNameChange}
          onKeyDown={e => (e.keyCode === 13 ? props.onNameSave(e) : null)}
          className={css(
            style.uploaded.popupInput,
            style.uploaded.namePopupInput
          )}
        />
      </Column>

      <Column
        xl='auto'
        xxxl='1'
        className={`${css(
          style.uploaded.actionIconBox
        )} d-none d-lg-flex align-items-center`}
      >
        <a href='#save' onClick={props.onNameSave}>
          <i
            className={`la la-save ${css(style.uploaded.actionIcon)}`}
            aria-hidden='true'
            title='save link'
          />
        </a>
        <a href='#' onClick={props.onNameToggleClick}>
          <i
            className={`la la-close ${css(style.uploaded.actionIcon)}`}
            aria-hidden='true'
            title='close'
          />
        </a>
      </Column>

      <Column
        xs='2'
        xl='auto'
        xxxl='1'
        className={`${css(
          style.uploaded.actionIconBox
        )} d-flex d-lg-none align-items-center`}
      >
        <a href='#save' onClick={props.onNameSave}>
          <i
            className={`la la-save ${css(style.uploaded.actionIcon)}`}
            aria-hidden='true'
            title='save link'
          />
        </a>
      </Column>
      <Column
        xs='2'
        xl='auto'
        xxxl='1'
        className={`${css(
          style.uploaded.actionIconBox
        )} d-flex d-lg-none align-items-center`}
      >
        <a href='#' onClick={props.onNameToggleClick}>
          <i
            className={`la la-close ${css(style.uploaded.actionIcon)}`}
            aria-hidden='true'
            title='close'
          />
        </a>
      </Column>
    </Row>
  </Column>
)

const CopyBlockColumn = ({ props }) => (
  <Column
    xs='12'
    xl='5'
    className={`${css(
      style.uploaded.popupBlock,
      props.item.copyActionToggle ? style.uploaded.popupBlockActive : ''
    )} d-flex align-items-center`}
  >
    <Row className={css(style.uploaded.popupBlockWrapper)}>
      <Column xs className={css(style.uploaded.popupInputWrapper)}>
        <input
          type='text'
          dir='rtl'
          readOnly
          value={`http://${window.location.hostname}/m/${props.item.url}`}
          className={css(style.uploaded.popupInput)}
        />
      </Column>

      <Column
        xs='2'
        xl='auto'
        xxxl='1'
        className={`${css(
          style.uploaded.actionIconBox
        )} d-flex align-items-center`}
      >
        <a href='#copy' onClick={props.onCopyClick}>
          <i
            className={`la la-copy ${css(style.uploaded.actionIcon)}`}
            aria-hidden='true'
            title='copy link'
          />
        </a>
      </Column>
      <Column
        xs='2'
        xl='auto'
        xxxl='1'
        className={`${css(
          style.uploaded.actionIconBox
        )} d-flex align-items-center`}
      >
        <a href='#' onClick={props.onCopyActionToggle}>
          <i
            className={`la la-close ${css(style.uploaded.actionIcon)}`}
            aria-hidden='true'
            title='close'
          />
        </a>
      </Column>
    </Row>
  </Column>
)

const DTimeLeftColumn = ({ props, parsedTime }) => (
  <Column
    xs='12'
    xxxxl='2'
    className={`${css(
      style.uploaded.valueBox,
      style.grid['d-xxxxl-block']
    )} d-xl-none`}
  >
    <span
      className={`${css(
        style.uploaded.valueSpan
      )} d-flex align-items-center justify-content-xl-center`}
    >
      {parsedTime
        ? parsedTime.map(val => `${val[0]}${val[1][0]}`).join(' ')
        : 'end'}
    </span>
  </Column>
)

const ActionsColumn = ({ props }) => (
  <Column
    xs='12'
    xl=''
    xxxxl='auto'
    className={`${css(style.grid['d-xxxxl-block'])} d-xl-none`}
  >
    <RenderActions {...props} />
  </Column>
)

export default ItemValuesRow
