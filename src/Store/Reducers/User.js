import { FETCH_USER_INFO } from '../Actions'

const initialState = {
  isLoading: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER_INFO:
    default:
      return {
        ...state
      }
  }
}
