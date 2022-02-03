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

type ActionType =
  IncCounterValueType
  | GetValuesFromLocalStorageType
  | SetMaxCounterValueType
  | SetStartCounterValueAC
  | SetErrorType
  | SetMessageType

const initialState = {
  value: 0,
  maxValue: 0,
  error: false,
  message: '',
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case INC_COUNTER: {
      return {
        ...state, value: state.value + 1
      }
    }

    case SET_START_VALUE: {
      return {
        ...state, value: action.startValue
      }
    }

    case SET_MAX_VALUE: {
      return {
        ...state, maxValue: action.maxValue
      }
    }

    case GET_VALUES_FROM_LOCAL_STORAGE: {
      return {
        ...state, value: action.value
      }
    }

    case SET_ERROR: {
      return {
        ...state, error: action.value
      }
    }

    case SET_MESSAGE: {
      return {
        ...state, message: action.message
      }
    }

    default:
      return state;
  }
}

export const incCounterValueAC = () => ({type: INC_COUNTER} as const);
export const setError = (value: boolean) => ({type: SET_ERROR, value} as const);
export const setMessage = (message: string) => ({type: SET_MESSAGE, message} as const);
export const setMaxCounterValueAC = (maxValue: number) => ({type: SET_MAX_VALUE, maxValue} as const);
export const setStartCounterValueAC = (startValue: number) => ({type: SET_START_VALUE, startValue} as const);
export const getValuesFromLocalStorageAC = (value: number) => ({type: GET_VALUES_FROM_LOCAL_STORAGE, value} as const);


export const getValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
  let value = loadState().counter.value
  dispatch(getValuesFromLocalStorageAC(value));
}

