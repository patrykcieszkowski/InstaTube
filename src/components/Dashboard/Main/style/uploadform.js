export const uploadform = {
  wrapper: {
    maxHeight: `100%`,
    transition: `all 0.2s cubic-bezier(0.77, 0, 0.175, 1)`,
    overflow: `hidden`,
    '@media (max-width: 1199px)': {
      margin: `10px 0`
    }      
  },
  hide: {
    '@media (max-width: 1199px)': {
      maxHeight: `0px`,
      padding: 0
    }      
  }
}

export default uploadform