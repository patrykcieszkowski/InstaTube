const textSpan = {
  fontSize: `14px`,
  display: `block`,
  lineHeight: `28px`
}

export const historyStyle = {
  mainRow: {
    height: `100%`,
    maxHeight: `450px`
  },
  wrapper: {
    padding: `0 30px`,
    paddingBottom: `30px`
  },
  contentWrapper: {
    height: `100%`,
    padding: 0
  },
  box: {
    margin: 0,
    padding: 0,
    borderRadius: `5px`,
    ':hover': {
      background: `#f3f5f7`
    }
  },
  innerWrapper: {
    padding: `15px`
  },
  titleWrapper: {
    padding: `0 15px`
  },
  titleSpan: {
    ...textSpan,
    color: `#adadad`,
    fontWeight: `100`
  },
  valueSpan: {
    ...textSpan,
    fontWeight: `100`
  }
}

export default historyStyle
