import React from 'react'

import Timer from './Timer'
import { store } from './stores'


class Pomodoro extends React.Component {

  handleStart() {
    store.dispatch({ type: 'START' })
    this.forceUpdate() // force for update render store state in timer
  }
  handleFinished() {
    store.dispatch({ type: 'STOP' })
    alert('Finished task timer')
    this.forceUpdate() // force for update render store state in timer
  }

  render() {
    const { start } = store.getState().pomodoro
    return (
      <div className="pomodoro">
        <Timer {...this.props} start={start} onFinishedTimer={this.handleFinished.bind(this)} />
        <button onClick={this.handleStart.bind(this)}>{ !start ? "Start" : "Restart" }</button>
      </div>
    )
  }
}


Pomodoro.propTypes = {
  counter: React.PropTypes.number.isRequired,
  typeCounter: React.PropTypes.oneOf(['minutes', 'seconds']).isRequired
}

Pomodoro.defaultProps = {
  counter: 25,
  typeCounter: 'minutes'
}


export default Pomodoro
