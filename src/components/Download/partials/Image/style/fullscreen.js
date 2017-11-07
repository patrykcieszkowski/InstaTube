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
    left: `calc(50% - 50px)`,
    '@media (min-width: 1200px)': {
      top: `40px`,
      left: `40px`
    }      
  },
  closeButton: {
    cursor: `pointer`,
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
    '@media (min-width: 1200px)': {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: `100%`,
      height: `100%`,
      padding: `60px`
    }      
  },
  closeIcon: {
    '@media (min-width: 1200px)': {
      position: `absolute`,
      top: `60px`,
      right: `60px`
    }      
  }
}

export default fullscreenStyle
