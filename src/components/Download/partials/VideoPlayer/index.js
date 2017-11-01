import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'

import style from './style'

export class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    const state = {}
    state.videoProgress = 0
    state.showControls = false
    state.isPlaying = false
    state.isMuted = false
    state.isFullscreen = false
    this.state = state
  }

  componentDidMount() {
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

  onPlayPause() {
    this.setState({
      ...this.state,
      isPlaying: !this.refs.videoplayer.paused
    })
  }

  onProgress() {
    this.setState({
      ...this.state,
      videoProgress:
        this.refs.videoplayer.currentTime / this.refs.videoplayer.duration * 100
    })
  }

  onVolumeClick() {
    if (!this.refs.videoplayer) {
      return
    }

    this.refs.videoplayer.muted = !this.state.isMuted
    this.setState({
      ...this.state,
      isMuted: !this.state.isMuted
    })
  }

  onFullscreenClick() {
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

  onMouseMove() {
    this.setState({ ...this.state, showControls: true })
    clearTimeout(this.hoverTimeout)

    this.hoverTimeout = setTimeout(
      () => this.setState({ ...this.state, showControls: false }),
      1000
    )
  }

  onPlayPauseClick() {
    if (!this.refs.videoplayer) {
      return
    }

    if (!this.refs.videoplayer.paused) {
      this.refs.videoplayer.pause()
    } else {
      this.refs.videoplayer.play()
    }
  }

  onSeekChange(e) {
    if (!this.refs.videoplayer) {
      return
    }

    var vidTime = this.refs.videoplayer.duration * (e.target.value / 100)
    this.refs.videoplayer.currentTime = vidTime
  }

  render() {
    return (
      <figure className={css(style.main.wrapper)} ref="videoplayerWrapper">
        <video className={css(style.video.video)} ref="videoplayer">
          <source src="https://www.w3schools.com/tags/movie.mp4" />
        </video>
        <div
          className={css(
            style.controls.wrapper,
            !this.state.showControls ? style.controls.hideControls : ''
          )}
        >
          <div className={css(style.controls.playWrapper)}>
            <a
              href="#play"
              onClick={this.onPlayPauseClick.bind(this)}
              className={css(style.controls.playButton)}
            >
              <i
                className={`la la-${!this.state.isPlaying
                  ? 'play'
                  : 'pause'} ${css(style.controls.playButtonIcon)}`}
                aria-hidden="true"
                title="play"
              />
            </a>
          </div>
          <div className={css(style.controls.bottomControlsWrapper)}>
            <div className={css(style.controls.bottomControls)}>
              <a
                href="#mute"
                onClick={this.onVolumeClick.bind(this)}
                className={css(style.controls.bottomControlsButton)}
              >
                <i
                  className={`la la-volume${this.state.isMuted
                    ? '-off'
                    : '-up'} `}
                  aria-hidden="true"
                  title="mute"
                />
              </a>
              <a
                href="#fullscreen"
                onClick={this.onFullscreenClick.bind(this)}
                className={css(style.controls.bottomControlsButton)}
              >
                <i
                  className={`la la-arrows `}
                  aria-hidden="true"
                  title="fullscreen"
                />
              </a>
            </div>
            <div className={css(style.controls.sliderWrapper)}>
              <input
                onChange={this.onSeekChange.bind(this)}
                type="range"
                min="1"
                max="100"
                value={this.state.videoProgress}
                className={css(style.controls.slider)}
              />
            </div>
          </div>
        </div>
      </figure>
    )
  }
}

export default VideoPlayer
