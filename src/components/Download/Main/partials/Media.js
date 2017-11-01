import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import Video from '../../partials/VideoPlayer'
import Audio from '../../partials/AudioPlayer'
import Image from '../../partials/Image'

import style from '../style'

export class Media extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <Row className={css(style.media.wrapper)}>
        <Col xs="12" className={css(style.media.box)}>
          <h2 className={css(style.media.titleH2)}>How to nothing</h2>
        </Col>
        <Col className={css(style.media.box, style.media.imageWrapper)}>
          {/* <Video /> */}
          {/* <Audio /> */}

          <Image timerInit={this.props.timer} />
        </Col>
        <Col xs="12" className={css(style.media.box)}>
          <Row className={css(style.media.descRow)}>
            <Col className={css(style.media.descHeaderWrapper)}>
              <h4 className={css(style.media.descH4)}>Description</h4>
            </Col>
          </Row>
          <Row className={css(style.media.descRow)}>
            <Col className={css(style.media.descParagraphWrapper)}>
              <p className={css(style.media.descParagraph, style.media.blur)}>
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

export default Media
