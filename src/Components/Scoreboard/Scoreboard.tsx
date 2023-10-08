import React from 'react';
import s from './Scoreboard.module.css'
import {UniButton} from '../Button/UniButton';
import {useAppSelector} from '../../redux/redux-store';
import {useDispatch} from 'react-redux';

type PropsType = {
    // scoreBoard: number
    resetScoreBoard: () => void
    incScoreBoard: () => void
    // maxValue: number | undefined
    // disabled: Distype
}

export const Scoreboard = React.memo((props: PropsType) => {

    const state = useAppSelector(state => state.counter)



    const scoreBoard = () => {
        if (state.disabled === 'disabled' || state.disabled === 'error') {
            return (
                <div className={s.scoreBoardDisabled}>
                    <div className={state.disabled === 'error' ? s.red : ''}>
                        {state.disabled === 'error' ? "Incorrect value!" : "Enter values and press 'Set'"}

                    </div>
                </div>
            )
        } else {
            return (
                <div className={s.scoreBoard}>
                    <div className={state.scoreBoard === state.maxValue ? s.red : ""}>
                        {state.scoreBoard}
                    </div>
                </div>
            )
        }
    }

    const incButtonDisabled = state.maxValue !== undefined && state.scoreBoard >= state.maxValue || (state.disabled === "disabled" || state.disabled === "error")
    const buttonDisabled = state.disabled === "disabled" || state.disabled === "error"

    return (
        <div className={s.background}>
            {scoreBoard()}
            <div className={s.buttonsPlace}>
                <UniButton disabled={buttonDisabled} onClick={props.resetScoreBoard} name='Res'/>
                <UniButton disabled={incButtonDisabled} onClick={props.incScoreBoard} name="Inc"/>
            </div>
        </div>
    )
})

