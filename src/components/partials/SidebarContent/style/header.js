export const headerStyle = {
  closeIcon: {
    fontSize: `38px`,
    color: `#3f295a`,
    ':hover': {
      color: `#E1306A`
    }
  },
  closeButton: {
    cursor: `pointer`,
    position: `absolute`,
    zIndex: 101
  },
  lgCloseButton: {
    top: `30px`,
    right: `30px`,
    '@media (min-width: 1200px)': {
      top: `60px`,
      right: `60px`
    }
  },
  mdCloseButton: {
    top: `30px`,
    right: `30px`,
    '@media (min-width: 1200px)': {
      top: `20px`,
      right: `60px`
    }
  }
}

export default headerStyle
