export const linksStyle = {
  box: {},
  wrapper: {
    padding: `0 15px`
  },
  instagramLinkWrapper: {
    paddingRight: `5px`,
    paddingLeft: `8px`
  },
  PPVLinkWrapper: {
    paddingRight: `8px`,
    paddingLeft: `5px`
  },
  link: {
    fontSize: `18px`,
    fontWeight: `600`,
    textAlign: `center`,
    display: `block`,
    padding: `8px 0`,
    background: `white`,
    border: `2px solid #e1306c`,
    borderRadius: `5px`,
    color: `#e1306c`,
    transition: `all 0.1s cubic-bezier(0.47, 0, 0.745, 0.715)`,
    ':hover': {
      color: 'white',
      background: '#e1306c'
    }
  },
  active: {
    color: 'white',
    background: '#e1306c'
  }
}

export default linksStyle
