const timerStyle = {
  sec: {
    display: `block`,
    fontSize: `18px`,
    fontWeight: `600`
  },
  wrapper: {
    position: `absolute`,
    textAlign: `center`,
    color: `white`,
    fontSize: `13px`,
    '@media only screen and (min-width : 1200px)': {
      color: `#dd316d`,
      fontSize: `18px`,
      fontWeight: `600`
    }
  },
  overlayWrapper: {
    color: `#dd316d`
  }
}

export default timerStyle
