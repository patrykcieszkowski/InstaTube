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
    border: `none`,
    padding: `8px 10px`,
    fontSize: `18px`
  },
  row: {
    margin: `0 -8px`
  }
}

export default formStyle
