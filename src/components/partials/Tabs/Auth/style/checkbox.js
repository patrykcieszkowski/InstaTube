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
  }
}

const checkboxStyle = {
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
  },
  link: {
    color: `#e12f6c`,
    fontWeight: 600
  }
}

export default checkboxStyle
