import React from 'react'


class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = { minutes: 0, seconds: 0 }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.start) {
      // Execute updateTimer each one second
      this.nInterval = setInterval(this.updateTimer.bind(this), 1000)
    } else {
      // Stop interval and restart counter
      clearInterval(this.nInterval)
      this.setState({ minutes: 0, seconds: 0 })
    }
  }

  updateTimer() {
    // Each onde second update state
    var { minutes, seconds }  = this.state

    minutes = seconds + 1 > 59 ? minutes + 1 : minutes
    seconds = seconds + 1 > 59 ? 0 : seconds + 1

    this.setState({minutes: minutes, seconds: seconds })
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
  handleRestart() {
    this.setState({ start: false })
  }

  render() {
    return (
      <div className="pomodoro">
        <Timer start={this.state.start} />
        <button onClick={this.handleStart.bind(this)}>Start</button>
        <button onClick={this.handleRestart.bind(this)}>Restart</button>
      </div>
    )
  }
}


export default Pomodoro
