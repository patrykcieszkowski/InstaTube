export const buttonStyle = {
  button: {
    position: `relative`,
    flexShrink: 0,
    borderRadius: `50%`,
    border: `none`,
    height: `54px`,
    width: `54px`,
    margin: `15px 10px`,
    zIndex: 100,
    backgroundColor: `#e1306c`
  },
  icon: {
    color: `white`,
    fontSize: `26px`
  },
  userButtonLogged: {
    width: `80px`,
    borderRadius: `30px`,
    '@media (min-width: 1200px)': {
      width: `100%`,
      margin: 0,
      borderRadius: `30px`,
      padding: `0 15px`
    }
  },
  userButtonLoggedSpan: {
    fontSize: `16px`,
    color: `white`,
    padding: `0 5px`
  },
  userButtonLoggedIcon: {
    padding: `0 5px`
  },
  userButtonLoggedDropIcon: {
    fontSize: `16px`
  }
}

export default buttonStyle
