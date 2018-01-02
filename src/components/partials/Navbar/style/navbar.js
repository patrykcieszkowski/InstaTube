export const navbarStyle = {
  wrapper: {
    minHeight: `80px`,
    padding: `0`,
    '@media only screen and (min-width : 1200px)': {
      padding: `0 50px`,
      position: `absolute`,
      top: `0`,
      left: 0,
      width: `100%`,
      zIndex: 99
    }
  },
  background: {
    backgroundColor: `white`
  },
  backgroundBlock: {
    position: `absolute`,
    display: `block`,
    top: 0,
    left: 0,
    height: `130px`,
    width: `100%`,
    backgroundColor: `white`,
    '@media only screen and (min-width : 1200px)': {
      height: `80px`
    }
  },
  userButtonBox: {
    margin: `0px 10px`,
    position: `relative`
  },
  userNavbar: {
    '@media only screen and (min-width : 1200px)': {
      position: `absolute`,
      top: `13px`,
      right: `50px`
    }
  },
  transfer: {
    display: `none`,
    '@media only screen and (min-width : 1600px)': {
      display: `flex`
    }
  },
  transferSpan: {
    padding: `0 5px`,
    fontSize: `16px`,
    color: `#3f295a`
  },
  transferSpanAmount: {
    fontWeight: `800`
  },
  signOutLink: {
    padding: `0 5px`,
    display: `none`,
    '@media only screen and (min-width : 1600px)': {
      display: `flex`
    }
  },
  signoutIcon: {
    color: `#c4c5c6`,
    fontSize: `24px`
  }
}

export default navbarStyle
