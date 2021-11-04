import dayjs from 'dayjs'

export function threeYearsAgo(date, format) {
  return dayjs(date).subtract(3, 'year').format(format)
}

export function dateToString(date, format) {
  return dayjs(date).format(format)
}

export function stringToDate(date) {
  console.log(dayjs(date).format())
  return dayjs(date).format()
}
