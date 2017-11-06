const none = {
  flexBasis: `0`,
  flexGrow: `1`,
  maxWidth: `100%`
}

const auto = {
  flex: `0 0 auto`,
  width: `auto`,
  maxWidth: none
}

const buildSizeClass = size => ({
  flex: `0 0 ${size / 12 * 100}%`,
  maxWidth: `${size / 12 * 100}%`
})

const wrapClassWithMedia = (a, b, size) => ({
  [`@media (min-width: ${a}px)${b ? ` and (max-width: ${b}px)` : ''}`]: {
    ...buildSizeClass(size)
  }
})

const buildSizeClassList = (a, b, size) => {
  const obj = {}
  for (let i = 0; i < 12; i++) {
    obj[`col-${size}-${i + 1}`] = wrapClassWithMedia(a, b, i + 1)
  }

  return obj
}

const sizeStyle = {
  'col-xxl': {
    '@media (min-width: 1400px)': {
      ...none
    }
  },
  'col-xxl-auto': {
    ...auto
  },
  ...buildSizeClassList(1400, 1599, `xxl`),
  'col-xxxl': {
    '@media (min-width: 1600px)': {
      ...none
    }
  },
  'col-xxxl-auto': {
    ...auto
  },
  ...buildSizeClassList(1600, 1799, `xxxl`),
  'col-xxxxl': {
    '@media (min-width: 1800px)': {
      ...none
    }
  },
  'col-xxxxl-auto': {
    ...auto
  },
  ...buildSizeClassList(1800, null, `xxxxl`)
}

export default sizeStyle
