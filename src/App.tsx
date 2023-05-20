import React from 'react';
import s from './App.module.css'
import {Scoreboard} from './Components/Scoreboard/Scoreboard';
import {SbControl} from './Components/SbControll/SbControl';
import {MyAppStateType} from './AppContainer';


export type Distype = 'active' | 'disabled' | 'error'

function App(props: MyAppStateType) {

    // const LocalStartValue = Number(localStorage.getItem('startValue'));
    // const LocalMaxValue = Number(localStorage.getItem('maxValue'))

    const incScoreBoard = () => {
props.setScoreBoard(props.scoreBoard + 1)
    }

    const resetScoreBoard = () => {
        props.setScoreBoard(props.startValue)

    }

    const controlStartValue = (n: number) => {
        props.setScoreBoard(n)
        props.setStartValue(n)
    }

    return (
        <div className={s.content}>
            <SbControl
                controlMaxValue={props.setMaxValue}
                       controlStartValue={controlStartValue}
                       startValue={props.startValue}
                       maxValue={props.maxValue}
                       setScore={props.setDisabled}
                       disabledButton={props.disabledButton}
                       setDisabledButton={props.setDisabledButton}
            />
            <Scoreboard scoreBoard={props.scoreBoard}
                        resetScoreBoard={resetScoreBoard}
                        incScoreBoard={incScoreBoard}
                        maxValue={props.maxValue}
                        disabled={props.disabled}
            />
        </div>

    )
}

export default App;
