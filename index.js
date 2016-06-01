import React from 'react'
import { render } from 'react-dom'

import Pomodoro from './modules/Pomodoro'


render((
  <Pomodoro counter={3} typeCounter='seconds' />
), document.getElementById('react-pomodoro'))
