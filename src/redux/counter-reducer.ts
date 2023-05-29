const SET_START_VALUE = 'SET_START_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_DISABLED_BUTTON = 'SET_DISABLED_BUTTON'
const SET_SCORE_BOARD = 'SET_SCORE_BOARD'
const SET_DISABLED = 'SET_DISABLED'
const INCREASE_SB_VALUE = 'INCREASE_SB_VALUE'
//dsdasdasdasdafsfds

const initialState = {
    startValue: undefined,
    maxValue: undefined,
    disabledButton: true,
    scoreBoard: 0,
    disabled: 'disabled' as DisType
}

export type DisType = 'active' | 'disabled' | 'error'

type BossActionType = SetStartValueActionType
    | SetMaxValueActionType
    | SetDisabledButtonActionType
    | SetScoreBoardActionType
    | SetDisabledActionType
    | increaseSbValueActionType

export type InitialStateType = {
    startValue: number | undefined
    maxValue: number | undefined
    disabledButton: boolean
    scoreBoard: number
    disabled: DisType
}

export type StoreType = InitialStateType & BossActionType

// export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: BossActionType) => {
    switch (action.type) {
        case SET_START_VALUE:
            return {
                ...state,
                startValue: action.value
            }
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.value
            }
        case SET_DISABLED_BUTTON:
            return {
                ...state,
                disabledButton: action.disabled
            }
        case SET_SCORE_BOARD:
            return {
                ...state,
                scoreBoard: action.value
            }
        case SET_DISABLED:
            return {
                ...state,
                disabled: action.disabled
            }
        case INCREASE_SB_VALUE:
            return {
                ...state,
                scoreBoard: action.value + 1
            }
        default:
            return state
    }
}

export type SetStartValueActionType = ReturnType<typeof setStartValueAC>
export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
export type SetDisabledButtonActionType = ReturnType<typeof setDisabledButtonAC>
export type SetScoreBoardActionType = ReturnType<typeof setScoreBoardAC>
export type SetDisabledActionType = ReturnType<typeof setDisabledAC>
export type increaseSbValueActionType = ReturnType<typeof increaseSbValueAC>

export const setStartValueAC = (value: number) => ({type: SET_START_VALUE, value} as const)
export const setMaxValueAC = (value: number) => ({type: SET_MAX_VALUE, value} as const)
export const setDisabledButtonAC = (disabled: boolean) => ({type: SET_DISABLED_BUTTON, disabled} as const)
export const setScoreBoardAC = (value: number) => ({type: SET_SCORE_BOARD, value} as const)
export const setDisabledAC = (disabled: DisType) => ({type: SET_DISABLED, disabled} as const)
export const increaseSbValueAC = (value: number) => ({type: INCREASE_SB_VALUE, value} as const)