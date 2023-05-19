import React, {ChangeEvent, useEffect} from 'react';
import s from './SbControl.module.css'
import {UniButton} from '../Button/UniButton';
import {Distype} from '../../App';

import store from '../../redux/redux-store';

type PropsType = {
    // controlMaxValue: (n: number) => void
    controlStartValue: (n: number) => void
    // setScore: (s: Distype) => void
    startValue: number
    maxValue: number
    disabledButton: boolean
    // setDisabledButton: (n: boolean) => void
}


export function SbControl(props: PropsType) {

    useEffect(() => {
        // console.log('max or min changed')

        localStorage.setItem('startValue', JSON.stringify(props.startValue));
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue));

        if (props.maxValue === 0) {
            // props.setDisabledButton(true)
            store.dispatch({ type: 'SET_DISABLED_BUTTON', disabled: true });
        } else {
            if (props.maxValue < props.startValue) {
                // props.setDisabledButton(true)
                store.dispatch({ type: 'SET_DISABLED_BUTTON', disabled: true });
            } else {
                // props.setDisabledButton(false)
                store.dispatch({ type: 'SET_DISABLED_BUTTON', disabled: false });
            }
        }
    }, [props.startValue, props.maxValue])


    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        store.dispatch({ type: 'SET_DISABLED', disabled: "disabled" });
        // props.setScore("disabled")
        // props.controlMaxValue(Number(e.currentTarget.value))
        store.dispatch({ type: 'SET_MAX_VALUE', value: Number(e.currentTarget.value) });
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        // props.setScore("disabled")
        store.dispatch({ type: 'SET_DISABLED', disabled: "disabled" });
        // props.controlStartValue(Number(e.currentTarget.value))
        store.dispatch({ type: 'SET_START_VALUE', value: Number(e.currentTarget.value) });
    }

    const setActive = () => {
        // props.setScore(test.ACTIVE)
        store.dispatch({ type: 'SET_DISABLED', disabled: 'active' });

    }

    const disabledStart = () => {
        if (props.maxValue === 0 && props.startValue === 0) {
            return ''
        }

        if (props.startValue < 0
            || props.maxValue < props.startValue
            || props.maxValue === props.startValue
        ) {
            // props.setDisabledButton(true)
            store.dispatch({ type: 'SET_DISABLED_BUTTON', disabled: true });
            // props.setScore('error')
            store.dispatch({ type: 'SET_DISABLED', disabled: "error" });
            return s.redInput
        } else {
            return ''
        }
    }

    const disabledMax = () => {
        if (props.maxValue === 0 && props.startValue === 0) {
            return ''
        }
        if (props.maxValue < props.startValue
            || props.maxValue <= 0
        ||  props.startValue < 0
            || props.maxValue === props.startValue
        ) {
            // props.setDisabledButton(true)
            store.dispatch({ type: 'SET_DISABLED_BUTTON', disabled: true });
            // props.setScore('error')
            store.dispatch({ type: 'SET_DISABLED', disabled: "error" });
            return s.redInput
        }
        return ''

        // if (props.startValue >= 0 || props.maxValue <= 0) {
        //     if (props.maxValue <= props.startValue || props.maxValue <= 0) {
        //         props.setDisabledButton(true)
        //         props.setScore('error')
        //         return s.redInput
        //     }
        // }

    }

    return (
        <div className={s.background}>
            <div className={s.scoreBoard}>
                <div className={s.textInput}>
                    max value:
                    <input type="number"
                           className={disabledMax()}
                           onChange={onChangeMax}
                           value={props.maxValue}
                    />
                </div>
                <div className={s.textInput}>
                    start value:
                    <input type="number"
                           className={disabledStart()}
                           onChange={onChangeStart}
                           value={props.startValue}
                    />
                </div>
            </div>
            <div className={s.buttonsPlace}>
                <UniButton name='set' onClick={setActive} disabled={props.disabledButton}/>
            </div>
        </div>
    )
}

