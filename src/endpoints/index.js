require('es6-promise').polyfill()
import fetch from 'isomorphic-fetch'

const baseUrl = 'http://api.giphy.com/v1/gifs/'
const apiKey = 'CE9Q6dWEpfeULGcwHnkKcLQ10z2pDjWv'

export const findGiphiesByQueryString = (params) => fetch(baseUrl + 'search?q=' + params.query + '&limit=' + params.limit + '&api_key=' + apiKey + '')
