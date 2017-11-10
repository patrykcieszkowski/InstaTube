const timerStyle = {
  wrapper: {
    position: `relative`,
    marginBottom: `30px`,
    zIndex: 100,
    '@media only screen and (min-width : 1200px)': {
      marginBottom: 0,
      paddingTop: `80px`,
      paddingRight: `20px`
    }
  },
  row: {
    height: `70px`,
    background: `#72488e`,
    left: `0px`,
    right: `0px`,
    margin: `0 -15px`,
    position: `relative`
  },
  timer: {
    position: `absolute`,
    top: `calc(50% - 50px)`,
    right: `calc(50% - 50px)`,
    '@media only screen and (min-width : 1200px)': {
      position: `relative`,
      top: `auto`,
      right: `auto`
    }
  }
}

export default timerStyle
