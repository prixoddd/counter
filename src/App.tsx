import React, {useState} from 'react';
import s from './App.module.css'
import {Scoreboard} from './Components/Scoreboard/Scoreboard';
import {SbControl} from './Components/SbControll/SbControl';

export type Distype = 'active' | 'disabled' | 'error'


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    const [scoreBoard, setScoreBoard] = useState<number>(0)

    const [disabled, setDisabled] = useState<Distype>('disabled')


    const incScoreBoard = () => {
        setScoreBoard(scoreBoard + 1)
    }

    const resetScoreBoard = () => {
        setScoreBoard(startValue)
    }

    const controlMaxValue = (n:number) => {
       setMaxValue(n)

    }

    const controlStartValue = (n: number) => {
        setScoreBoard(n)
        setStartValue(n)
    }

    const setScore = (s:Distype) => {
        setDisabled(s)
    }

   // if(maxValue < startValue ) {
   //     setScore('error')
   // }

  return (
      <div className={s.content}>
        <SbControl controlMaxValue={controlMaxValue}
                   controlStartValue={controlStartValue}
                   setScore={setScore}
                   // checkForError={checkForError}
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
