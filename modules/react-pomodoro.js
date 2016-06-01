import React from 'react'

import Timer from './Timer'


class Pomodoro extends React.Component {

  constructor(props) {
    super(props)
    this.state = { start: false }
  }

  handleStart() {
    this.setState({ start: true })
  }
  handleStop() {
    this.setState({ start: false })
    alert('Finished task timer')
  }

  render() {
    return (
      <div className="pomodoro">
        <Timer start={this.state.start} counter={3} typeCounter='seconds' onStopTimer={this.handleStop.bind(this)} />
        <button onClick={this.handleStart.bind(this)}>{ !this.state.start ? "Start" : "Restart" }</button>
      </div>
    )
  }
}


export default Pomodoro
