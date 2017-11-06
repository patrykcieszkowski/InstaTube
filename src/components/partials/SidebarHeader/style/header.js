export const headerStyle = {
  box: {
    padding: `0 15px`
  },

  // sides padding
  boxPaddingSides: {
    paddingLeft: `15px`,
    paddingRight: `15px`,
    '@media only screen and (min-width : 1200px)': {}
  },
  boxMdPaddingSides: {
    paddingLeft: `25px`,
    paddingRight: `25px`,
    '@media only screen and (min-width : 1200px)': {
      paddingLeft: `55px`,
      paddingRight: `55px`
    }
  },
  // top padding
  boxMdPaddingTop: {
    paddingTop: `5px`
  },
  boxPaddingTop: {
    paddingTop: `20px`
  },

  // bottom padding
  boxMdPaddingBottom: {
    paddingBottom: `20px`
  },
  boxPaddingBottom: {
    paddingBottom: `20px`
  },

  sider: {
    borderRight: `1px solid #e8f1f8`,
    width: `300px`
  },
  h2: {
    fontSize: `36px`,
    fontWeight: `100`,
    color: `#3f295a`,
    margin: 0
  },
  closeIcon: {
    fontSize: `38px`,
    color: `#3f295a`
  }
}

export default headerStyle
