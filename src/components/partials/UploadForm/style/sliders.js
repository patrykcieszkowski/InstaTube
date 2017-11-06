const sliderThumbStyle = {
  appearance: `none`,
  width: `18px`,
  height: `18px`,
  border: `none`,
  borderRadius: `50%`,
  background: `#e1306c`,
  cursor: `pointer`
}

const sliderTrackstyle = {
  width: `100%`,
  height: `4px`,
  borderRadius: `5px`,
  background: `#edf2f6`
}

export const sliderStyle = {
  h4: {
    fontSize: `18px`,
    fontWeight: `100`,
    textAlign: `center`,
    margin: 0,
    marginBottom: `5px`
  },
  wrapper: {
    padding: `0 8px`
  },
  slider: {
    appearance: `none`,
    '-webkit-appearance': `none`,
    width: `100%`,

    '::-webkit-slider-runnable-track': {
      ...sliderTrackstyle
    },
    '::-moz-range-track': {
      '-moz-appearance': `none`,
      ...sliderTrackstyle
    },
    '::-webkit-slider-thumb': {
      '-webkit-appearance': `none`,
      ...sliderThumbStyle
    },
    '::-moz-range-thumb': {
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
  },
  labelWrapper: {
    padding: `0`
  },
  label: {
    display: `block`,
    textAlign: `center`,
    fontWeight: `600`,
    fontSize: `18px`
  }
}

export default sliderStyle
