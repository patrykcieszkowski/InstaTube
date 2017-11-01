export const sliderStyle = {
  h4: {
    fontSize: `18px`,
    fontWeight: `100`,
    textAlign: `center`,
    margin: 0
  },
  wrapper: {
    padding: `0 8px`
  },
  slider: {
    appearance: `none`,
    width: `100%`,
    height: `4px`,
    borderRadius: `5px`,
    background: `#edf2f6`,
    '::-webkit-slider-thumb': {
      appearance: `none`,
      width: `18px`,
      height: `18px`,
      borderRadius: `50%`,
      background: `#e1306c`,
      cursor: `pointer`
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
