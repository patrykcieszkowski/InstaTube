const stateStyle = {
  col: {
    '@media (min-width: 1200px)': {
      padding: 0
    }
  },
  wrapper: {
    padding: 0
  },
  infoBox: {
    borderRadius: `5px`,
    width: `100%`,
    height: `122px`,
    margin: 0
  },
  success: {
    background: `#71bc29`
  },
  error: {
    background: `#f02e30`,
    marginBottom: `5px`
  },
  progress: {
    background: `#2196f3`
  },
  h4: {
    color: `white`,
    fontSize: `24px`,
    fontWeight: `600`,
    margin: 0,
    textAlign: `center`
    // '@media (min-width: 1200px)': {
    //   textAlign: `left`
    // }
  },
  iconWrapper: {
    width: `54px`
  },
  icon: {
    color: `white`,
    fontSize: `52px`
  },
  inputWrapper: {
    margin: `10px 0`
  },
  input: {
    background: `white`,
    width: `100%`,
    border: `2px solid #edf2f6`,
    borderRadius: `5px`,
    padding: `8px 15px`,
    fontSize: `14px`,
    fontWeight: `100`,
    color: `#3f295a`
  },
  buttonWrapper: {
    margin: `5px 0`
  },
  button: {
    cursor: `pointer`,
    background: `#e1306c`,
    border: `2px solid #e1306c`,
    color: `white`,
    fontSize: `18px`,
    fontWeight: `600`,
    width: `100%`,
    ':hover': {
      color: `#e1306c`,
      background: `white`,
    }
  },
  resetButton: {
    background: `#fdc741`,
    borderColor: `#fdc741`,
    ':hover': {
      color: `#fdc741`,
      background: `white`
    }
  }
}

export default stateStyle
