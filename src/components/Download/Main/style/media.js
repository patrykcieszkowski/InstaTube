export const mediaStyle = {
  wrapper: {
    margin: `10px -10px`,
    padding: `10px 0`,
    borderRadius: `5px`,
    background: `white`,
    boxShadow: `0px 8px 17px 0px rgba(0,0,0,0.15)`
  },
  box: {
    padding: `5px 5px`
  },
  imageWrapper: {
    width: `100%`,
    borderRadius: `5px`,
    overflow: `hidden`,
    margin: `0 0`
  },
  image: {
    width: `100%`
  },
  videoWrapper: {
    width: `100%`,
    borderRadius: `5px`,
    overflow: `hidden`,
    margin: `0 5px`
  },
  audioWrapper: {
    width: `100%`,
    borderRadius: `5px`,
    overflow: `hidden`,
    margin: `0 5px`
  },
  titleH2: {
    fontSize: `28px`,
    fontWeight: `600`,
    textAlign: `center`,
    color: `#3C2557`,
    '@media only screen and (min-width : 1200px)': {
      textAlign: `left`,
      padding: `0 5px`,
      fontSize: `24px`,
      fontWeight: `800`
    }
  },
  descRow: {
    margin: `-5px`
  },
  descHeaderWrapper: {
    borderBottom: `1px solid #e3e9f0`,
    padding: `15px 15px`
  },
  descH4: {
    margin: 0
  },
  descParagraphWrapper: {
    padding: `15px 15px`
  },
  descParagraph: {
    fontSize: `14px`
  },
  blur: {
    filter: `blur(3px)`
  }
}

export default mediaStyle
