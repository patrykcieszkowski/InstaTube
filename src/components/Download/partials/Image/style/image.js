export const imageStyle = {
  wrapper: {},
  box: {
    position: `relative`,
    '@media (min-width: 1200px)': {
      padding: 0
    }
  },
  enlargeButton: {
    cursor: `pointer`,
    position: `absolute`,
    display: `block`,
    top: `0`,
    right: `0`,
    height: `100px`,
    width: `100px`,
    lineHeight: `100px`,
    fontSize: `50px`,
    textAlign: `center`,
    color: `white`,
    textDecoration: `none`
  },
  image: {
    width: `100%`,
    borderRadius: `5px`,
    '@media print': {
      opacity: 0
    }
  },
  blur: {
    filter: `blur(3px)`
  }
}

export default imageStyle
