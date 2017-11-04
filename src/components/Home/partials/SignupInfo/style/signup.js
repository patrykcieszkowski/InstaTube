export const signupStyle = {
  box: {
    paddingLeft: `25px`,
    paddingRight: `25px`
  },
  h3: {
    fontSize: `48px`,
    lineHeight: `46px`,
    fontWeight: `800`,
    color: '#3f295a'
  },
  list: {
    listStyleType: `none`,
    margin: 0,
    padding: 0,
    paddingTop: `15px`,
    paddingBottom: `45px`
  },
  listItem: {
    fontSize: `27px`,
    fontWeight: `100`,
    color: '#3f295a',
    ':before': {
      fontFamily: `LineAwesome`,
      content: "'\\f17b'",
      fontSize: `22px`,
      marginRight: `12px`
    }
  },
  signupButton: {
    display: `block`,
    width: `270px`,
    color: `white`,
    textAlign: `center`,
    background: `#e1306c`,
    borderRadius: `8px`,
    border: `none`,
    padding: `12px 0`,
    fontSize: `24px`,
    fontWeight: `600`,
  },
  loginSpan: {
    width: `270px`,
    margin: `10px 0`,
    display: `block`,
    textAlign: `center`,
    fontSize: `16px`,
    fontWeight: `100`,
    color: `#2a2a2a`
  },
  loginLink: {
    margin: `0 4px`,
    marginRight: 0,
    fontWeight: `600`,
    color: `#e1306c`
  }
}

export default signupStyle
