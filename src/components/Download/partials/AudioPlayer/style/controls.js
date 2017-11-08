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
  muteButton: {
    boxShadow: `0px 8px 17px 0px rgba(0,0,0,0.15)`,
    fontSize: `42px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    height: `60px`,
    width: `60px`,
    textDecoration: `none`,
    color: `white`,
    background: `#e1316c`,
    borderRadius: `5px`
  },
  sliderWrapper: {
    position: `absolute`,
    bottom: 0,
    left: 0,
    right: 0,
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
