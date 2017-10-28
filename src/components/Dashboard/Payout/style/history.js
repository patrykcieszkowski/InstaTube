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
  titleSpan: {
    ...textSpan,
    color: `#adadad`,
    fontWeight: `100`
  },
  totalTitleSpan: {
    textAlign: `center`
  },
  totalDateSpan: {
    textAlign: `center`
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
