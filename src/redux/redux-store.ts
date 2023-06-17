import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';


type ReducersType = typeof rootReducer
export type AppStateType = ReturnType<ReducersType>

export const rootReducer = combineReducers({
    counter: counterReducer
})

let store = createStore(rootReducer);

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

export default store