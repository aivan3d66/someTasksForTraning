import {Dispatch} from "redux"
import {loadState} from "../utils/localStorage";

type InitialStateType = typeof initialState

const INC_COUNTER = 'INC_COUNTER'
const SET_ERROR = 'SET_ERROR'
const SET_MESSAGE = 'SET_MESSAGE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_START_VALUE = 'SET_START_VALUE'
const GET_VALUES_FROM_LOCAL_STORAGE = 'GET_VALUES_FROM_LOCAL_STORAGE'

type IncCounterValueType = ReturnType<typeof incCounterValueAC>
type SetErrorType = ReturnType<typeof setError>
type SetMessageType = ReturnType<typeof setMessage>
type GetValuesFromLocalStorageType = ReturnType<typeof getValuesFromLocalStorageAC>
type SetMaxCounterValueType = ReturnType<typeof setMaxCounterValueAC>
type SetStartCounterValueAC = ReturnType<typeof setStartCounterValueAC>

type ActionType = IncCounterValueType | GetValuesFromLocalStorageType

const initialState = {
  startValue: 0,
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case INC_COUNTER: {
      return {
        ...state, startValue: state.startValue + 1
      }
    }

    case GET_VALUES_FROM_LOCAL_STORAGE: {
      return {
        ...state, startValue: action.value
      }
    }

    default:
      return state;
  }
}

export const incCounterValueAC = () => ({type: INC_COUNTER} as const)
export const getValuesFromLocalStorageAC = (value: number) => ({type: GET_VALUES_FROM_LOCAL_STORAGE, value} as const)
