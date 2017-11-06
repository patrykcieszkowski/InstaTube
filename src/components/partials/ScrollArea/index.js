import React from 'react'
import { css } from 'aphrodite'
import { Scrollbars } from 'react-custom-scrollbars'

import style from './style'

export const ScrollArea = props => (
  <Scrollbars
    renderTrackVertical={_props => (
      <div {..._props} className={css(style.track)} />
    )}
    renderThumbVertical={_props => (
      <div {..._props} className={css(style.thumb)} />
    )}
    renderView={_props =>
      renderView({ className: props.renderClassName, props: _props })}
    {...props}
  >
    {props.children}
  </Scrollbars>
)

const renderView = props => (
  <div {...props.props} className={`${props.className} ${css(style.view)}`} />
)

export default ScrollArea
