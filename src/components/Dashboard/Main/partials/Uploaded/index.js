import React from 'react'
import copyToClipboard from 'copy-to-clipboard'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import ListItem from './partials/listItem'

@inject('uploads', 'user')
@observer
export class UploadedList extends React.Component {
  constructor(props) {
    super(props)
    const state = {}
    state.nameEditPopup = ''
    this.state = state
  }

  componentDidMount() {
    setInterval(() => {
      this.forceUpdate()
    }, 500)
  }

  onDeleteConfirm(index) {
    this.props.uploads.deleteItem(index)
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
    e.preventDefault()
    this.props.uploads.setDateAction(index, state)
  }

  onCopyActionToggle(index, e) {
    e.preventDefault()
    this.props.uploads.setCopyAction(index)
  }

  onCopyClick(index, e) {
    e.preventDefault()
    copyToClipboard(
      `http://${window.location.hostname}/m/${this.props.uploads.all[index]
        .url || ''}`
    )
  }

  onExtendItemClick(index, e) {
    e.preventDefault()
    this.props.uploads.extendItem(index)
  }

  onNameToggleClick(index, e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      nameEditPopup: this.props.uploads.all[index].name
    })
    this.props.uploads.setNamePopupAction(index)
  }

  onNameChange(index, e) {
    this.setState({
      ...this.state,
      nameEditPopup: e.target.value
    })
  }

  onNameSave(index, e) {
    e.preventDefault()
    this.props.uploads.setName({
      index,
      name: this.state.nameEditPopup || this.props.uploads.all[index].name
    })
  }

  render() {
    return this.props.uploads.all
      .slice()
      .map((item, index) => (
        <ListItem
          key={index}
          index={index}
          item={{ ...item, active: !!+item.active } || {}}
          currency={this.props.user.dashboard.data.currency}
          onDateActionHover={this.onDateActionHover.bind(this, index, true)}
          onDateActionHoverOut={this.onDateActionHover.bind(this, index, false)}
          onCopyActionToggle={this.onCopyActionToggle.bind(this, index)}
          onCopyClick={this.onCopyClick.bind(this, index)}
          onDeleteItemClick={this.onDeleteItemClick.bind(this, index)}
          onExtendItemClick={this.onExtendItemClick.bind(this, index)}
          onNameToggleClick={this.onNameToggleClick.bind(this, index)}
          onNameChange={this.onNameChange.bind(this, index)}
          onNameSave={this.onNameSave.bind(this, index)}
          stateName={this.state.nameEditPopup}
        />
      ))
  }
}

export default UploadedList
