import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
      super()
      this.state = {
        cyclesRemaining: 4,
        phase: 0, // 0 = inhale, 1 = hold, 3 = exhale
        count: 0,
        running: false
      }
  }


  
  render () {
    const {count} = this.state
    return (
      <div className='super'>
        <div className='circle'>
        </div>
        <div className='circle-overlay'>
          <p className='overlay-text'>1</p>
        </div>
      </div>
    )
  }
}
export default App
