export const navbarStyle = {
  wrapper: {
    padding: `0`,
    '@media only screen and (min-width : 992px)': {
      padding: `0 20px`,
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
    height: `85px`,
    width: `100%`,
    backgroundColor: `white`
  },
  userButtonBox: {
    margin: `15px 10px`,
    position: `relative`
  }
}

export default navbarStyle
