import {connect} from 'react-redux';
import {
    DisType, increaseSbValueAC,
    InitialStateType,
    setDisabledAC,
    setDisabledButtonAC,
    setMaxValueAC,
    setScoreBoardAC,
    setStartValueAC
} from './redux/counter-reducer';
import App from './App';
import {AppStateType} from './redux/redux-store';

export type MyAppStateType = InitialStateType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setDisabledButton: (disabled: boolean) => void
    setScoreBoard: (value: number) => void
    setDisabled: (disabled: DisType) => void
    increaseSbValue: (value: number) => void

}

const mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
        disabledButton: state.counter.disabledButton,
        scoreBoard: state.counter.scoreBoard,
        disabled: state.counter.disabled
    }
}

const mapDispatchToProps = {
    setStartValue: setStartValueAC,
    setMaxValue: setMaxValueAC,
    setDisabledButton: setDisabledButtonAC,
    setScoreBoard: setScoreBoardAC,
    setDisabled: setDisabledAC,
    increaseSbValue: increaseSbValueAC
}


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer