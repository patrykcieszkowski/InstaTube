import { StyleSheet } from 'aphrodite'

const style = {
  container: {
    position: `absolute`,
    height: `100%`,
    width: `100%`,
    top: `0px`,
    left: `0px`,
    margin: `0`,
    background: `rgba(255, 255, 255, 0.7)`,
    paddingTop: `170px`,
    '@media only screen and (min-width : 1200px)': {
      padding: `0 100px`,
      background: `none`,
      top: `auto`,
      left: `auto`,
      bottom: `auto`,
      right: `auto`,
      position: `relative`
    }
  },
  wrapper: {
    margin: 0,
    '@media only screen and (min-width : 1200px)': {
      marginBottom: `80px`
    }
  },
  box: {
    // padding: `8px 40px`,
    textAlign: `center`
  },
  lockIcon: {
    fontSize: `112px`,
    color: `#e1306c`,
    '@media only screen and (min-width : 1200px)': {
      color: `#eeeeee`
    }
  },
  spanLocked: {
    color: `#494949`,
    fontSize: `28px`,
    fontWeight: `100`,
    '@media only screen and (min-width : 1200px)': {
      fontSize: `36px`
    }
  },
  spanLockedColor: {
    color: `#e1306c`,
    '@media only screen and (min-width : 1200px)': {
      fontWeight: 600
    }
  },
  spanUnlock: {
    fontSize: `20px`,
    fontWeight: `100`,
    color: `black`,
    '@media only screen and (min-width : 1200px)': {
      fontSize: `24px`
    }
  },
  spanUnlockColor: {
    color: `#e1306c`
  },
  buttonUnlockBox: {
    paddingTop: `20px`,
    paddingLeft: `25px`,
    paddingRight: `25px`,
    '@media only screen and (min-width : 1200px)': {
      paddingLeft: `35px`,
      paddingRight: `35px`
    }
  },
  buttonUnlock: {
    cursor: `pointer`,
    display: `block`,
    padding: `8px 15px`,
    background: `#e1306c`,
    color: `white`,
    fontSize: `18px`,
    fontWeight: `600`,
    borderRadius: `5px`,
    '@media only screen and (min-width : 1200px)': {
      fontSize: `24px`
    }
  }
}

export default StyleSheet.create(style)
