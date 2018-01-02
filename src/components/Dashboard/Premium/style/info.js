export const infoStyle = {
  wrapper: {
    padding: `0 30px`,
    height: `210px`
  },
  box: {
    height: `100%`,
    borderRadius: `5px`,
    border: `3px solid #f3f5f7`,
    padding: `20px 10px`,
    margin: `0 -12px`
  },
  colWrapper: {
    margin: `5px 0`
  },
  h4: {
    margin: `0`,
    display: `block`,
    textAlign: `center`,
    fontSize: `24`,
    fontWeight: `600`,
    color: `#4f5bd5`
  },
  desc: {
    display: `block`,
    textAlign: `center`,
    fontSize: `14px`,
    fontWeight: `100`,
    color: `#292931`
  },
  button: {
    cursor: `pointer`,
    width: `230px`,
    margin: `0 auto`,
    display: `block`,
    color: `white`,
    textAlign: `center`,
    background: `#e1306c`,
    borderRadius: `5px`,
    padding: `8px 0`,
    fontSize: `18px`,
    fontWeight: `600`,
    transition: `all 0.1s cubic-bezier(0.47, 0, 0.745, 0.715)`,
    border: `3px solid #e1306c`,
    ':hover': {
      background: 'white',
      color: '#e1306c'
    }
  },
  buttonMonthSpan: {
    fontSize: `14px`,
    fontWeight: `100`
  }
}

export default infoStyle
