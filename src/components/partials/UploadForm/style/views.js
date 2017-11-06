export const viewStyleSpan = {
  fontSize: `18px`,
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
    background: `white`,
    border: `3px solid #edf2f6`,
    padding: `8px 15px`,
    fontSize: `14px`,
    fontWeight: `100`
  },
  active: {
    background: `#edf2f6`
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
