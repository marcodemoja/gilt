import { API_REQUEST_PUPPIES, API_FAIL_PUPPIES, API_SUCCESS_PUPPIES, API_REQUEST_KITTIES, API_FAIL_KITTIES, API_SUCCESS_KITTIES, SWITCH_TAB, MINI_PREVIEW } from './types'
import { findGiphiesByQueryString } from '../endpoints'
import fetch from 'isomorphic-fetch'

/**
 * It creates the action
 * @param  {String}   type        The type of action
 * @param  {...Array} argNames    The arguments passed
 * @return {Function}             A function of the action
 */
export const makeActionCreator = (type, ...argNames) => {
  return function(...args) {
    let action = {
      type
    }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

/*
Actions
*/
export const requestApiPuppies = makeActionCreator(API_REQUEST_PUPPIES, 'params')

export const failApiPuppies = makeActionCreator(API_FAIL_PUPPIES, 'params')

export const successApiPuppies = makeActionCreator(API_SUCCESS_PUPPIES, 'data')

export const requestApiKitties = makeActionCreator(API_REQUEST_KITTIES, 'params')

export const failApiKitties = makeActionCreator(API_FAIL_KITTIES, 'params')

export const successApiKitties = makeActionCreator(API_SUCCESS_KITTIES, 'data')

export const showMiniPreview = makeActionCreator(MINI_PREVIEW, 'item')

export const switchTab = makeActionCreator(SWITCH_TAB, 'indexTab')


/*this is just a trick. by appending these actions to the window obj I can access to them dinamically into the fetchLatestGiphies actionCreator
* so that I can dispatch actions dinamically
*/
window.requestApiKitties = requestApiKitties
window.requestApiPuppies = requestApiPuppies
window.successApiKitties = successApiKitties
window.successApiPuppies = successApiPuppies
window.failApiPuppies = failApiPuppies
window.failApiKitties = failApiKitties

export const fetchLatestGiphies = (type) => {
  return (dispatch, getState) => {
    const currentState = getState()
    let propStateName = type.toLowerCase()
    dispatch(window['requestApi' + type](type))

    if (currentState.hasOwnProperty(propStateName)) {
      if (currentState[propStateName].length > 0) return dispatch(window['successApi' + type](currentState))

      return findGiphiesByQueryString(type).then((response) => {
        if (response.status >= 400) {
          throw new Error('bad response from server sending the following params: ' + type)
        } else {
          return response.json()
        }
      }).then((data) => {
        console.log(data.data)
        dispatch(window['successApi' + type](data.data))
      })

    } else {
      dispatch(window['failApi' + type]())
    }
  }
}
