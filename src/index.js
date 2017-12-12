import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

class App extends Component {
  render () {
    return (
      <div className="App">
        Hello World
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
