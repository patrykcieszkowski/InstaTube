export const dropzoneBoxStyle = {
  box: {},
  row: {
    width: `100%`,
    margin: 0
  },
  wrapper: {
    cursor: `pointer`,
    background: `#edf2f6 url('/img/upload_bg.png')`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `95%`,
    borderRadius: `5px`,
    width: `100%`,
    height: `102px`
  },
  button: {
    cursor: `pointer`,
    borderRadius: `50%`,
    border: `none`,
    height: `54px`,
    width: `54px`,
    margin: `10px 5px`,
    flexShrink: 0,
    backgroundColor: `#e1306c`
  },
  buttonIcon: {
    color: `white`,
    fontSize: `26px`
  },
  titleSpan: {
    fontSize: `22px`,
    fontWeight: `600`,
    display: `block`,
    textAlign: `center`
  },
  fileTitleSpan: {
    fontSize: `22px`,
    fontWeight: `600`,
    display: `block`,
    whiteSpace: `nowrap`,
    overflow: `hidden`,
    textOverflow: `ellipsis`
  },
  descSpan: {
    fontSize: `12px`,
    width: `130px`,
    display: `block`,
    textAlign: `center`
  },
  boldSpan: {
    fontWeight: `600`
  }
}

export default dropzoneBoxStyle
