export const buttonStyle = {
  button: {
    cursor: `pointer`,
    position: `relative`,
    flexShrink: 0,
    borderRadius: `50%`,
    border: `none`,
    height: `54px`,
    width: `54px`,
    margin: `15px 10px`,
    zIndex: 100,
    backgroundColor: `#e1306c`,
    '@media (min-width: 1200px)': {
      margin: `0 10px`
    }
  },
  icon: {
    color: `white`,
    fontSize: `26px`
  },
  userButtonLogged: {
    cursor: `pointer`,
    width: `80px`,
    borderRadius: `30px`,
    '@media (min-width: 1200px)': {
      width: `100%`,
      margin: 0,
      borderRadius: `30px`,
      padding: `0 15px`
    }
  },
  userButtonLoggedIcon: {
    padding: `0 5px`
  },
  userButtonLoggedDropIcon: {
    fontSize: `16px`
  }
}

export default buttonStyle
