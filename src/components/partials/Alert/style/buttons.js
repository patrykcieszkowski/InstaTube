export const buttonStyle = {
  wrapper: {
    width: `310px`
  },
  button: {
    width: `150px`,
    height: `45px`,
    borderRadius: `5px`,
    textAlign: `center`,
    border: `3px solid #edf2f6`,
    cursor: `pointer`
  },
  success: {
    color: `white`,
    background: `#e1306c`,
    borderColor: `#e1306c`,
    ':hover': {
      background: `white`,
      color: `#e1306c`,
    }
  },
  cancel: {
    color: `#989898`,
    ':hover': {
      background: `#edf2f6`
    }
  },
  span: {
    fontSize: `14px`,
    fontWeight: `600`
  }
}

export default buttonStyle