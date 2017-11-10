import React from 'react'
import { css } from 'aphrodite'

import style from './style'

export const AlertBox = props => {
  if (!props.active || !props.text || !props.success) {
    return null
  }

  return (
  <div className={`${css(style.main.container)} d-flex justify-content-center`}>
    <div className={`${css(style.box.wrapper)} d-flex justify-content-between align-items-center flex-column`}>
      <h4 className={css(style.box.h4)}>system information</h4>
      <p className={css(style.info.p)} >{ props.text }</p>
      <div className={`${css(style.buttons.wrapper)} d-flex align-items-center justify-content-between`}>
        <div onClick={props.success.onClick} className={`${css(style.buttons.button, style.buttons.success)} d-flex align-items-center justify-content-center`}>
          <span className={css(style.buttons.span)}>{ props.success.text || 'Yes' }</span>        
        </div> 
        <div onClick={props.cancel.onClick} className={`${css(style.buttons.button, style.buttons.cancel)} d-flex align-items-center justify-content-center`}>
          <span className={css(style.buttons.span)}>{ props.cancel.text || 'Cancel' }</span>
        </div>
      </div>
    </div>
  </div>
)}

export default AlertBox