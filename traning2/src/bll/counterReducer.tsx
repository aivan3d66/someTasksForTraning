type InitialStateType = typeof initialState

const initialState = {
  value: 0
}

export const counterReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return {...state}
}
