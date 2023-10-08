import React, {ChangeEvent, useEffect} from 'react';
import s from './SbControl.module.css'
import {UniButton} from '../Button/UniButton';
import {useAppSelector} from '../../redux/redux-store';
import {useDispatch} from 'react-redux';
import {setDisabled, setDisabledButton, setMaxValue, setScoreBoard, setStartValue} from '../../redux/counter-reducer';



export const SbControl = React.memo(() => {

    const startValue = useAppSelector(state => state.counter.startValue)
    const maxValue = useAppSelector(state => state.counter.maxValue)
    const disabledButton = useAppSelector(state => state.counter.disabledButton)

    const dispatch = useDispatch()

    useEffect(() => {


        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));

        if (maxValue === 0) {
            dispatch(setDisabledButton(true))

        } else {
            if (typeof (maxValue) === 'number' && typeof (startValue) === 'number') {
                if (maxValue < startValue) {

                    dispatch(setDisabledButton(true))
                    dispatch(setDisabled("error"))
                } else {
                    dispatch(setDisabledButton(false))

                }
            }

        }
    }, [startValue, maxValue])


    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDisabled("disabled"))
        dispatch(setMaxValue(Number(e.currentTarget.value)))
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDisabled("disabled"))
        dispatch(setScoreBoard(Number(e.currentTarget.value)))
        dispatch(setStartValue(Number(e.currentTarget.value)))
    }

    const setActive = () => {
        dispatch(setDisabled("active"))

    }

    useEffect(() => {
        if (startValue !== undefined && maxValue !== undefined) {
            if (maxValue <= 0 || startValue < 0 || maxValue <= startValue) {
                dispatch(setDisabledButton(true))
                dispatch(setDisabled("error"))
            }
        }
    }, [startValue, maxValue])

    const disabledStart = () => {
        if (typeof maxValue !== 'number' || typeof startValue !== 'number') {
            return '';
        }

        if (maxValue === 0 && startValue === 0) {
            return '';
        }

        if (startValue < 0 || maxValue <= startValue || maxValue === startValue) {
            return s.redInput;
        }

        return '';
    };

    const disabledMax = () => {
        if (typeof maxValue !== 'number' || typeof startValue !== 'number') {
            return '';
        }

        if (maxValue === 0 && startValue === 0) {
            return '';
        }

        if (maxValue < startValue || maxValue <= 0 || startValue < 0 || maxValue === startValue) {
            return s.redInput;
        }

        return '';
    };

    return (
        <div className={s.background}>
            <div className={s.scoreBoard}>
                <div className={s.textInput}>
                    Max value:
                    <input type="number"
                           className={disabledMax()}
                           onChange={onChangeMax}
                           value={maxValue}
                    />
                </div>
                <div className={s.textInput}>
                    Start value:
                    <input type="number"
                           className={disabledStart()}
                           onChange={onChangeStart}
                           value={startValue}
                    />
                </div>
            </div>
            <div className={s.buttonsPlace}>
                <UniButton name='Set' onClick={setActive} disabled={disabledButton}/>
            </div>
        </div>
    )
})

