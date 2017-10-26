export const viewStyleSpan = {
  fontSize: `16px`,
  fontWeight: `100`,
  display: `inline-block`,
  color: `#3f295a`,
  width: `120px`,
  ':before': {
    display: `inline-block`,
    content: "''",
    width: `16px`,
    height: `16px`,
    margin: `-2px 8px 0 0`,
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
    paddingRight: `5px`
  },
  input: {
    background: `#edf2f6`,
    border: `3px solid #edf2f6`,
    padding: `8px 15px`,
    fontSize: `14px`,
    fontWeight: `100`
  },
  checkbox: {
    display: `none`
  },
  label: {
    color: `#f2f2f2`,
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
