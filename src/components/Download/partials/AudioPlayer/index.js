import React from 'react'
import { css } from 'aphrodite'

import style from './style'

export class AudioPlayer extends React.Component {
  constructor (props) {
    super(props)
    const state = {}
    state.isPlaying = false
    state.isMuted = false
    state.audioProgress = 0
    this.state = state
  }

  componentDidMount () {
    this.refs.audioplayer.addEventListener(
      'timeupdate',
      this.onProgress.bind(this),
      false
    )
    this.refs.audioplayer.addEventListener(
      'ended',
      this.onMediaEnd.bind(this),
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

  onInitialPlay () {
    this.onPlayPause()
    if (!this.props.onPlay) {
      return
    }

    this.props.onPlay()
  }

  onMediaEnd () {
    this.onPlayPause()
    this.props.onMediaComplete()
  }

  onPlayPause () {
    const audioplayer = this.refs.audioplayer
    this.setState({
      ...this.state,
      isPlaying: !audioplayer ? false : !this.refs.audioplayer.paused
    })
  }

  onVolumeClick (e) {
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

  onProgress () {
    const audioplayer = this.refs.audioplayer
    this.setState({
      ...this.state,
      audioProgress: !audioplayer
        ? 0
        : audioplayer.currentTime / audioplayer.duration * 100
    })
  }

  onSeekChange (e) {
    if (!this.refs.audioplayer || !this.props.media.unlock) {
      return
    }

    var vidTime = this.refs.audioplayer.duration * (e.target.value / 100)
    this.refs.audioplayer.currentTime = vidTime
  }

  render () {
    return (
      <figure>
        <audio autoPlay ref='audioplayer' className={css(style.audio.audio)}>
          <source src={this.props.media.src} />
        </audio>
        <div className={css(style.main.wrapper)}>
          <h2 className={css(style.main.h2)}>{this.props.media.name}</h2>
          <div>
            <a
              href='#mute'
              onClick={this.onVolumeClick.bind(this)}
              className={css(style.controls.muteButton)}
            >
              <i
                className={`la la-volume${this.state.isMuted
                  ? '-off'
                  : '-up'} `}
                aria-hidden='true'
                title='mute'
              />
            </a>
          </div>
          <RenderSlider
            value={this.state.audioProgress}
            onChange={this.onSeekChange.bind(this)}
            premium={this.props.media.premium}
          />
        </div>
      </figure>
    )
  }
}

const RenderSlider = props => {
  if (!props.premium) {
    return null
  }

  return (
    <div className={css(style.controls.sliderWrapper)}>
      <input
        onChange={props.onChange}
        type='range'
        min='1'
        max='100'
        value={props.value}
        className={css(style.controls.slider)}
      />
    </div>
  )
}

export default AudioPlayer
