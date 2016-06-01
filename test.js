#! /usr/bin/env node
import expect from 'expect'

import { timer } from './modules/stores'


// should sum 1 second the each new call
const testUpdateTimer = () => {
  const stateBefore = { minutes: 0, seconds: 0 }
  const stateAfter = { minutes: 0, seconds: 1 }

  const action = { type: 'UPDATE' }

  expect(
    timer(stateBefore, action)
  ).toEqual(stateAfter)
}

// should add 1 minute when to arrive in 60 seconds
const testUpdateTimerMinute = () => {
  const stateBefore = { minutes: 0, seconds: 59 }
  const stateAfter = { minutes: 1, seconds: 0 }

  const action = { type: 'UPDATE' }

  expect(
    timer(stateBefore, action)
  ).toEqual(stateAfter)
}

// should zero timer when reset
const testResetTimer = () => {
  const stateBefore = { minutes: 0, seconds: 59 }
  const stateAfter = { minutes: 0, seconds: 0 }

  const action = { type: 'RESET' }

  expect(
    timer(stateBefore, action)
  ).toEqual(stateAfter)
}


testUpdateTimer()
testUpdateTimerMinute()
testResetTimer()

console.log('All tests passed.')
