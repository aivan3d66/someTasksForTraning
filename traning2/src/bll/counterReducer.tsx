type InitialStateType = typeof initialState

const INC_COUNTER = 'INC_COUNTER'
const GET_VALUES_FROM_LOCAL_STORAGE = 'GET_VALUES_FROM_LOCAL_STORAGE'

type IncCounterValueType = ReturnType<typeof incCounterValueAC>
type GetValuesFromLocalStorageType = ReturnType<typeof getValuesFromLocalStorageAC>

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
