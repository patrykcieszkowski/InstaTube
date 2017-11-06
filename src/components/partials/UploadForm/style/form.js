export const formStyle = {
  form: {
    background: `white`,
    borderRadius: `5px`,
    padding: `8px`,
    boxShadow: `0px 8px 17px 0px rgba(0,0,0,0.15)`,
    width: `100%`,
    '@media (min-width: 992px)': {
      width: `420px`
    },
    '@media (min-width: 1600px)': {
      width: `470px`
    }
  },
  group: {
    marginBottom: `10px`
  },
  submitButton: {
    display: `block`,
    width: `100%`,
    background: `#e1306c`,
    padding: `8px 10px`,
    fontSize: `18px`,
    transition: `all 0.1s cubic-bezier(0.47, 0, 0.745, 0.715)`,
    border: `3px solid #e1306c`,
    ':hover': {
      background: 'white',
      color: '#e1306c'
    }
  },
  row: {
    margin: `0 -8px`
  }
}

export default formStyle
