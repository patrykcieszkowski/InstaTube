import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import Video from '../../partials/VideoPlayer'
import Audio from '../../partials/AudioPlayer'
import Image from '../../partials/Image'

import style from '../style'

export class Media extends React.Component {
  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <Row className={css(style.media.wrapper)}>
        <RenderTitle media={{ type: 'audio' }} title={`How to nothing`} />
        <RenderMedia media={{ type: 'audio' }} />
        <Col xs='12' className={css(style.media.box)}>
          <Row className={css(style.media.descRow)}>
            <Col className={css(style.media.descHeaderWrapper)}>
              <h4 className={css(style.media.descH4)}>Description</h4>
            </Col>
          </Row>
          <Row className={css(style.media.descRow)}>
            <Col className={css(style.media.descParagraphWrapper)}>
              <p className={css(style.media.descParagraph)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet viverra mauris. Proin augue lacus, sagittis a ex sit
                amet, consequat blandit dui. Nam sit amet imperdiet ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Aliquam congue commodo urna et iaculis. In commodo, neque ac
                porta lacinia, purus risus pretium ligula, quis fermentum elit
                nibh vitae libero. Aenean vitae nunc sed nibh dignissim porta in
                eu felis. Duis fringilla a nulla vitae ullamcorper.
              </p>
            </Col>
          </Row>
        </Col>
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
      <h2 className={css(style.media.titleH2)}>{props.title}</h2>
    </Col>
  )
}

const RenderMedia = props => {
  switch (props.media.type) {
    case 'audio':
      return (
        <Col className={css(style.media.box, style.media.audioWrapper)}>
          <Audio />
        </Col>
      )
    case 'video':
      return (
        <Col className={css(style.media.box, style.media.videoWrapper)}>
          <Video />
        </Col>
      )
    case 'image':
      return (
        <Col className={css(style.media.box, style.media.imageWrapper)}>
          <Image timerInit={this.props.timer} />
        </Col>
      )
    default:
      return null
  }
}

export default Media
