import React from 'react';
import s from './App.module.css'
import {Scoreboard} from './Components/Scoreboard/Scoreboard';
import {SbControl} from './Components/SbControll/SbControl';
import {useDispatch} from 'react-redux';
import { useAppSelector} from './redux/redux-store';
import {increaseSbValue, setScoreBoard} from './redux/counter-reducer';

export function App() {

    const state = useAppSelector(state => state.counter)
    const dispatch = useDispatch()

    const resetScoreBoard = () => {
        if (typeof (state.startValue) === 'number')
            dispatch(setScoreBoard(state.startValue))
    }

    const incScoreBoard = () => {
        dispatch(increaseSbValue(state.scoreBoard))
    }

    return (
        <div className={s.content}>
            <SbControl/>
            <Scoreboard
                        resetScoreBoard={resetScoreBoard}
                        incScoreBoard={incScoreBoard}
            />
        </div>

    )
}

export default App;
