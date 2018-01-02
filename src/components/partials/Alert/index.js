import React from 'react'
import { css } from 'aphrodite'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

@inject('alert')
@observer
export class AlertBox extends React.Component {
  render () {
    if (!this.props.alert.alert) {
      return null
    }

    return (
      <div
        className={`${css(style.main.container)} d-flex justify-content-center`}
      >
        <div
          className={`${css(
            style.box.wrapper
          )} d-flex justify-content-between align-items-center flex-column`}
        >
          <h4 className={css(style.box.h4)}>system information</h4>
          <p className={css(style.info.p)}>{this.props.alert.alert.text}</p>
          <div
            className={`${css(style.buttons.wrapper)} d-flex align-items-center 
              ${this.props.alert.alert.cancel
                ? 'justify-content-between'
                : 'justify-content-center'}`}
          >
            <div
              onClick={() => this.props.alert.onSuccessClick()}
              className={`${css(
                style.buttons.button,
                style.buttons.success
              )} d-flex align-items-center justify-content-center`}
            >
              <span className={css(style.buttons.span)}>
                {this.props.alert.alert.success.text || 'Yes'}
              </span>
            </div>
            <RenderCancelButton
              cancel={this.props.alert.alert.cancel}
              onCancelClick={() => this.props.alert.onCancelClick()}
            />
          </div>
        </div>
      </div>
    )
  }
}

const RenderCancelButton = props => {
  if (!props.cancel) {
    return null
  }

  return (
    <div
      onClick={() => props.onCancelClick()}
      className={`${css(
        style.buttons.button,
        style.buttons.cancel
      )} d-flex align-items-center justify-content-center`}
    >
      <span className={css(style.buttons.span)}>
        {props.cancel.text || 'Cancel'}
      </span>
    </div>
  )
}

export default AlertBox
