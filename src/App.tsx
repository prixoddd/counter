import React, {useEffect, useState} from 'react';
import s from './App.module.css'
import {Scoreboard} from './Components/Scoreboard/Scoreboard';
import {SbControl} from './Components/SbControll/SbControl';

export type Distype = 'active' | 'disabled' | 'error'

export enum test {
    ACTIVE = 'active'
}

function App() {



    const [startValue, setStartValue] = useState<any>('')
    const [maxValue, setMaxValue] = useState<any>('')
    const [disabledButton, setDisabledButton] = useState(true)

    const [scoreBoard, setScoreBoard] = useState<number>(0)
    const [disabled, setDisabled] = useState<Distype>('disabled')
useEffect(() => {
    const LocalStartValue = localStorage.getItem('startValue');
    const LocalMaxValue = localStorage.getItem('maxValue');
    LocalStartValue && setStartValue(LocalStartValue)
    LocalMaxValue && setMaxValue(LocalMaxValue)

}, [])

    const incScoreBoard = () => {
        setScoreBoard(scoreBoard + 1)
    }

    const resetScoreBoard = () => {
        setScoreBoard(startValue)
    }

    const controlStartValue = (n: number) => {
        setScoreBoard(n)
        setStartValue(n)
    }

    return (
        <div className={s.content}>
            <SbControl controlMaxValue={setMaxValue}
                       controlStartValue={controlStartValue}
                       startValue={startValue}
                       maxValue={maxValue}
                       setScore={setDisabled}
                       disabledButton={disabledButton}
                       setDisabledButton={setDisabledButton}
            />
            <Scoreboard scoreBoard={scoreBoard}
                        resetScoreBoard={resetScoreBoard}
                        incScoreBoard={incScoreBoard}
                        maxValue={maxValue}
                        disabled={disabled}
            />
        </div>

    )
}

export default App;
