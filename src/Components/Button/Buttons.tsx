import React from 'react';
import s from './Buttons.module.css'


type PropsType = {
    incScoreBoard: () => void
    resetScoreBoard: () => void
    scoreBoard: number
}

export const Buttons = (props: PropsType) => {

    return (
        <div className={s.buttons}>
            <button className={props.scoreBoard >= 5 ? s.buttonDisabled : ''} onClick={props.incScoreBoard} disabled={props.scoreBoard >= 5}>Inc</button>
            <button className={s.button} onClick={props.resetScoreBoard} >Reset</button>
        </div>
    );
};

export default Buttons;