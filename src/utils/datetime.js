const datetime = new Date()

const utc = now.getTime() + now.getTimezoneOffset() * 60000
const ict = new Date(utc + 7 * 3600000)

let hours = ict.getHours()
const minutes = ict.getMinutes().toString().padStart(2, '0')
const ampm = hours >= 12 ? 'PM' : 'AM'

hours = hours % 12
hours = hours ? hours.toString().padStart(2, '0') : 12
