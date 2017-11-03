export const gridStyle = {
  wrapper: {
    height: `100%`
  },
  d1400: {
    display: `none`,
    '@media (min-width: 1400px)': {
      display: `flex`
    }
  },
  d1400None: {
    display: `flex`,
    '@media (min-width: 1400px)': {
      display: `none`
    }
  }
}

export default gridStyle
