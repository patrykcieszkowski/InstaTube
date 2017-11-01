import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from './style'

export class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
    const state = {}
    state.isPlaying = false
    state.isMuted = false
    this.state = state
  }

  componentDidMount() {
    this.refs.audioplayer.addEventListener(
      'ended',
      this.onPlayPause.bind(this),
      false
    )
    this.refs.audioplayer.addEventListener(
      'pause',
      this.onPlayPause.bind(this),
      false
    )
    this.refs.audioplayer.addEventListener(
      'playing',
      this.onInitialPlay.bind(this),
      false
    )
  }

  onInitialPlay() {
    this.onPlayPause.call(this)
    if (!this.props.onPlay) {
      return
    }

    this.props.onPlay()
  }

  onPlayPause() {
    this.setState({
      ...this.state,
      isPlaying: !this.refs.audioplayer.paused
    })
  }

  onVolumeClick(e) {
    e.preventDefault()
    if (!this.refs.audioplayer) {
      return
    }

    this.refs.audioplayer.muted = !this.state.isMuted
    this.setState({
      ...this.state,
      isMuted: !this.state.isMuted
    })
  }

  render() {
    return (
      <figure>
        <audio
          autoPlay={false}
          ref="audioplayer"
          className={css(style.audio.audio)}
        >
          <source src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg" />
        </audio>
        <div className={css(style.main.wrapper)}>
          <h2 className={css(style.main.h2)}>test title</h2>
          <div>
            <a
              href="#mute"
              onClick={this.onVolumeClick.bind(this)}
              className={css(style.controls.muteButton)}
            >
              <i
                className={`la la-volume${this.state.isMuted
                  ? '-off'
                  : '-up'} `}
                aria-hidden="true"
                title="mute"
              />
            </a>
          </div>
        </div>
      </figure>
    )
  }
}

export default AudioPlayer
