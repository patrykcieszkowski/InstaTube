export const progressStyle = {
  wrapper: {
    width: `100%`,
    margin: `5px 0`
  },
  block: {
    border: `2px solid #e1306c`,
    borderRadius: `5px`,
    height: `41px`,
    overflow: `hidden`,
    padding: 0
  },
  bar: {
    background: `#e1306c`,
    height: `100%`,
    float: `left`,
    transition: `width 0.2s`
  },
  progressSpan: {
    color: `white`,
    textShadow: `0px 4px 17px rgba(0,0,0,0.15)`,
    position: `absolute`,
    top: 0,
    left: 0,
    bottom: 0,
    lineHeight: `37px`,
    width: `100%`,
    textAlign: `center`,
  }
}

export default progressStyle