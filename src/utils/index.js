const dateTimeStringToDate = date => new Date(date.replace(/-/g, '/'))

const secondsToTime = secs => {
  const sec_num = parseInt(secs, 10)
  const days = Math.floor(sec_num / (60 * 60 * 24))
  const hours = Math.floor(sec_num / (60 * 60)) % 24
  const minutes = Math.floor(sec_num / 60) % 60
  const seconds = sec_num % 60

  return [
    [days, ['d']],
    [hours, ['h']],
    [minutes, ['m']],
    [seconds, ['s', 'sec']]
  ]
    .map(v => (v[0] < 10 ? ['0' + v[0], v[1]] : v))
    .filter((v, i) => v[0] !== '00' || i > 2)
}

const isChildOf = (child, parent) => {
  if (child.parentNode === parent) {
    return true
  } else if (child.parentNode === null) {
    return false
  } else {
    return isChildOf(child.parentNode, parent)
  }
}

const parseHashParams = hash => {
  return hash.split('&').reduce((result, item) => {
    const parts = item.split('=')
    result[parts[0]] = parts[1]
    return result
  }, {})
}

export default {
  dateTimeStringToDate,
  secondsToTime,
  isChildOf,
  parseHashParams
}
