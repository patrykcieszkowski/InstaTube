const textSpan = {
  fontSize: `14px`,
  display: `block`,
  lineHeight: `28px`
}

export const historyStyle = {
  wrapper: {
    padding: `15px 30px`,
    height: `100%`
  },
  contentWrapper: {
    height: `100%`,
    padding: `0px`
  },
  innerWrapper: {
    padding: `15px`
  },
  box: {
    padding: `0`,
    margin: `0`,
    borderRadius: `5px`,
    ':hover': {
      background: `#f3f5f7`
    }
  },
  h4: {
    textTransform: `uppercase`,
    fontSize: `12px`,
    fontWeight: `100`,
    margin: `10px 0`
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
