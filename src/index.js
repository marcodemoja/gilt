if (process.env.NODE_ENV === 'development') {
  // to say to webpack to acknowledge the hot reloading
  if (module.hot) {
    module.hot.accept()
  }
}
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'
import AppContainer from './containers/AppContainer'

const finalStore = applyMiddleware(thunk)(createStore)
const store = finalStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'))
