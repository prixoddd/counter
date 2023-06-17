import React, {ChangeEvent, useEffect} from 'react';
import s from './SbControl.module.css'
import {UniButton} from '../Button/UniButton';
import {useAppSelector} from '../../redux/redux-store';
import {useDispatch} from 'react-redux';
import {setDisabled, setDisabledButton, setMaxValue} from '../../redux/counter-reducer';

type PropsType = {
    // controlMaxValue: (n: number) => void
    controlStartValue: (n: number) => void
    // setScore: (s: Distype) => void
    // startValue: number | undefined
    // maxValue: number | undefined
    // disabledButton: boolean
    // setDisabledButton: (n: boolean) => void
}


export const SbControl = React.memo( (props: PropsType) => {

    const state = useAppSelector(state => state.counter)
    const dispatch = useDispatch()




    useEffect(() => {

        console.log(state.maxValue)
        console.log(state.startValue)

        localStorage.setItem('startValue', JSON.stringify(state.startValue));
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue));

        if (state.maxValue === 0) {
            dispatch(setDisabledButton(true))

        } else {
            if (typeof (state.maxValue) === 'number' && typeof (state.startValue) === 'number') {
                if (state.maxValue < state.startValue) {
                    dispatch(setDisabledButton(true))

                } else {
                    dispatch(setDisabledButton(false))

                }
            }

        }
    }, [state.startValue, state.maxValue])


    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDisabled("disabled"))
        dispatch(setMaxValue(Number(e.currentTarget.value)))
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDisabled("disabled"))
        props.controlStartValue(Number(e.currentTarget.value))
    }

    const setActive = () => {
        dispatch(setDisabled("active"))

    }

    const disabledStart = () => {
        if (typeof (state.maxValue) === 'number' && typeof (state.startValue) === 'number') {
            if (state.maxValue === 0 && state.startValue === 0) {
                return ''
            }

            if (state.startValue < 0
                || state.maxValue < state.startValue
                || state.maxValue === state.startValue
            ) {
                dispatch(setDisabledButton(true))
                dispatch(setDisabled("error"))
                return s.redInput
            } else {
                return ''
            }
        }
    }

    const disabledMax = () => {
        if (typeof (state.maxValue) === 'number' && typeof (state.startValue) === 'number') {
            if (state.maxValue === 0 && state.startValue === 0) {
                return ''
            }
            if (state.maxValue < state.startValue
                || state.maxValue <= 0
                || state.startValue < 0
                || state.maxValue === state.startValue
            ) {
                dispatch(setDisabledButton(true))
                dispatch(setDisabled("error"))
                return s.redInput
            }
        }
        return ''

    }

    return (
        <div className={s.background}>
            <div className={s.scoreBoard}>
                <div className={s.textInput}>
                    max value:
                    <input type="number"
                           className={disabledMax()}
                           onChange={onChangeMax}
                           value={state.maxValue}
                    />
                </div>
                <div className={s.textInput}>
                    start value:
                    <input type="number"
                           className={disabledStart()}
                           onChange={onChangeStart}
                           value={state.startValue}
                    />
                </div>
            </div>
            <div className={s.buttonsPlace}>

                    <UniButton name='set' onClick={setActive} disabled={state.disabledButton}/>


            </div>
        </div>
    )
})

