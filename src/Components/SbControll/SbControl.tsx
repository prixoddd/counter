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

    const startValue = useAppSelector(state => state.counter.startValue)
    const maxValue = useAppSelector(state => state.counter.maxValue)
    const disabled = useAppSelector(state => state.counter.disabled)
    const disabledButton = useAppSelector(state => state.counter.disabledButton)
    const scoreBoard = useAppSelector(state => state.counter.scoreBoard)

    const dispatch = useDispatch()

    // console.log(state.maxValue)
    // console.log(state.startValue)


    useEffect(() => {



        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));

        if (maxValue === 0) {
            dispatch(setDisabledButton(true))

        } else {
            if (typeof (maxValue) === 'number' && typeof (startValue) === 'number') {
                if (maxValue < startValue) {
                    dispatch(setDisabledButton(true))

                } else {
                    dispatch(setDisabledButton(false))

                }
            }

        }
    }, [])


    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDisabled("disabled"))
        dispatch(setMaxValue(Number(e.currentTarget.value)))
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        // dispatch(setDisabled("disabled"))
        props.controlStartValue(Number(e.currentTarget.value))
    }

    const setActive = () => {
        dispatch(setDisabled("active"))

    }

    const disabledStart = () => {
        if (typeof (maxValue) === 'number' && typeof (startValue) === 'number') {
            if (maxValue === 0 && startValue === 0) {
                return ''
            }

            if (startValue < 0
                || maxValue <startValue
                || maxValue === startValue
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
        if (typeof (maxValue) === 'number' && typeof (startValue) === 'number') {
            if (maxValue === 0 && startValue === 0) {
                return ''
            }
            if (maxValue < startValue
                || maxValue <= 0
                || startValue < 0
                || maxValue === startValue
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
                           className={''}
                           onChange={onChangeMax}
                           value={maxValue}
                    />
                </div>
                <div className={s.textInput}>
                    start value:
                    <input type="number"
                           className={''}
                           onChange={onChangeStart}
                           value={startValue}
                    />
                </div>
            </div>
            <div className={s.buttonsPlace}>

                    <UniButton name='set' onClick={setActive} disabled={disabledButton}/>


            </div>
        </div>
    )
})

