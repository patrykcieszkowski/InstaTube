import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from '../style'

export class Media extends React.Component {
  render() {
    return (
      <Row className={css(style.media.wrapper)}>
        <Col className={css(style.media.box)}>
          <img
            src="https://twistedsifter.files.wordpress.com/2017/03/point-reyes-shipwreck.jpg"
            className={css(style.media.image)}
          />
        </Col>
        <Col xs="12" className={css(style.media.box)}>
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

export default Media
