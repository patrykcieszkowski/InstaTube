export const viewStyleSpan = {
  fontSize: `16px`,
  fontWeight: `100`,
  display: `inline-block`,
  color: `#3f295a`,
  width: `100%`,
  ':before': {
    display: `inline-block`,
    content: "''",
    width: `16px`,
    height: `16px`,
    margin: `-2px 8px 2px 0`,
    verticalAlign: `middle`,
    textAlign: `center`,
    backgroundColor: `#e1306c`,
    color: `white`,
    borderRadius: `4px`,
    cursor: `pointer`
  },
  '@media (min-width: 1200px)': {
    fontSize: `18px`
  }
}

const viewsStyle = {
  box: {},
  inputWrapper: {
    paddingRight: `5px`,
    paddingLeft: `8px`
  },
  h4: {
    fontSize: `18px`,
    fontWeight: `100`,
    textAlign: `center`,
    margin: 0
  },
  input: {
    color: `white`,
    background: `#e1306c`,
    border: `3px solid #e1306c`,
    padding: `8px 15px`,
    fontSize: `14px`,
    fontWeight: `100`,
    '::-webkit-input-placeholder': {
      color: `white`
    },
    ':-moz-placeholder': {
      color: `white`
    },
    '::-moz-placeholder': {
      color: `white`
    },
    ':-ms-input-placeholder': {
      color: `white`
    }
  },
  active: {
    background: `white`,
    borderColor: `#e1306c`,
    color: `#e1306c`,
    '::-webkit-input-placeholder': {
      color: `#e1306c`
    },
    ':-moz-placeholder': {
      color: `#e1306c`
    },
    '::-moz-placeholder': {
      color: `#e1306c`
    },
    ':-ms-input-placeholder': {
      color: `#e1306c`
    }
  },
  checkboxWrapper: {
    paddingLeft: `5px`,
    '@media (min-width: 1200px)': {
      paddingLeft: `15px`
    }
  },
  checkbox: {
    display: `none`
  },
  label: {
    margin: `0`
  },
  span: {
    ...viewStyleSpan
  },
  spanChecked: {
    ...viewStyleSpan,
    ':before': {
      ...viewStyleSpan[':before'],
      fontFamily: `LineAwesome`,
      content: "'\\f17b'",
      fontSize: `12px`,
      color: `white`
    }
  }
}

export default viewsStyle
