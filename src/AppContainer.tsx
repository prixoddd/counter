import {connect} from 'react-redux';
import {
    DisType, increaseSbValue,
    InitialStateType,
    setDisabled,
    setDisabledButton,
    setMaxValue,
    setScoreBoard,
    setStartValue
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
    setStartValue: setStartValue,
    setMaxValue: setMaxValue,
    setDisabledButton: setDisabledButton,
    setScoreBoard: setScoreBoard,
    setDisabled: setDisabled,
    increaseSbValue: increaseSbValue
}


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer