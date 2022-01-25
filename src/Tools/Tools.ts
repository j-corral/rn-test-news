import DeviceInfo from 'react-native-device-info'
import { Constants } from '@/Config/Constants'

const Tools = {
    getUDID: () => DeviceInfo.getUniqueId(),
    isEmail: (email: string) => {
        var re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    },
    isTel: (tel: string) => {
        var re = /^((\+)33|0)[1-9](\d{2}){4}$/
        return re.test(String(tel).toLowerCase())
    },
    isDate: (date: string) => {
        var re = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}$/ //note : this allows for dates such as 30/02/2012 or 30/03/4963
        return re.test(String(date).toLowerCase())
    },
    isMinLength: (
        text: string,
        minLength: number = 2,
        maxLength: number = 9999,
    ) => {
        return text.length >= minLength && text.length <= maxLength
    },
    isValidPass: (pass: string) => {
        var re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s:]).{8,25}$/
        return re.test(String(pass))
    },
    returnHTML: (html: string) => {
        let baseURL = Constants.BASE_URL
        let sources = html.match(/<img [^>]*src="[^"]*"[^>]*>/gm) || []
        sources = sources.map(x => x.replace(/.*src="([^"]*)".*/, '$1'))
        sources = sources.filter((a, b) => sources.indexOf(a) === b)

        sources.forEach(src => {
            let replace = src
            if (replace.indexOf('http') < 0) {
                let re = new RegExp(replace, 'g')
                html = html.replace(re, baseURL + src)
            }
        })

        return html
    },
}

export default Tools
