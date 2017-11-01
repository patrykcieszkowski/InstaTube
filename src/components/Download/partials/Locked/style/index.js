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
    zIndex: `50`,
    paddingTop: `170px`
  },
  wrapper: {
    margin: 0
  },
  box: {
    padding: `8px 40px`,
    textAlign: `center`
  },
  lockIcon: {
    fontSize: `112px`,
    color: `#e1306c`
  },
  spanLocked: {
    fontSize: `28px`,
    fontWeight: `100`
  },
  spanLockedColor: {
    color: `#e1306c`
  },
  spanUnlock: {
    fontSize: `20px`,
    fontWeight: `100`
  },
  spanUnlockColor: {
    color: `#e1306c`
  },
  buttonUnlockBox: {
    paddingLeft: `25px`,
    paddingRight: `25px`
  },
  buttonUnlock: {
    display: `block`,
    padding: `8px 15px`,
    background: `#e1306c`,
    color: `white`,
    fontSize: `18px`,
    fontWeight: `600`,
    borderRadius: `5px`
  }
}

export default StyleSheet.create(style)
