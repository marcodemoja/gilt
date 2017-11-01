require('es6-promise').polyfill()
import fetch from 'isomorphic-fetch'

const baseUrl = 'http://api.giphy.com/v1/gifs/'
const apiKey = 'CE9Q6dWEpfeULGcwHnkKcLQ10z2pDjWv'

export const findGiphiesByQueryString = (type) => fetch(baseUrl + 'search?q=' + type + '&limit=300&api_key=' + apiKey + '')
