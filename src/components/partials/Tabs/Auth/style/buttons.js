const buttonStyle = {
  button: {
    width: `100%`,
    padding: `10px`
  },
  login: {
    cursor: `pointer`,
    background: `white`,
    border: `2px solid #e6eaee`,
    color: `#868e96`,
    fontSize: `18px`,
    fontWeight: `600`,
    ':hover': {
      borderColor: `#e1306c`,
      background: 'white',
      color: '#e1306c'
    },
    // color: `#e6eaee`
    '@media (min-width: 1200px)': {
      paddingRight: `2px`,
      fontSize: `14px`
    }
  },
  signup: {
    cursor: `pointer`,
    background: `#e1306c`,
    color: `white`,
    fontSize: `18px`,
    fontWeight: `600`,
    transition: `all 0.1s cubic-bezier(0.47, 0, 0.745, 0.715)`,
    border: `3px solid #e1306c`,
    ':hover': {
      background: 'white',
      color: '#e1306c'
    },
    '@media (min-width: 1200px)': {
      fontSize: `14px`
    }
  },
  remind: {
    background: `#e1306c`,
    border: `2px solid #e1306c`,
    color: `white`,
    fontSize: `18px`,
    fontWeight: `600`,
    transition: `all 0.1s cubic-bezier(0.47, 0, 0.745, 0.715)`,
    ':hover': {
      color: '#e1306c',
      background: 'white'
    }
  },
  facebookWrapper: {
    '@media (min-width: 1200px)': {
      paddingRight: `2px`
    }
  },
  facebook: {
    cursor: `pointer`,
    background: `#3b5998`,
    border: `none`,
    '@media (min-width: 1200px)': {
      fontSize: `13px`
    }
  },
  instagram: {
    cursor: `pointer`,
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
