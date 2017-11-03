const active = {
  padding: `20px`,
  width: `calc(100% - 15px)`,
}

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
    transition: `1s`,
    marginTop: `95px`
  },

  stickToTop: {
    top: `0px`,
    paddingTop: `95px`,
    marginTop: `0`
  },
  'xlg-stickToTop': {
    '@media only screen and (min-width : 1200px)': {
      marginTop: `0`,
      top: `0px`,
      paddingTop: `105px`
    }
  },
  lgActive: {
    ...active,
    '@media only screen and (min-width : 1600px)': {
      width: `calc(100% - 510px)`
    },
    '@media only screen and (min-width : 1200px) and (max-width : 1599px)': {
      width: `calc(100% - 460px)`
    },
  },
  mdActive: {
    ...active,
    '@media only screen and (min-width : 1200px)': {
      width: `630px`
    }
  },
  smActive: {
    ...active,
    '@media only screen and (min-width : 1200px)': {
      width: `600px`
    }
  },
  fullHeight: {
    height: `100%`
  }
}

export default mainStyle
