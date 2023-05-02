import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import pdfReducer from './reducer'

const store = createStore(pdfReducer, composeWithDevTools(
    applyMiddleware(),
))

export default store