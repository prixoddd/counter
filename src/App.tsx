import React from 'react';
import s from './App.module.css'
import {Scoreboard} from './Components/Scoreboard/Scoreboard';
import {SbControl} from './Components/SbControll/SbControl';
import {useDispatch} from 'react-redux';
import { useAppSelector} from './redux/redux-store';
import {increaseSbValue, setScoreBoard, setStartValue} from './redux/counter-reducer';


export type Distype = 'active' | 'disabled' | 'error'

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


    const controlStartValue = (n: number) => {
        dispatch(setScoreBoard(n))
        dispatch(setStartValue(n))
    }

    return (
        <div className={s.content}>
            <SbControl
                // controlMaxValue={props.setMaxValue}
                controlStartValue={controlStartValue}
                // startValue={props.startValue}
                // maxValue={props.maxValue}
                // setScore={props.setDisabled}
                // disabledButton={props.disabledButton}
                // setDisabledButton={props.setDisabledButton}
            />
            <Scoreboard
                // scoreBoard={props.scoreBoard}
                        resetScoreBoard={resetScoreBoard}
                        incScoreBoard={incScoreBoard}
                //         maxValue={props.maxValue}
                //         disabled={props.disabled}
            />
        </div>

    )
}

export default App;
