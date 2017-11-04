const textSpan = {
  fontSize: `14px`,
  display: `block`,
  lineHeight: `28px`
}

export const historyStyle = {
  mainRow: {
    height: `100%`
  },
  wrapper: {
    padding: `0 30px`,
    height: `calc(100% - 200px)`
  },
  contentWrapper: {
    height: `100%`
  },
  box: {
    margin: 0,
    padding: `10px 15px`,
    borderRadius: `5px`,
    ':hover': {
      background: `#f3f5f7`
    }
  },
  titleRowWrapper: {
    padding: `0 15px`
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
