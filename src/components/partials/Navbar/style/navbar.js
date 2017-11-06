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
    height: `80px`,
    width: `100%`,
    backgroundColor: `white`
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
  }
}

export default navbarStyle
