export const headerStyle = {
  wrapper: {
    paddingBottom: `20px`,
    marginBottom: `20px`,
    borderBottom: `1px solid #e3e9f0`,
    '@media (min-width: 1200px)': {
      padding: `20px`,
      paddingTop: `100px`
    }
  },
  amountSpan: {
    display: `block`,
    fontSize: `48px`,
    fontWeight: `600`,
    textAlign: `center`,
    color: `#3f295a`
  },
  button: {
    cursor: `pointer`,
    display: `block`,
    width: `100%`,
    color: `white`,
    textAlign: `center`,
    background: `#e1306c`,
    borderRadius: `5px`,
    border: `none`,
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
  welcomeMessage: {
    color: `#3f295a`,
    display: `block`,
    fontSize: `24px`,
    fontWeight: `600`
  },
  withdrawMessage: {
    fontSize: `14px`,
    color: `#737679`
  }
}

export default headerStyle
