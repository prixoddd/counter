import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';


type ReducersType = typeof rootReducer
export type AppStateType = ReturnType<ReducersType>

export const rootReducer = combineReducers({
    counter: counterReducer
})

let store = createStore(rootReducer);
// const store = Redux.createStore(counterReducer)

// window.store = store;

export default store