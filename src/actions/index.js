import { API_REQUEST_START, API_REQUEST_FAIL, API_REQUEST_SUCCESS, MINI_PREVIEW } from './types'
import { fetchLatestGhipies } from '../endpoints'

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

export const switchTab = makeActionCreator(SWITCH_TAB, 'indexTab')

export const fetchLatestGhipies = (params) => {
  return (dispatch, getState) => {
    const currentState = getState()

    dispatch(startApiRequest(params))

    if (currentState.hasOwnProperty(params.query)) {
      if (currentState[params.query].length > 0) return dispatch(successApiRequest(currentState))

      return fetchLatestGhipies(params).then((response) => {
        if (response.status >= 400) {
          throw new Error('bad response from server sending the following params: ' + params)
        } else {
          return response.json()
        }
      }).then((data) => {
        dispatch(successApiRequest(data))
      })

    } else {
      dispatch(failApiRequest(params))
    }
  }
}
