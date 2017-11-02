import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducers'
import AppContainer from './containers/AppContainer'
import 'semantic-ui-css/semantic.min.css'

const finalStore = applyMiddleware(thunk)(createStore)
const store = finalStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'))
