import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import attrAccept from 'attr-accept'

import copyToClipboard from 'copy-to-clipboard'

import style from './style'

import UploadForm from './partials/UploadForm'
import Success from './partials/Success'

const ATTR_ACCEPT_ALL = 'video/*,audio/*,image/*'
const ATTR_ACCEPT_MEDIA = 'video/*,audio/*'

export class Upload extends React.Component {
  constructor() {
    super()
    this.state = {
      filename: '',
      message: '',
      upload: {
        file: null,
        error: false
      },
      validity: {
        hour: 1,
        minute: 0
      },
      displayTime: 1,
      links: {
        instagram: false,
        ppv: false
      },
      views: {
        view: false,
        number: 0
      },
      success: false,
      viewTypes: {
        ppv: 0,
        instagram: ''
      }
    }
  }

  onDropRejected(files) {
    this.setState({
      ...this.state,
      upload: {
        file: null,
        error: attrAccept(files[0], ATTR_ACCEPT_ALL)
          ? 'File is too large'
          : 'Invalid media format'
      }
    })
  }

  onDropAccepted(files) {
    this.setState({
      ...this.state,
      upload: {
        file: files[0],
        error: false
      }
    })
  }

  onFilenameChange(e) {
    this.setState({
      ...this.state,
      filename: e.target.value
    })
  }

  onMessageChange(e) {
    this.setState({
      ...this.state,
      message: e.target.value
    })
  }

  toggleCheckbox() {
    this.setState({
      ...this.state,
      views: {
        ...this.state.views,
        view: !this.state.views.view
      }
    })
  }

  onValidityChange(type, e) {
    this.setState({
      ...this.state,
      validity: {
        ...this.state.validity,
        [type]: type === 'hour' ? e.target.value : e.target.value * 15
      }
    })
  }

  onDisplayTimeChange(e) {
    this.setState({
      ...this.state,
      displayTime: e.target.value
    })
  }

  onLinkClick(type, e) {
    if (this.props.dashboard) {
      e.preventDefault()
    }
    
    const links = JSON.parse(JSON.stringify(this.state.links))
    Object.keys(links).forEach(a => (links[a] = !!(a === type && !links[a])))

    this.setState({
      ...this.state,
      links
    })
  }

  onViewsNumberChange(e) {
    if (!e.target.value.match(/^\d+$/)) {
      return e.preventDefault()
    }

    this.setState({
      ...this.state,
      views: {
        ...this.state.views,
        number: e.target.value
      }
    })
  }

  onPPVInputChange(e) {
    if (e.target.value !== '' && !e.target.value.match(/^(\d+\.?\d*|\.\d+)$/))
    {
      return e.preventDefault()      
    }

    this.setState({
      ...this.state,
      viewTypes: {
        ...this.state.viewTypes,
        ppv: e.target.value
      }
    })
  }

  onInstagramInputChange(e) {
    this.setState({
      ...this.state,
      viewTypes: {
        ...this.state.viewTypes,
        instagram: e.target.value
      }
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    if (!this.state.upload.file) {
      return this.setState({
        upload: {
          file: null,
          error: 'You need to upload the file'
        }
      })
    }

    this.setState({
      ...this.state,
      success: true
    })
  }

  onCopyLinkClick(e) {
    e.preventDefault()
    copyToClipboard('http://in.pl/asdd21')
  }

  render() {
    return (
      <Row className={css(style.main.wrapper)}>
        <Success
          onCopyLinkClick={this.onCopyLinkClick.bind(this)}
          style={{ display: !this.state.success ? `none` : `block` }}
        />
        <UploadForm
          style={{ display: this.state.success ? `none` : `block` }}
          onFormSubmit={this.onFormSubmit.bind(this)}
          onDropRejected={this.onDropRejected.bind(this)}
          onDropAccepted={this.onDropAccepted.bind(this)}
          onFilenameChange={this.onFilenameChange.bind(this)}
          onMessageChange={this.onMessageChange.bind(this)}
          onInstagramClick={this.onLinkClick.bind(this, 'instagram')}
          onPPVClick={this.onLinkClick.bind(this, 'ppv')}
          onPPVInputChange={this.onPPVInputChange.bind(this)}
          onInstagramInputChange={this.onInstagramInputChange.bind(this)}
          onDisplayTimeChange={this.onDisplayTimeChange.bind(this)}
          onValidityMinuteChange={this.onValidityChange.bind(this, 'minute')}
          onValidityHourChange={this.onValidityChange.bind(this, 'hour')}
          onViewsNumberChange={this.onViewsNumberChange.bind(this)}
          onCheckboxClick={this.toggleCheckbox.bind(this)}
          onErrorCloseClick={() =>
            this.setState({ ...this.state, upload: { error: null } })}
          state={this.state}
        />
      </Row>
    )
  }
}

export default Upload
