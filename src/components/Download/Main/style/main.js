const mainStyle = {
  content: {
    margin: `0 -15px`,
    '@media (min-width: 1200px)': {
      paddingTop: `85px`
    }
  },
  overlay: {
    '@media (min-width: 1200px)': {
      position: `absolute`,
      zIndex: 999999998,
      top: `80px`,
      right: 0,
      left: 0,
      height: `calc(100% - 80px)`,
      background: `rgba(228,234,236, 0.88)`
    }
  }
}

export default mainStyle
