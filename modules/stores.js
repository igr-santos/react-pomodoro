import { createStore, combineReducers } from 'redux'

export const timer = (state = { minutes: 0, seconds: 0 }, action) => {
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

export const pomodoro = (state = { start: false }, action) => {
  switch (action.type) {
    case 'START':
      return { start: true }
    case 'STOP':
      return { start: false }
    default:
      return state
  }
}

const pomodoroApp = combineReducers({
  timer,
  pomodoro
})

export const store = createStore(pomodoroApp)
