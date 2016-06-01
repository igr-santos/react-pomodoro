import React from 'react'


class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = { minutes: 0, seconds: 0 }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.start && !this.props.start) {
      this.initTimer()
    } else if (nextProps.start && this.props.start) {
      this.initTimer(true)
    }
  }

  updateTimer() {
    // Each onde second update state
    var { minutes, seconds }  = this.state

    minutes = seconds + 1 > 59 ? minutes + 1 : minutes
    seconds = seconds + 1 > 59 ? 0 : seconds + 1

    this.setState({ minutes: minutes, seconds: seconds })

    if (this.props.counter && this.props.counter == seconds) {
      this.stopTimer()
    }
  }

  stopTimer() {
    clearInterval(this.nInterval)
    if (this.props.onStopTimer) {
      // alert parent that the counter ended
      this.props.onStopTimer()
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
    this.setState({ minutes: 0, seconds: 0}, this.startTimer.bind(this))
  }

  render() {
    return (<h2 className="timer">{this.state.minutes}:{this.state.seconds}</h2>)
  }
}


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
        <Timer start={this.state.start} counter={3} onStopTimer={this.handleStop.bind(this)} />
        <button onClick={this.handleStart.bind(this)}>{ !this.state.start ? "Start" : "Restart" }</button>
      </div>
    )
  }
}


export default Pomodoro
