const textSpan = {
  fontSize: `14px`,
  display: `block`,
  lineHeight: `28px`
}

export const historyStyle = {
  box: {
    padding: `10px 0`,
    borderRadius: `5px`,
    ':hover': {
      background: `#f3f5f7`
    }
  },
  h4: {
    textTransform: `uppercase`,
    fontSize: `12px`,
    fontWeight: `100`,
    margin: `10px 0`,
    color: `#adadad`
  },
  statusSpan: {
    ...textSpan,
    fontWeight: `600`
  },
  amountSpan: {
    ...textSpan,
    fontWeight: `100`,
    textAlign: `center`
  },
  dateSpan: {
    ...textSpan,
    fontWeight: `100`,
    textAlign: `center`
  }
}

export default historyStyle
