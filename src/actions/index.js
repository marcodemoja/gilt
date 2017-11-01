import { startApiRequest, failApiRequest, successApiRequest, showMiniPreview } from './creators'
import { fetchLatestGhipies } from '../endpoints'


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
