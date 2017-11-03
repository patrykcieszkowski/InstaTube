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
  main: {
    '@media only screen and (min-width : 992px)': {
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
      // marginRight: `285px`,
      marginLeft: `calc(33.33333% + 5px)`,
      zIndex: 99
    }
  },
  mainListItem: {
    '@media only screen and (min-width : 992px)': {
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
    fontWeight: 600
  },
  linkHighlight: {
    color: `#4d5bd8`
  }
}

export default collapseStyle