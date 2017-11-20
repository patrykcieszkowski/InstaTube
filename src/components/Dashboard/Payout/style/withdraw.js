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
    cursor: `pointer`,
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
    }
  },
  provisionSpan: {
    color: `#8c9194`,
    fontSize: `11px`,
    fontWeight: 100
  },
  totalSpan: {
    color: `#e1306c`,
    fontSize: `11px`,
    fontWeight: 100
  },
  totalSpanAmount: {
    fontWeight: 600
  }
}

export default withdrawStyle
