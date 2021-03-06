const buttonStyle = {
  button: {
    cursor: `pointer`,
    width: `100%`,
    padding: `5px`,
    background: `#e1306c`,
    color: `white`,
    fontSize: `18px`,
    fontWeight: `500`,
    transition: `all 0.1s cubic-bezier(0.47, 0, 0.745, 0.715)`,
    border: `3px solid #e1306c`,
    ':hover': {
      background: 'white',
      color: '#e1306c'
    }
  },
  delete: {
    background: `white`,
    color: `#3f295a`,
    borderColor: `#3f295a`,
    ':hover': {
      background: '#3f295a',
      color: 'white'
    }
  }
}

export default buttonStyle
