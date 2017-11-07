export const uploadedStyle = {
  wrapper: {
    padding: `10px`,
    paddingTop: `0px`
  },
  box: {
    borderRadius: `5px`,
    margin: `3px 0`,
    padding: `5px`,
    transition: `all 0.5s cubic-bezier(0.77, 0, 0.175, 1)`,
    '@media (max-width: 1199px)': {
      background: `white`
    },
    '@media (min-width: 1200px)': {
      height: `50px`,
      overflow: `hidden`
    }
  },
  boxActive: {
    background: `white`
  },
  boxHidden: {
    opacity: 0
  },
  titleBlock: {
    padding: `0 5px`
  },
  titleWrapper: {
    padding: 0,
    paddingLeft: `15px`,
    paddingRight: `35px`
  },
  titleBlockSpan: {
    display: `block`,
    fontSize: `12px`,
    fontWeight: `100`,
    color: `#8c9194`,
    textAlign: `center`
  },
  titleNameBlock: {
    textAlign: `left`
  },
  titleStatusBlock: {
    width: `44px`
  },
  labelSpan: {
    display: `block`,
    padding: `4px`,
    textAlign: 'right',
    textTransform: 'uppercase',
    fontSize: `12px`,
    fontWeight: `800`,
    color: `#3f295a`
  },
  valueBox: {
    padding: `0 5px`,
    height: `26px`,
    '@media (min-width: 1200px)': {
      height: `40px`
    }
  },
  valueSpan: {
    padding: `1px`,
    fontSize: `14px`,
    color: `#3f295a`,
    '@media (min-width: 1200px)': {
      height: `40px`
    }
  },
  copyBlock: {
    position: `absolute`,
    right: 0,
    transition: `all 0.5s cubic-bezier(0.77, 0, 0.175, 1)`,
    transform: `translate3d(100%, 0, 0)`,
    height: `25px`,
    background: `#edf2f6`,
    borderRadius: `5px`,
    padding: 0,
    opacity: 0,
    transition: `0.2s`,
    bottom: 0,
    '@media (min-width: 1200px)': {
      height: `40px`,
      bottom: `auto`,
      top: 0
    }
  },
  copyBlockActive: {
    transform: `none`,
    opacity: 1
  },
  copyBlockWrapper: {
    flex: 1,
    margin: 0,
    padding: `0 5px`
  },
  copyInputWrapper: {
    padding: 0
  },
  copyInput: {
    background: `none`,
    border: `none`,
    fontSize: `14px`,
    // width: `100%`,
    color: `#3f295a`,
    fontWeight: `600`,
    direction: `rtl`,
    width: `100%`,
    '@media (min-width: 1280px)': {
      direction: `ltr`
    }
  },
  actionIconBox: {
    padding: 0
  },
  actionDateToggle: {
    position: `absolute`,
    top: `0`,
    right: `0`,
    left: `0`,
    transition: `0.2s`
  },
  actionDateToggleActive: {
    top: `-40px`
  },
  valuePrice: {
    fontWeight: `100`
  },
  nameValue: {
    fontWeight: `600`,
    whiteSpace: `nowrap`,
    overflow: `hidden`,
    textOverflow: `ellipsis`
  },
  fatSpan: {
    fontWeight: `600`
  },
  earnValue: {
    color: `#7eca12`,
    fontWeight: `600`
  },
  statusCircle: {
    display: `block`,
    background: `#67d85b`,
    borderRadius: `50%`,
    width: `8px`,
    height: `8px`,
    margin: `8px`
  },
  statusCircleOnline: {
    background: `#7eca12`
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

export default uploadedStyle
