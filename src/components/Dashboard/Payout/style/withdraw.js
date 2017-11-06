const withdrawStyle = {
  wrapper: {
    padding: `0 60px`
  },
  amountSpan: {
    display: `block`,
    textAlign: `center`,
    color: `#72488e`,
    fontSize: `38px`,
    fontWeight: `600`
  },
  buttonWrapper: {
    padding: `10px 15px`
  },
  button: {
    display: `block`,
    color: `white`,
    textAlign: `center`,
    background: `#e1306c`,
    borderRadius: `5px`,
    padding: `8px 0`,
    fontSize: `19px`,
    fontWeight: `600`,
    transition: `all 0.1s cubic-bezier(0.47, 0, 0.745, 0.715)`,
    border: `3px solid #e1306c`,
    ':hover': {
      background: 'white',
      color: '#e1306c'
    },
  }
}

export default withdrawStyle
