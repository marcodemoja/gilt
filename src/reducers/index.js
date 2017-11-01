const initState = {
  isLoading: true,
  puppies: [],
  kitties: [],
  miniPreview: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'API_REQUEST_START':
      return Object.assign({}, state, {
        ...action
      })
      break
    case 'API_REQUEST_SUCCESS':
      break
    case 'API_REQUEST_FAIL':
      break
  }
}
