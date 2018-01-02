const sliderStyle = {
  wrapper: {
    width: `100%`,
    height: `4px`,
    padding: `0 10px`
  },
  slider: {
    background: `white`,
    width: `100%`,
    height: `100%`,
    position: `relative`,
    borderRadius: `2px`
  },
  progress: {
    position: `absolute`,
    zIndex: 100,
    top: 0,
    bottom: 0,
    left: 0,
    background: `#e82765`,
    borderRadius: `2px`
  },
  buffer: {
    position: `absolute`,
    zIndex: 99,
    top: 0,
    bottom: 0,
    left: 0,
    background: `#e82765`,
    opacity: `0.5`,
    borderRadius: `2px`    
  },
  pointer: {
    position: `absolute`,
    zIndex: 101,
    background: `#e82765`,
    display: `block`,
    top: `-2px`,
    width: `8px`,
    height: `8px`,
    borderRadius: `50%`
  },
  pointerClick: {
    top: `-4px`,
    width: `12px`,
    height: `12px`
  }
}

export default sliderStyle