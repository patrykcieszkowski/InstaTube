const sliderThumbStyle = {
  appearance: `none`,
  borderColor: `#e1306c`,
  borderStyle: `solid`,
  borderRadius: `50%`,
  marginTop: `-8px`,
  background: `#e2e6ea`,
  cursor: `pointer`
}

const sliderTrackstyle = {
  width: `100%`,
  height: `8px`,
  borderRadius: `5px`,
  background: `#e2e6ea`,
  border: `none`,
  cursor: `pointer`
}

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
    flexDirection: `column`,
    flexBasis: `80px`
  },
  bottomControls: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`
  },
  bottomControlsButton: {
    fontSize: `34px`,
    color: `white`,
    textDecoration: `none`,
    padding: `0 10px`
  },
  sliderWrapper: {
    margin: `20px 15px`
  },
  slider: {
    appearance: `none`,
    width: `100%`,
    borderRadius: `5px`,

    '::-webkit-slider-runnable-track': {
      ...sliderTrackstyle
    },
    '::-moz-range-track': {
      '-moz-appearance': `none`,
      ...sliderTrackstyle
    },
    '::-webkit-slider-thumb': {
      width: `24px`,
      height: `24px`,
      borderWidth: `6px`,
      '-webkit-appearance': `none`,
      ...sliderThumbStyle
    },
    '::-moz-range-thumb': {
      width: `18px`,
      height: `18px`,
      borderWidth: `6px`,
      '-moz-appearance': `none`,
      ...sliderThumbStyle
    },
    ':-moz-focusring': {
      outline: `1px solid white`,
      outlineOffset: `-1px`
    },
    ':focus': {
      outline: `none`
    }
  }
}

export default controlStyle
