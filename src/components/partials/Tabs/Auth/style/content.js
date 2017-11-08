const contentStyle = {
  wrapper: {
    padding: 0,
    '@media (min-width: 1200px)': {
      marginTop: `30px`
    },
    '@media (min-width: 1200px) and (max-width: 1399px)': {
      marginLeft: `60px`,
      marginRight: `0`
    },
    '@media (min-width: 1400px) and (max-width: 1599px)': {
      marginLeft: `60px`,
      marginRight: `0`
    },
    '@media (min-width: 1600px) and (max-width: 1899px)': {
      marginLeft: `60px`,
      marginRight: `0`
    },
    '@media (min-width: 1900px)': {
      marginLeft: `35px`,
      marginRight: `0`
    }
  },
  colWrapper: {
    '@media (min-width: 1200px) and (max-width: 1399px)': {
      // padding: 0,
      // marginLeft: `15px`,
      // marginRight: `15px`,
      padding: `0 15px`
    },
    '@media (min-width: 1400px) and (max-width: 1599px)': {
      // padding: 0,
      // marginLeft: `15px`,
      // marginRight: `15px`
      padding: `0 15px`
    },
    '@media (min-width: 1600px) and (max-width: 1899px)': {
      // padding: 0,
      // marginLeft: `35px`,
      // marginRight: `35px`
      padding: `0 15px`
    },
    '@media (min-width: 1900px)': {
      // padding: 0,
      // marginLeft: `35px`,
      // marginRight: `35px`
      padding: `0 35px`
    }
  }
}

export default contentStyle
