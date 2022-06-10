import React, { Component } from 'react'
import ReactDom from 'react-dom'
import AppFooter from './AppFooter'

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <h1>Hello World</h1>
        </div>
        <AppFooter/>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))