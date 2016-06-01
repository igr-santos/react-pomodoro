# React Pomodoro

Timer for Pomodoro built with React

## Development

- Install the dependencies with `npm install`
- Run tests `npm test`

## Usage

- After install the dependencies, run the server with `npm start`
- Go to your broswer [localhost:8080][localhost]

## Examples

Set time that the Pomodoro will finish

```
...

import Pomodoro from './modules/Pomodoro'

// typeCounter ['minutes', 'seconds']
render((
  <Pomodoro counter={25} typeCounter='minutes' />
), document.getElementById('your-app-id'))
```

## Contribute

- [Report issue][issues]


[localhost]: http://localhost:8080
[issues]: https://github.com/igr-santos/react-pomodoro/issues
