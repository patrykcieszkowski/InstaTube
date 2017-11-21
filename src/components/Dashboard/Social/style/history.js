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
    transition: `opacity 0.5s cubic-bezier(0.77, 0, 0.175, 1)`,
    ':hover': {
      background: `#f3f5f7`
    }
  },
  boxHidden: {
    opacity: 0
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
  titleDateSpan: {
    textAlign: `center`
  },
  valueSpan: {
    ...textSpan,
    fontWeight: `100`
  },
  dateSpan: {
    ...textSpan,
    fontWeight: `100`,
    textAlign: `center`
  },
  actionIcon: {
    textDecoration: `none`,
    fontSize: `20px`,
    padding: `2px 4px`,
    paddingLeft: `2px`,
    color: `#3f295a`
  },
  actionIconTrash: {
    // color: `#ff2828`
  },
  actionIconExtend: {
    color: `#88d362`
  }
}

export default historyStyle
