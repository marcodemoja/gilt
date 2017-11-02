const initState = {
  puppiesTabLoading: true,
  kittiesTabLoading: true,
  activeTab: 0,
  puppies: [],
  kitties: [],
  miniPreview: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'API_REQUEST_PUPPIES':
      return Object.assign({}, state, {
        puppiesTabLoading: true,
        puppies: state.puppies || []
      })
      break
    case 'API_SUCCESS_PUPPIES':
      return Object.assign({}, state, {
        puppiesTabLoading: false,
        puppies: action.data
      })
      break
    case 'API_FAIL_PUPPIES':
      return Object.assign({}, state, {
        puppiesTabLoading: false,
        puppies: state.puppies || []
      })
      break
    case 'API_REQUEST_KITTIES':
      return Object.assign({}, state, {
        kittiesTabLoading: true,
        kitties: state.kitties || []
      })
      break
    case 'API_SUCCESS_KITTIES':
      return Object.assign({}, state, {
        kittiesTabLoading: false,
        kitties: action.data
      })
      break
    case 'API_FAIL_KITTIES':
      return Object.assign({}, state, {
        kittiesTabLoading: false,
        kitties: state.puppies || []
      })
      break
    default:
      return state
      break
  }
}
