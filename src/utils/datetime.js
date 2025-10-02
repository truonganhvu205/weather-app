const datetime = new Date()

// Date
const date = datetime.getDate() < 10 ? datetime.getDate().toString().padStart(2, '0') : datetime.getDate()
let month

switch(datetime.getMonth() + 1) {
    case 1:
        month = 'Jan'
        break
    case 2:
        month = 'Feb'
        break
    case 3:
        month = 'Mar'
        break
    case 4:
        month = 'Apr'
        break
    case 5:
        month = 'May'
        break
    case 6:
        month = 'Jun'
        break
    case 7:
        month = 'Jul'
        break
    case 8:
        month = 'Aug'
        break
    case 9:
        month = 'Sep'
        break
    case 10:
        month = 'Oct'
        break
    case 11:
        month = 'Nov'
        break
    case 12:
        month = 'Dec'
        break
}

// Time
const utc = datetime.getTime() + datetime.getTimezoneOffset() * 60000
const ict = new Date(utc + 7 * 3600000)

let hours = ict.getHours()
const minutes = ict.getMinutes().toString().padStart(2, '0')
const ampm = hours >= 12 ? 'PM' : 'AM'

hours = hours % 12
hours = hours ? hours.toString().padStart(2, '0') : 12

const datetimeNow = {
    dateNow: month + ' ' + date,
    timeNow: hours + ":" + minutes + ampm,
}

module.exports = datetimeNow
