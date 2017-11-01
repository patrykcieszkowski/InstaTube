const videoStyle = {
  wrapper: {
    padding: 0,
    borderRadius: `5px`,
    // background: `pink`,
    overflow: `hidden`
  },
  video: {
    width: `100%`,
    borderRadius: `5px`,
    '::-webkit-media-controls': {
      display: `none`
    }
  }
}

export default videoStyle
