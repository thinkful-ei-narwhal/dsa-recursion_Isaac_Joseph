const stringSplitter = (date, separator = '') => {
  separator = date[2]
  if (date[2] !== separator) return []
  if (date[2] === separator) {
    date = date.slice(0, 3)
  }

  let newDate = date.slice(3)

  return newDate
  return [date, ...stringSplitter(newDate, separator)]
}

console.log(stringSplitter('2020'))