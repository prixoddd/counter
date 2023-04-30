import React, {useState} from 'react';
import s from './App.module.css'
import {Scoreboard} from './Components/Scoreboard/Scoreboard';
import {SbControl} from './Components/SbControll/SbControl';

export type Distype = 'active' | 'disabled' | 'error'

export enum test {
    ACTIVE = 'active'
}

function App() {


        const LocalStartValue = Number(localStorage.getItem('startValue'));
        const LocalMaxValue = Number(localStorage.getItem('maxValue'))
        // LocalStartValue && setStartValue(LocalStartValue)
        // LocalMaxValue && setMaxValue(LocalMaxValue)



    const [startValue, setStartValue] = useState<number>(LocalStartValue ? LocalStartValue : 0)
    const [maxValue, setMaxValue] = useState<number>(LocalMaxValue ? LocalMaxValue : 0)
    const [disabledButton, setDisabledButton] = useState(true)

    const [scoreBoard, setScoreBoard] = useState<number>(0)
    const [disabled, setDisabled] = useState<Distype>('disabled')

    // console.log(startValue)
    // console.log(maxValue)


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
