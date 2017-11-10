import React from 'react'
import { css } from 'aphrodite'

import style from './style'

export class VideoPlayer extends React.Component {
  constructor (props) {
    super(props)
    const state = {}
    state.videoProgress = 0
    state.showControls = false
    state.isPlaying = false
    state.isMuted = false
    state.isFullscreen = false
    this.state = state
  }

  componentDidMount () {
    this.refs.videoplayer.addEventListener(
      'timeupdate',
      this.onProgress.bind(this),
      false
    )
    this.refs.videoplayer.addEventListener(
      'ended',
      this.onPlayPause.bind(this),
      false
    )
    this.refs.videoplayer.addEventListener(
      'pause',
      this.onPlayPause.bind(this),
      false
    )
    this.refs.videoplayer.addEventListener(
      'playing',
      this.onPlayPause.bind(this),
      false
    )
    this.refs.videoplayerWrapper.addEventListener(
      'mousemove',
      this.onMouseMove.bind(this),
      false
    )
  }

  onPlayPause () {
    this.setState({
      ...this.state,
      isPlaying: !this.refs.videoplayer.paused
    })
  }

  onProgress () {
    this.setState({
      ...this.state,
      videoProgress:
        this.refs.videoplayer.currentTime / this.refs.videoplayer.duration * 100
    })
  }

  onVolumeClick () {
    if (!this.refs.videoplayer) {
      return
    }

    this.refs.videoplayer.muted = !this.state.isMuted
    this.setState({
      ...this.state,
      isMuted: !this.state.isMuted
    })
  }

  onFullscreenClick () {
    if (!this.refs.videoplayer) {
      return
    }

    if (!this.state.isFullscreen) {
      if (this.refs.videoplayer.requestFullscreen) {
        this.refs.videoplayer.requestFullscreen()
      } else if (this.refs.videoplayerWrapper.mozRequestFullScreen) {
        this.refs.videoplayerWrapper.mozRequestFullScreen()
      } else if (this.refs.videoplayer.webkitRequestFullscreen) {
        this.refs.videoplayer.webkitRequestFullscreen()
      }
    } else {
      if (this.refs.videoplayer.exitFullscreen) {
        this.refs.videoplayer.exitFullscreen()
      } else if (this.refs.videoplayerWrapper.mozCancelFullScreen) {
        this.refs.videoplayerWrapper.mozCancelFullScreen()
      } else if (this.refs.videoplayer.webkitExitFullscreen) {
        this.refs.videoplayer.webkitExitFullscreen()
      }
    }

    this.setState({
      ...this.state,
      isFullscreen: !this.state.isFullscreen
    })
  }

  onMouseMove () {
    this.setState({ ...this.state, showControls: true })
    clearTimeout(this.hoverTimeout)

    this.hoverTimeout = setTimeout(
      () => this.setState({ ...this.state, showControls: false }),
      1000
    )
  }

  onPlayPauseClick () {
    if (!this.refs.videoplayer) {
      return
    }

    if (!this.refs.videoplayer.paused) {
      this.refs.videoplayer.pause()
    } else {
      this.refs.videoplayer.play()
    }
  }

  onSeekChange (e) {
    if (!this.refs.videoplayer || !this.props.premium) {
      return
    }

    var vidTime = this.refs.videoplayer.duration * (e.target.value / 100)
    this.refs.videoplayer.currentTime = vidTime
  }

  render () {
    return (
      <figure className={css(style.main.wrapper)} ref='videoplayerWrapper'>
        <video className={css(style.video.video)} ref='videoplayer' autoPlay>
          <source src={this.props.media.src} />
        </video>
        <div
          className={css(
            style.controls.wrapper,
            this.state.isFullscreen ? style.controls.fullscreen : '',
            !this.state.showControls ? style.controls.hideControls : ''
          )}
        >
          <div className={css(style.controls.playWrapper)}>
            <a
              href='#play'
              onClick={this.onPlayPauseClick.bind(this)}
              className={css(style.controls.playButton)}
            >
              <i
                className={`la la-${!this.state.isPlaying
                  ? 'play'
                  : 'pause'} ${css(style.controls.playButtonIcon)}`}
                aria-hidden='true'
                title='play'
              />
            </a>
          </div>
          <div className={css(style.controls.bottomControlsWrapper)}>
            <div className={css(style.controls.bottomControls)}>
              <a
                href='#mute'
                onClick={this.onVolumeClick.bind(this)}
                className={css(style.controls.bottomControlsButton)}
              >
                <i
                  className={`la la-volume${this.state.isMuted
                    ? '-off'
                    : '-up'} `}
                  aria-hidden='true'
                  title='mute'
                />
              </a>
              <a
                href='#fullscreen'
                onClick={this.onFullscreenClick.bind(this)}
                className={css(style.controls.bottomControlsButton)}
              >
                <i
                  className={`la la-arrows `}
                  aria-hidden='true'
                  title='fullscreen'
                />
              </a>
            </div>
            <RenderSlider
              value={this.state.videoProgress}
              onChange={this.onSeekChange.bind(this)}
              premium={this.props.premium}
            />
          </div>
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

export default VideoPlayer
