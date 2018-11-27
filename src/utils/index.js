import * as moment from 'moment'


export const lastSatOfMonth = () => {
    const result = []
    const saturday = moment()
        .startOf('month')
        .day('Saturday')
    if (saturday.date() > 7) saturday.add(7, 'd')
    const month = saturday.month()
    while (month === saturday.month()) {
        const date = saturday.add(7, 'd')
        result.push(date.clone())
    }
    return result[2]
}
