import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import PieTimer from '../../../partials/PieTimer'

import style from './style'

export class Image extends React.Component {
  constructor(props) {
    super(props)
    const state = {}
    state.fullscreen = {
      show: false,
      display: false
    }
    this.state = state
  }

  renderTimer() {
    if (!this.props.timerInit.passed) {
      return null
    }

    return (
      <PieTimer
        style={{
          position: `absolute`,
          top: `-50px`,
          right: `calc(50% - 50px)`
        }}
        timerInit={this.props.timerInit}
        stroke={12}
        size={94}
        fill={`#c5ced3`}
        overlay
      />
    )
  }

  onEnlargeClick() {
    this.setState({
      fullscreen: {
        ...this.state.fullscreen,
        show: true,
        display: true
      }
    })
  }

  onCloseClick() {
    // hide fullscreen, but keep display propety (let animation finish)
    this.setState({
      fullscreen: {
        ...this.state.fullscreen,
        show: false
      }
    })

    // set display propety to none
    setTimeout(
      () =>
        this.setState({
          ...this.state,
          fullscreen: {
            ...this.state.fullscreen,
            display: false
          }
        }),
      200
    )
  }

  render() {
    return [
      <Row key={0} className={css(style.image.wrapper)}>
        <Col className={css(style.image.box)}>
          <img
            src="https://twistedsifter.files.wordpress.com/2017/03/point-reyes-shipwreck.jpg"
            className={css(
              style.image.image,
              this.props.blur ? style.image.blur : ''
            )}
          />
        </Col>
        <a
          href="#enlarge"
          onClick={this.onEnlargeClick.bind(this)}
          className={css(style.image.enlargeButton)}
        >
          <i
            className={`la la-search-plus`}
            aria-hidden="true"
            title="enlarge"
          />
        </a>
      </Row>,
      <Row
        className={`d-flex justify-content-centern align-items-center ${css(
          style.fullscreen.wrapper,
          this.state.fullscreen.show ? style.fullscreen.show : '',
          !this.state.fullscreen.display ? style.fullscreen.displayNone : ''
        )}`}
        key={1}
      >
        <Col className={css(style.fullscreen.box)}>
          {this.renderTimer()}
          <img
            src="https://twistedsifter.files.wordpress.com/2017/03/point-reyes-shipwreck.jpg"
            className={css(
              style.image.image,
              this.props.blur ? style.image.blur : ''
            )}
          />
          <a
            href="#close"
            onClick={this.onCloseClick.bind(this)}
            className={css(style.fullscreen.closeButton)}
          >
            <i className={`la la-close`} aria-hidden="true" title="close" />
          </a>
        </Col>
      </Row>
    ]
  }
}

export default Image
