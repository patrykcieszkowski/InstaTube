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

  onDeleteConfirm(index) {
    this.setState({
      ...this.state,
      items: [
        ...this.state.items.slice(0, index),
        {
          ...this.state.items[index],
          hide: true
        },
        ...this.state.items.slice(index + 1)
      ]
    })

    setTimeout(() =>
      this.setState({
        ...this.state,
        items: [
          ...this.state.items.slice(0, index),
          ...this.state.items.slice(index + 1)
        ]
      })
    , 500)
  }

  onDeleteItemClick(index, e) {
    e.preventDefault()

    this.props.openAlert({
      text: `Are you sure you want to delete?`,
      success: {
        text: `Yes`,
        onClick: this.onDeleteConfirm.bind(this, index)
      },
      cancel: {
        text: `Cancel`,
        onClick: () => {}
      }
    })
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
        onDeleteItemClick={this.onDeleteItemClick.bind(this, index)}
      />
    ))
  }
}

export default UploadedList
