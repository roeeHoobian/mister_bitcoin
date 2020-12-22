import {createStore, applyMiddleware, compose} from 'redux'
import  {contactReducer} from './reducers/contactReducers'
import thunk from 'redux-thunk'

export const store = createStore(contactReducer, compose(applyMiddleware(thunk)))