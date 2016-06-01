#! /usr/bin/env node
import expect from 'expect'

const sumOne = (x) => {
  return x + 1
}

const testSumOne = () => {
  const numberBefore = 1
  const numberAfter = 2

  expect(
    sumOne(numberBefore)
  ).toEqual(numberAfter)
}

testSumOne()

console.log('All tests passed.')
