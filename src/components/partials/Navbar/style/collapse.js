export const collapseStyle = {
  wrapper: {
    backgroundColor: `#f2f6f7`,
    ':after': {
      content: "' '",
      position: `absolute`,
      width: `100%`,
      zIndex: `-1`,
      boxShadow: `0px 4px 28px 1px rgba(0,0,0,0.75)`
    }
  },
  userCollapseBox: {
    position: `absolute`,
    left: `-55px`,
    top: `55px`,
    width: `210px`,
    maxHeight: `0px`,
    overflow: `hidden`,
    borderRadius: `0 0 6px 6px`,
    boxShadow: `0px 8px 17px 0px rgba(0,0,0,0.15)`,
    transition: `all 0.2s cubic-bezier(0.77, 0, 0.175, 1)`
  },
  userCollapseBoxActive: {
    maxHeight: `300px`
  },
  userCollapseWrapper: {
    background: `#f2f6f7`,
    ':after': {
      display: `none`
    }
  },
  collapseList: {
    listStyleType: `none`,
    padding: 0,
    margin: 0
  },
  main: {
    '@media only screen and (min-width : 1200px)': {
      height: `80px`,
      display: `flex`,
      background: `none`,
      ':after': {
        display: `none`
      }
    }
  },
  mainList: {
    maxWidth: `500px`,
    width: `100%`,
    '@media only screen and (min-width : 1200px)': {
      zIndex: 99
    }
  },
  mainListItem: {
    '@media only screen and (min-width : 1200px)': {
      border: `none`
    }
  },
  item: {
    textAlign: `center`,
    borderBottom: `1px solid #e4eaea`,
    color: `#3C2557`,
    padding: `5px 10px`,
    fontSize: `18px`
  },
  link: {
    color: `#3C2557`,
    display: `block`,
    width: `100%`,
    textAlign: `center`,
    fontWeight: 600
  },
  linkHighlight: {
    color: `#4d5bd8`
  }
}

export default collapseStyle
