export const fullscreenStyle = {
  wrapper: {
    position: `fixed`,
    background: `rgba(0,0,0,0.7)`,
    margin: 0,
    zIndex: 99999,
    top: 0,
    left: 0,
    width: `100%`,
    height: `100%`,
    transition: `0.2s`,
    opacity: 0
  },
  show: {
    opacity: 1
  },
  displayNone: {
    display: `none`
  },
  box: {
    position: `relative`,
    padding: 0,
    margin: 0
  },
  timer: {
    position: `absolute`,
    top: `-50px`,
    left: `calc(50% - 50px)`
  },
  closeButton: {
    position: `absolute`,
    display: `block`,
    bottom: `-50px`,
    left: `calc(50% - 50px)`,
    height: `100px`,
    width: `100px`,
    lineHeight: `100px`,
    fontSize: `50px`,
    textAlign: `center`,
    color: `white`,
    textDecoration: `none`,

  }
}

export default fullscreenStyle
