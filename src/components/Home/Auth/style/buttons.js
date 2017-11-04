const buttonStyle = {
  button: {
    width: `100%`,
    padding: `10px`
  },
  login: {
    background: `white`,
    border: `2px solid #e6eaee`,
    color: `#868e96`,
    fontSize: `18px`,
    fontWeight: `600`,
    // color: `#e6eaee`
    '@media (min-width: 1200px)': {
      fontSize: `12px`
    }
  },
  signup: {
    background: `#e1306c`,
    border: `2px solid #e1306c`,
    color: `white`,
    fontSize: `18px`,
    fontWeight: `500`
  },
  remind: {
    background: `#e1306c`,
    border: `2px solid #e1306c`,
    color: `white`,
    fontSize: `18px`,
    fontWeight: `500`
  },
  facebookWrapper: {
    paddingRight: `2px`
  },
  facebook: {
    background: `#3b5998`,
    border: `none`,
    '@media (min-width: 1280px)': {
      fontSize: `12px`
    }
  },
  instagramWrapper: {
    paddingLeft: `2px`
  },
  instagram: {
    backgroundColor: `#cd486b`,
    background: `radial-gradient(bottom, #fbad50, #e95950, #cd486b)`,
    border: `none`,
    '@media (min-width: 1280px)': {
      fontSize: `12px`
    }
  },
  icon: {
    fontSize: `22px`,
    marginRight: `5px`
  }
}

export default buttonStyle
