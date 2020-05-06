import md5 from 'md5'

import privateKey from '../.secret'

export const publicKey = 'fb999626a634fc04a24a8db27a08a578'

export const timeStamp = new Date().getMilliseconds()

export const hash = md5(`${timeStamp}${privateKey}${publicKey}`)
