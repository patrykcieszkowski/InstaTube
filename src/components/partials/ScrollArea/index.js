import React from 'react'
import { css } from 'aphrodite'
import { Scrollbars } from 'react-custom-scrollbars'

import style from './style'

export class ScrollArea extends React.Component {
  constructor(props) {
    super(props)
    const state = {}
    state.hideTrack = false
    this.state = state
  }

  onScrollUpdate(details) {
    this.setState({
      hideTrack: details.scrollHeight > details.clientHeight
    })
  }

  render() {
    const { renderClassName, ...props } = this.props

    return (
      <Scrollbars
        onUpdate={this.onScrollUpdate.bind(this)}
        renderTrackVertical={_props => (
          <div
            {..._props}
            className={css(style.track)}
            style={{ opacity: +this.state.hideTrack }}
          />
        )}
        renderThumbVertical={_props => (
          <div {..._props} className={css(style.thumb)} />
        )}
        renderView={_props =>
          renderView({
            className: renderClassName,
            props: _props,
            hideTrack: this.state.hideTrack
          })}
        {...props}
      >
        {this.props.children}
      </Scrollbars>
    )
  }
}

const renderViewClassName = props =>
  [
    props.className || '',
    css(style.view),
    props.hideTrack ? css(style.hideTrack) : ''
  ]
    .filter(a => a)
    .join(' ')

const renderView = props => (
  <div {...props.props} className={renderViewClassName(props)} />
)

export default ScrollArea
