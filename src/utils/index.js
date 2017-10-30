const secondsToTime = secs => {
  const sec_num = parseInt(secs, 10)
  const hours = Math.floor(sec_num / 3600) % 24
  const minutes = Math.floor(sec_num / 60) % 60
  const seconds = sec_num % 60

  return [[hours, ['h']], [minutes, ['m']], [seconds, ['s', 'sec']]]
    .map(v => (v[0] < 10 ? ['0' + v[0], v[1]] : v))
    .filter((v, i) => v[0] !== '00' || i > 1)
}

export default {
  secondsToTime
}
