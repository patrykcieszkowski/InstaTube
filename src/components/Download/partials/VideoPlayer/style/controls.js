export const controlStyle = {
  wrapper: {
    background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 12%, rgba(0,0,0, 0) 25%, rgba(0,0,0,0.25) 69%, rgba(0, 0, 0, 0.7) 91%)`,
    position: `absolute`,
    display: `flex`,
    flexDirection: `column`,
    width: `100%`,
    height: `100%`,
    top: 0,
    left: 0,
    opacity: 1,
    transition: `0.5s`,
    zIndex: 10
  },
  fullscreen: {
    zIndex: 2147483647
  },
  hideControls: {
    opacity: 0
  },
  playWrapper: {
    position: `relative`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    flex: 1,
    top: 0,
    left: 0
  },
  playButton: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    paddingTop: `40px`,
    textDecoration: `none`,
    width: `100px`,
    height: `100px`
  },
  playButtonIcon: {
    fontSize: `60px`,
    color: `white`,
    textShadow: `0px 0px 10px #000000`
  },
  bottomControlsWrapper: {
    display: `flex`,
    flexDirection: `column`
  },
  bottomControls: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`
  },
  bottomControlsSide: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    padding: `10px 5px`    
  },
  bottomControlsButton: {
    position: `relative`,
    fontSize: `24px`,
    color: `white`,
    textDecoration: `none`,
    padding: `0 5px`
  },
  timerange: {
    color: `white`,
    fontSize: `14px`
  },
  qualityMark: {
    position: `absolute`,
    zIndex: 10,
    background: `#e12f6c`,
    top: `0px`,
    right: `0px`,
    color: `white`,
    fontSize: `8px`,
    padding: `0 3px`,
    margin: `3px 0`
  },
  gearIcon: {
    position: `relative`,
    zIndex: 11
  }
}

export default controlStyle
