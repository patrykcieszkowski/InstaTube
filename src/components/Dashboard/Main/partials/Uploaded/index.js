import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
import copyToClipboard from 'copy-to-clipboard'

import style from '../../style'

import ListItem from './partials/listItem'

import utils from '../../../../../utils'

export class UploadedList extends React.Component {
  constructor(props) {
    super(props)
    const state = {}
    state.items = props.items
    this.state = state
  }

  onDateActionHover(index, state, e) {
    this.setState({
      ...this.state,
      items: [
        ...this.state.items.slice(0, index),
        {
          ...this.state.items[index],
          actionDateToggle: state
            ? !this.state.items[index].copyActionToggle
            : state
        },
        ...this.state.items.slice(index + 1)
      ]
    })
  }

  onCopyActionToggle(index, e) {
    e.preventDefault()

    this.setState({
      ...this.state,
      items: [
        ...this.state.items.slice(0, index),
        {
          ...this.state.items[index],
          copyActionToggle: !this.state.items[index].copyActionToggle
        },
        ...this.state.items.slice(index + 1)
      ]
    })
  }

  onCopyClick(index, e) {
    e.preventDefault()
    copyToClipboard(this.state.items[index].url || '')
  }

  render() {
    return this.state.items.map((item, index) => (
      <ListItem
        key={index}
        index={index}
        item={this.state.items[index] || {}}
        onDateActionHover={this.onDateActionHover.bind(this, index, true)}
        onDateActionHoverOut={this.onDateActionHover.bind(this, index, false)}
        onCopyActionToggle={this.onCopyActionToggle.bind(this, index)}
        onCopyClick={this.onCopyClick.bind(this, index)}
      />
    ))
  }
}

export default UploadedList
