import { API_REQUEST_START, API_REQUEST_FAIL, API_REQUEST_SUCCESS, MINI_PREVIEW } from './types'
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
export const startApiRequest = makeActionCreator(API_REQUEST_START, 'params')

export const failApiRequest = makeActionCreator(API_REQUEST_FAIL, 'params')

export const successApiRequest = makeActionCreator(API_REQUEST_SUCCESS, 'data')

export const showMiniPreview = makeActionCreator(MINI_PREVIEW, 'item')
