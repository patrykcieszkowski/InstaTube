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
      paddingRight: `2px`,
      fontSize: `14px`
    }
  },
  signup: {
    background: `#e1306c`,
    border: `2px solid #e1306c`,
    color: `white`,
    fontSize: `18px`,
    fontWeight: `600`,
    '@media (min-width: 1200px)': {
      fontSize: `14px`
    }
  },
  remind: {
    background: `#e1306c`,
    border: `2px solid #e1306c`,
    color: `white`,
    fontSize: `18px`,
    fontWeight: `600`
  },
  facebookWrapper: {
    '@media (min-width: 1200px)': {
      paddingRight: `2px`
    }
  },
  facebook: {
    background: `#3b5998`,
    border: `none`,
    '@media (min-width: 1200px)': {
      fontSize: `13px`
    }
  },
  instagramWrapper: {
    '@media (min-width: 1200px)': {
      paddingLeft: `2px`
    }
  },
  instagram: {
    backgroundColor: `#cd486b`,
    background: `radial-gradient(bottom, #fbad50, #e95950, #cd486b)`,
    border: `none`,
    '@media (min-width: 1200px)': {
      fontSize: `13px`,
      background: `linear-gradient(90deg, #e03560, #ae29aa)`
    }
  },
  icon: {
    fontSize: `22px`,
    marginRight: `5px`
  }
}

export default buttonStyle
