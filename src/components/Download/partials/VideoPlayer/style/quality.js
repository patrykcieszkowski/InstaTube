const qualityStyle = {
  hide: {
    display: `none`
  },
  box: {
    position: `absolute`,
    bottom: `10px`,
    right: `10px`,
    width: `100px`,
    background: `rgba(255, 255, 255, 0.2)`
  },
  header: {
    borderBottom: `1px solid rgba(255, 255, 255, 0.2)`,
    color: `white`,
    textAlign: `center`
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: `none`
  },
  listItem: {
    position: `relative`,
    margin: 0,
    padding: 0,

    ':hover': {
      background: `rgba(255, 255, 255, 0.5)`
    }
  },
  nameSpan: {
    position: `relative`,
    zIndex: 11,
    display: `block`,
    width: `100%`,
    textAlign: `center`,
    color: `white`
  },
  markSpan: {
    position: `absolute`,
    zIndex: 10,
    background: `#e12f6c`,
    top: `0px`,
    right: `0px`,
    color: `white`,
    fontSize: `12px`,
    padding: `0 5px`,
    margin: `3px`
  }
}

export default qualityStyle