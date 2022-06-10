import React, { Component } from 'react'
import ReactDom from 'react-dom'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppContent from './AppContent'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {

  render() {

    const myProps = {
      title: "ShinDongHwi App",
      subject: "ShinDongHwi Subject",
      myColor: "Orange",

    }

    return (
      <div>
        <AppHeader {...myProps}/>
        <AppContent/>
        <AppFooter/>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))