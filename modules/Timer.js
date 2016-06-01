import React from 'react'

import { store } from './stores'


class Timer extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.start && !this.props.start) {
      this.initTimer()
    } else if (nextProps.start && this.props.start) {
      this.initTimer(true)
    }
  }

  updateTimer() {
    store.dispatch({ type: 'UPDATE' })
    this.forceUpdate() // force for update render store state in timer

    let counter = this.props.counter
    let compare = (
      this.typeCounter === 'minute' ?
      store.getState().timer.minutes :
      store.getState().timer.seconds
    )

    if (counter == compare) {
      this.finishedTimer()
    }
  }

  finishedTimer() {
    clearInterval(this.nInterval)
    if (this.props.onFinishedTimer) {
      // alert parent that the counter ended
      this.props.onFinishedTimer()
    }
  }

  startTimer() {
    // Execute updateTimer each one second
    this.nInterval = setInterval(this.updateTimer.bind(this), 1000)
  }

  initTimer(restart) {
    if (restart === true) {
      clearInterval(this.nInterval)
    }
    store.dispatch({ type: 'RESET' })
    this.startTimer()
  }

  render() {
    const { minutes, seconds } = store.getState().timer
    return (<h2 className="timer">{minutes}:{seconds}</h2>)
  }
}


Timer.propTypes = {
  start: React.PropTypes.bool.isRequired,
  onFinishedTimer: React.PropTypes.func,
  counter: React.PropTypes.number.isRequired,
  typeCounter: React.PropTypes.oneOf(['minutes', 'seconds']).isRequired
}


export default Timer
