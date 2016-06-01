import { createStore, combineReducers } from 'redux'

export const timer = (state = {minutes: 0, seconds: 0}, action) => {
  switch (action.type) {
    case 'UPDATE':
      var { minutes, seconds }  = state

      minutes = seconds + 1 > 59 ? minutes + 1 : minutes
      seconds = seconds + 1 > 59 ? 0 : seconds + 1
      return { minutes: minutes, seconds: seconds }
    case 'RESET':
      return { minutes: 0, seconds: 0 }
    default:
      return state
  }
}

const pomodoro = combineReducers({
  timer,
})

export const store = createStore(pomodoro)
