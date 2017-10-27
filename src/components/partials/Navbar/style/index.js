import { StyleSheet } from 'aphrodite'

const buttonStyle = {
  button: {
    borderRadius: `50%`,
    border: `none`,
    height: `54px`,
    width: `54px`,
    margin: `15px 10px`,
    zIndex: 100,
    backgroundColor: `#e1306c`
  },
  icon: {
    color: `white`,
    fontSize: `26px`
  }
}

const navCollapseStyle = {
  wrapper: {
    backgroundColor: `#f2f6f7`,
    ':after': {
      content: "' '",
      position: `absolute`,
      width: `100%`,
      zIndex: `-1`,
      boxShadow: `0px 4px 28px 1px rgba(0,0,0,0.75)`
    }
  },
  item: {
    textAlign: `center`,
    borderBottom: `1px solid #e4eaea`,
    color: `#3C2557`,
    padding: `5px 10px`,
    fontSize: `18px`
  },
  link: {
    color: `#3C2557`,
    fontWeight: 800
  },
  linkHighlight: {
    color: `#4d5bd8`
  }
}

export default {
  navbar: StyleSheet.create({ wrapper: { padding: `15px 0` } }),
  button: StyleSheet.create(buttonStyle),
  collapse: StyleSheet.create(navCollapseStyle)
}
