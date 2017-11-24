export const mainStyle = {
  container: {
    background: 'white',
    position: 'fixed',
    padding: `0`,
    boxShadow: `0px 0px 17px 0px rgba(0,0,0,0.15)`,
    top: `10px`,
    width: `0`,
    bottom: `0`,
    right: `0`,
    transition: `all 0.5s cubic-bezier(0.77, 0, 0.175, 1)`,
    transform: `translate3d(100%, 0, 0)`,
    marginTop: `130px`,
    '@media only screen and (min-width : 1200px)': {
      marginTop: `80px`
    }
  },
  stickToTop: {
    top: `0px`,
    paddingTop: `100px`,
    marginTop: `0`
  },
  'xlg-stickToTop': {
    '@media only screen and (min-width : 1200px)': {
      marginTop: `0`,
      top: `0px`,
      paddingTop: `80px`
    }
  },
  fullHeight: {
    height: `calc(100% - 80px)`,
    '@media only screen and (min-width : 1200px)': {
      height: `100%`
    }
  },
  zIndex: {
    zIndex: 999999999
  },
  active: {
    // transform: translate3d(300px, 0, 0)
    transform: `none !important`
  },
  xlSize: {
    width: `calc(100% - 20px)`,
    '@media only screen and (min-width : 1600px)': {
      width: `calc(100% - 530px)`
    },
    '@media only screen and (min-width : 1200px) and (max-width : 1599px)': {
      width: `calc(100% - 480px)`
    }
  },
  lgSize: {
    width: `calc(100% - 20px)`,

    '@media only screen and (min-width : 1600px) ': {
      width: `calc(58%)`
    },
    '@media only screen and (min-width : 1800px)': {
      width: `calc(57% + 50px)`
    },
    '@media only screen and (min-width : 1900px)': {
      width: `calc(56% + 50px)`
    }
  },
  mdSize: {
    width: `calc(100% - 30px)`,
    '@media only screen and (min-width : 1200px)': {
      width: `630px`
    }
  },
  smSize: {
    width: `calc(100% - 20px)`,
    '@media only screen and (min-width : 1200px)': {
      width: `530px`
    }
  }
}

export default mainStyle
