import React from 'react';
import s from './Scoreboard.module.css'
import {UniButton} from '../Button/UniButton';
import {Distype} from '../../App';

type PropsType = {
    scoreBoard: number
    resetScoreBoard: () => void
    incScoreBoard: () => void
    maxValue: number
    disabled: Distype
}

export function Scoreboard(props: PropsType) {

    const scoreBoard = () => {
        if(props.disabled === 'disabled' || props.disabled === 'error') {
            return (
                <div className={s.scoreBoardDisabled}>
                    <div className={props.disabled === 'error' ? s.red : ''}>
                        {props.disabled === 'error' ? "Incorrect value!" : "enter values and press 'set'"}

                    </div>
                </div>
            )
        } else {
            return (
                <div className={s.scoreBoard}>
                <div className={props.scoreBoard === props.maxValue ? s.red : ""}>
                    {props.scoreBoard}
                </div>
                </div>
            )
        }
    }

    const incButtonDisabled = props.scoreBoard >= props.maxValue || (props.disabled === "disabled" || props.disabled === "error")
    const buttonDisabled = (props.disabled === "disabled" || props.disabled === "error")



  return (
      <div className={s.background}>
              {scoreBoard()}
        <div className={s.buttonsPlace}>
            <UniButton disabled={buttonDisabled} onClick={props.resetScoreBoard} name='Reset'/>
            <UniButton disabled={incButtonDisabled} onClick={props.incScoreBoard} name="Inc"/>
        </div>
      </div>
  )
}

