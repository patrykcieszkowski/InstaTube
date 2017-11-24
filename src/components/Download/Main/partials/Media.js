import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import Video from '../../partials/VideoPlayer'
import Audio from '../../partials/AudioPlayer'
import Image from '../../partials/Image'

import style from '../style'

@inject('media')
@observer
export class Media extends React.Component {
  render () {
    return (
      <Row className={css(style.media.wrapper)}>
        <RenderTitle media={this.props.media.media} />
        <RenderMedia {...this.props} media={this.props.media.media} />
        <RenderDescription
          description={this.props.media.media.message || null}
        />
      </Row>
    )
  }
}

const RenderTitle = props => {
  if (props.media.type === 'audio') {
    return null
  }

  return (
    <Col xs='12' className={css(style.media.box)}>
      <h2 className={css(style.media.titleH2)}>{props.media.name}</h2>
    </Col>
  )
}

const RenderMedia = props => {
  switch (props.media.type) {
    case 'audio':
      return (
        <Col className={css(style.media.box, style.media.audioWrapper)}>
          <Audio media={props.media} />
        </Col>
      )
    case 'video':
      return (
        <Col className={css(style.media.box, style.media.videoWrapper)}>
          <Video media={props.media} />
        </Col>
      )
    case 'image':
      return (
        <Col className={css(style.media.box, style.media.imageWrapper)}>
          <Image timerInit={props.timer} media={props.media} />
        </Col>
      )
    default:
      return null
  }
}

const RenderDescription = props => {
  if (!props.description) {
    return null
  }

  return (
    <Col xs='12' className={css(style.media.box)}>
      <Row className={css(style.media.descRow)}>
        <Col className={css(style.media.descHeaderWrapper)}>
          <h4 className={css(style.media.descH4)}>Description</h4>
        </Col>
      </Row>
      <Row className={css(style.media.descRow)}>
        <Col className={css(style.media.descParagraphWrapper)}>
          <p className={css(style.media.descParagraph)}>{props.description}</p>
        </Col>
      </Row>
    </Col>
  )
}

export default Media
