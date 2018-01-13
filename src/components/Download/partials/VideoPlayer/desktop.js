import React from 'react'
import { css } from 'aphrodite'
import dashjs, { MediaPlayer } from 'dashjs'

import utils from '../../../../utils'

import style from './style'

export class VideoPlayer extends React.Component {
  qualityList = []
  constructor (props) {
    super(props)
    const state = {}
    state.videoProgress = 0
    state.showControls = false
    state.showQualityBox = false
    state.isPlaying = false
    state.isMuted = false
    state.isFullscreen = false
    state.mousePos = { x: 0, y: 0 }
    this.state = state
  }

  componentDidMount () {
    console.log(this.props)
    const url = this.props.media.manifest

    this.player = dashjs.MediaPlayer().create()
    this.player.getDebug().setLogToBrowserConsole(false)
    this.player.initialize(this.refs.videoplayer, url, true)
    this.player.setFastSwitchEnabled(true)

    this.refs.videoslider.addEventListener(
      'mousedown',
      this.onSliderMouseDown.bind(this),
      false
    )
    document.addEventListener(
      'mouseup',
      this.onSliderMouseUp.bind(this),
      false
    )

    document.addEventListener(
      'mousemove',
      this.onDocumentMouseMove.bind(this),
      false
    )

    this.refs.videoplayer.addEventListener(
      'loadeddata',
      this.onVideoReady.bind(this),
      false
    )
    this.refs.videoplayer.addEventListener(
      'timeupdate',
      this.onProgress.bind(this),
      false
    )
    this.refs.videoplayer.addEventListener(
      'ended',
      this.onMediaEnd.bind(this),
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

  updateSeekTimeout() {
    let seekPosition = 0
    if (!this.state.isFullscreen) {
      const mousePosTarget = findPos(this.refs.videoplayer)
      const posX = this.state.mousePos.x - mousePosTarget.x
      seekPosition = posX/this.refs.videoslider.offsetWidth
    } else {
      seekPosition = this.state.mousePos.x/window.outerWidth
    }
    
    const vidTime = this.refs.videoplayer.duration * seekPosition
    this.refs.videoplayer.currentTime = vidTime

    if (this.state.sliderClick) {
      setTimeout(this.updateSeekTimeout.bind(this), 100)
    }
  }

  onSliderMouseDown(e) {
    e.preventDefault()

    this.setState({
      ...this.state,
      sliderClick: true
    })

    setTimeout(this.updateSeekTimeout.bind(this), 100)
  }

  onSliderMouseUp(e) {
    e.preventDefault()
    
    this.setState({
      ...this.state,
      sliderClick: false
    })
  }

  onDocumentMouseMove(e) {
    this.setState({
      ...this.state,
      mousePos: mousePositionDocument(e)
    })
  }

  onVideoReady() {
    this.player.getBitrateInfoListFor("video").forEach((q, i) => {
      this.qualityList.push({
        index: i,
        height: q.height
      })
    })
  }

  onMediaEnd () {
    this.onPlayPause()
    this.props.onMediaComplete()
  }

  onPlayPause () {
    this.setState({
      ...this.state,
      isPlaying: !this.refs.videoplayer.paused
    })
  }

  onProgress () {
    const videoProgress = this.refs.videoplayer.currentTime / this.refs.videoplayer.duration * 100

    const bufferLength = this.refs.videoplayer.buffered.length
    const videoBuffer = this.refs.videoplayer.buffered.end(bufferLength-1) / this.refs.videoplayer.duration * 100
    this.setState({
      ...this.state,
      videoProgress,
      videoBuffer
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

  onQualityGearClick(e) {
    this.setState({
      ...this.state,
      showQualityBox: !this.state.showQualityBox
    })
  }

  onQualityClick(i, e) {
    this.player.setAutoSwitchQuality(false)
    this.player.setQualityFor("video", i)
    this.setState({
      ...this.state,
      showQualityBox: false
    })
  }

  onAutoQualityClick(e) {
    this.player.setAutoSwitchQuality(true)
    this.setState({
      ...this.state,
      showQualityBox: false
    })  
  }

  render () {
    const timeRange = {
      currentTime: '--',
      duration: '--'
    }

    let quality = {}

    if (this.player && this.qualityList.length > 0) {
      quality = this.qualityList[this.player.getQualityFor('video')]
    }

    if (this.refs.videoplayer && !isNaN(this.refs.videoplayer.duration)) {
      timeRange.duration = utils.secondsToTime(this.refs.videoplayer.duration)
      timeRange.currentTime = [
        ...new Array(timeRange.duration.length - 1 -  !!Math.floor(parseInt(this.refs.videoplayer.currentTime, 10) / (60)) % 24 - !!Math.floor(parseInt(this.refs.videoplayer.currentTime, 10) / (60 * 60)) % 24),
        ...utils.secondsToTime(this.refs.videoplayer.currentTime)
      ]
    }

    return (
      <figure className={css(style.main.wrapper)} ref='videoplayerWrapper'>
        <video className={css(style.video.video)} ref='videoplayer' autoPlay={false}>
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
            <div 
              className={css(
                style.quality.box,
                !this.state.showQualityBox ? style.quality.hide : ''
              )}
            >
              <header className={css(style.quality.header)}>
                Quality
              </header>
              <ul className={css(style.quality.list)}>
                { [...this.qualityList].reverse().map((q, i) => (
                  <li 
                    key={this.qualityList.length - 1 - i}
                    className={css(style.quality.listItem)}
                    onClick={this.onQualityClick.bind(this, this.qualityList.length - 1 - i)}
                  >
                    <span className={css(style.quality.nameSpan)}>
                      { q.height }
                    </span>
                    { q.height < 720 ? null : (
                      <span className={css(style.quality.markSpan)}>HD</span>
                    ) }
                  </li>
                )) }
                  <li 
                    className={css(style.quality.listItem)}
                    onClick={this.onAutoQualityClick.bind(this)}
                  >
                    <span className={css(style.quality.nameSpan)}>
                      Auto
                    </span>
                  </li>
              </ul>
            </div>
          </div>
          <div className={css(style.controls.bottomControlsWrapper)}>
            <div className={css(style.slider.wrapper)}>
              <div ref='videoslider' className={css(style.slider.slider)}>
                <div 
                  className={css(style.slider.progress)}
                  style={{ width: `${this.state.videoProgress}%` }}
                />
                <div className={css(style.slider.buffer)}
                  style={{ width: `${this.state.videoBuffer}%` }}
                />
                <div className={css(
                  style.slider.pointer,
                  this.state.sliderClick ? style.slider.pointerClick : ''
                )}
                  style={{ left: `calc(${this.state.videoProgress}% - ${this.state.sliderClick ? 4 : 2}px)` }}
                />              
              </div>
            </div>
            <div className={css(style.controls.bottomControls)}>
              <div className={css(style.controls.bottomControlsSide)}>
              <a
                  href='#mute'
                  onClick={this.onPlayPauseClick.bind(this)}
                  className={css(style.controls.bottomControlsButton)}
                >
                  <i
                    className={`la la-${!this.state.isPlaying
                      ? 'play'
                      : 'pause'} `}
                    aria-hidden='true'
                    title='play/pause'
                  />
                </a>
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
              </div>
              <div className={css(style.controls.bottomControlsSide)}>
                <div className={css(style.controls.bottomControlsButton, style.controls.timerange)}>
                  <span>{Array.isArray(timeRange.currentTime) ? timeRange.currentTime.reduce((a, b) => `${a ? Array.isArray(a) ? a[0] : a : `00`}:${b[0]}`) : timeRange.currentTime}</span>
                  <span> / </span>
                  <span>{Array.isArray(timeRange.duration) ? timeRange.duration.reduce((a, b) => `${a[0]}:${b[0]}`) : timeRange.duration}</span>
                </div>
                <a
                  href='#gear'
                  onClick={this.onQualityGearClick.bind(this)}
                  className={css(style.controls.bottomControlsButton)}
                >
                  <i
                    className={`la la-gear ${css(style.controls.gearIcon)}`}
                    aria-hidden='true'
                    title='gear'
                  />
                  { quality.height < 720 ? null : (
                    <div className={css(style.controls.qualityMark)}>HD</div>
                  ) }
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
            </div>
          </div>
        </div>
      </figure>
    )
  }
}

// Mouse position relative to the document
// From http://www.quirksmode.org/js/events_properties.html
const mousePositionDocument = function(e) {
  if (!e) {
    e = window.event
  }
  
  const pos = { x: 0, y: 0 }

  if (e.pageX) {
		pos.x = e.pageX
		pos.y = e.pageY
	}
	else if (e.clientX || e.clientY) {
		pos.x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
		pos.y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
  }
  
	return pos
}

// Find out where an element is on the page
// From http://www.quirksmode.org/js/findpos.html
const findPos = function(obj) {
  const pos = { x: 0, y: 0 }

	if (obj.offsetParent) {
		do {
			pos.x += obj.offsetLeft
			pos.y += obj.offsetTop
		} while (obj = obj.offsetParent)
  }
  
	return pos
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
