export const uploadedStyle = {
  wrapper: {
    padding: `10px`,
    paddingTop: `0px`
  },
  box: {
    borderRadius: `5px`,
    margin: `3px 0`,
    padding: `5px`,
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
  titleBlockSpan: {
    display: `block`,
    fontSize: `12px`,
    fontWeight: `100`,
    color: `#8c9194`
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
    display: `flex`,
    alignItems: `center`,
    padding: `1px`,
    fontSize: `14px`,
    color: `#3f295a`,
    '@media (min-width: 1200px)': {
      justifyContent: `center`,
      height: `40px`
    }
  },
  copyBlock: {
    position: `absolute`,
    top: 0,
    right: `-300px`,
    height: `40px`,
    background: `#edf2f6`,
    borderRadius: `5px`,
    padding: 0,
    opacity: 0,
    transition: `0.2s`
  },
  copyBlockActive: {
    right: 0,
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
    fontWeight: `600`
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
  titleValue: {
    fontWeight: `600`
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
    background: `#b1b6ba`,
    borderRadius: `50%`,
    width: `10px`,
    height: `10px`,
    margin: `8px 2px`
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
    color: `#ff2828`
  }
}

export default uploadedStyle
