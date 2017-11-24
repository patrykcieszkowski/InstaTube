import React from 'react'
import { css } from 'aphrodite'
import { Row } from 'reactstrap'
import attrAccept from 'attr-accept'
import copyToClipboard from 'copy-to-clipboard'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import style from './style'

import UploadForm from './partials/UploadForm'
import Success from './partials/Success'
import Error from './partials/Error'
import Progress from './partials/Progress'

/* eslint-disable no-unused-vars */
const ATTR_ACCEPT_ALL = 'video/*,audio/*,image/*'
const ATTR_ACCEPT_MEDIA = 'video/*,audio/*'
/* eslint-enable no-unused-vars */

@inject('uploadform', 'uploads', 'auth')
@observer
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
        hour: 0,
        minute: 1
      },
      displayTime: 1,
      links: {
        instagram: false,
        ppv: false
      },
      views: {
        view: true,
        number: 1
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
        [type]: e.target.value
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
    if (!this.props.dashboard) {
      return
    }

    e.preventDefault()
    const links = { ...this.state.links }
    const viewTypes = { ...this.state.viewTypes }
    Object.keys(links).forEach(a => {
      links[a] = !!(a === type && !links[a])
      viewTypes[a] = links[a] ? viewTypes[a] : a === 'ppv' ? 0 : ''
    })

    this.setState({
      ...this.state,
      links,
      viewTypes
    })
  }

  onViewsNumberChange(e) {
    if (e.target.value !== '' && !e.target.value.match(/^\d+$/)) {
      return e.preventDefault()
    }

    this.setState({
      ...this.state,
      views: {
        ...this.state.views,
        number:
          +e.target.value < 1
            ? e.target.value.length ? 1 : ''
            : +e.target.value > 999 ? 999 : e.target.value
      }
    })
  }

  onPPVInputChange(e) {
    if (e.target.value !== '' && !e.target.value.match(/^(\d+\.?\d*|\.\d+)$/)) {
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

  onInstagramSelectChange(option) {
    this.setState({
      ...this.state,
      viewTypes: {
        ...this.state.viewTypes,
        instagram: option.value
      }
    })
  }

  onFormSubmit(e) {
    e.preventDefault()

    this.props.uploadform
      .upload(
        {
          message: this.state.message,
          views: this.state.views,
          viewType: this.state.viewTypes,
          displayTime: this.state.displayTime,
          validity: this.state.validity,
          viewTypes: this.state.viewTypes
        },
        this.state.upload.file
      )
      .then(() => {
        if (this.props.auth.auth.local) {
          this.props.uploads.fetch()
          this.props.user.fetchDashboard()
        }
      })
  }

  onCopyLinkClick(e) {
    e.preventDefault()

    if (!this.props.uploadform.response) {
      return
    }

    copyToClipboard(this.props.uploadform.response.url)
  }

  onBackLinkClick(e) {
    e.preventDefault()
    this.setState({
      filename: '',
      message: '',
      upload: {
        file: null,
        error: false
      },
      validity: {
        hour: 0,
        minute: 1
      },
      displayTime: 1,
      links: {
        instagram: false,
        ppv: false
      },
      views: {
        view: true,
        number: 1
      },
      success: false,
      viewTypes: {
        ppv: 0,
        instagram: ''
      }
    })
    this.props.uploadform.reset()
  }

  onResetStoreClick(e) {
    e.preventDefault()
    this.props.uploadform.reset()
  }

  render() {
    return (
      <Row className={css(style.main.wrapper)}>
        <RenderError
          onClick={this.onResetStoreClick.bind(this)}
          {...this.props.uploadform}
          error={this.props.uploadform.error || this.state.upload.error}
        />
        <RenderProgress {...this.props.uploadform} />
        <RenderSuccess
          onCopyLinkClick={this.onCopyLinkClick.bind(this)}
          onBackLinkClick={this.onBackLinkClick.bind(this)}
          {...this.props.uploadform}
        />
        <RenderUploadForm
          request={this.props.uploadform.request}
          response={this.props.uploadform.response}
          error={this.props.uploadform.error}
          currency={this.props.currency}
          authState={this.props.auth.auth.local}
          instagramAccounts={this.props.instagramAccounts}
          onFormSubmit={this.onFormSubmit.bind(this)}
          onDropRejected={this.onDropRejected.bind(this)}
          onDropAccepted={this.onDropAccepted.bind(this)}
          onFilenameChange={this.onFilenameChange.bind(this)}
          onMessageChange={this.onMessageChange.bind(this)}
          onInstagramClick={this.onLinkClick.bind(this, 'instagram')}
          onPPVClick={this.onLinkClick.bind(this, 'ppv')}
          onPPVInputChange={this.onPPVInputChange.bind(this)}
          onInstagramSelectChange={this.onInstagramSelectChange.bind(this)}
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

const RenderError = props => {
  if (!props.error || props.request || props.response) {
    return null
  }

  return <Error onClick={props.onClick} error={props.error} />
}

const RenderProgress = props => {
  if (!props.request || props.error) {
    return null
  }

  return <Progress />
}

const RenderSuccess = props => {
  if (!props.response || props.error) {
    return null
  }

  return <Success {...props} url={props.response.url} />
}

const RenderUploadForm = props => {
  if (props.request || props.response || props.error) {
    return null
  }

  return <UploadForm {...props} />
}

export default Upload
