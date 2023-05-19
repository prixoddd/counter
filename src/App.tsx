import React, {useState} from 'react';
import s from './App.module.css'
import {Scoreboard} from './Components/Scoreboard/Scoreboard';
import {SbControl} from './Components/SbControll/SbControl';
import store from './redux/redux-store';


export type Distype = 'active' | 'disabled' | 'error'

// export enum test {
//     ACTIVE = 'active'
// }

function App() {

    let state = store.getState().counter





    const LocalStartValue = Number(localStorage.getItem('startValue'));
    const LocalMaxValue = Number(localStorage.getItem('maxValue'))


    // const [startValue, setStartValue] = useState<number>(LocalStartValue ? LocalStartValue : 0)
    // const [maxValue, setMaxValue] = useState<number>(LocalMaxValue ? LocalMaxValue : 0)
    // const [disabledButton, setDisabledButton] = useState(true)
    //
    // const [scoreBoard, setScoreBoard] = useState<number>(0)
    // const [disabled, setDisabled] = useState<Distype>('disabled')


    const incScoreBoard = () => {
        // setScoreBoard(scoreBoard + 1)
        store.dispatch({ type: 'SET_SCORE_BOARD', value: state.scoreBoard + 1  });
    }

    const resetScoreBoard = () => {
        // setScoreBoard(startValue)
        store.dispatch({ type: 'SET_SCORE_BOARD', value: state.startValue });
    }

    const controlStartValue = (n: number) => {
        store.dispatch({ type: 'SET_SCORE_BOARD', value: n });
        store.dispatch({ type: 'SET_START_VALUE', value: n });
        // setScoreBoard(n)
        // setStartValue(n)
    }

    return (
        <div className={s.content}>
            <SbControl
                // controlMaxValue={setMaxValue}
                       controlStartValue={controlStartValue}
                       startValue={state.startValue}
                       maxValue={state.maxValue}
                       // setScore={setDisabled}
                       disabledButton={state.disabledButton}
                       // setDisabledButton={setDisabledButton}
            />
            <Scoreboard scoreBoard={state.scoreBoard}
                        resetScoreBoard={resetScoreBoard}
                        incScoreBoard={incScoreBoard}
                        maxValue={state.maxValue}
                        disabled={state.disabled}
            />
        </div>

    )
}

export default App;
