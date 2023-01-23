import { useState } from 'react'

import './App.css'
import CreatePoll from './components/CreatePoll'
import Poll from './components/Poll'
import PollCollection from './components/PollCollection'

function App() {
  const [polls, setPolls] = useState([])

  const addPoll = (poll) => {
    setPolls(prevState => [...prevState, poll])
  }

  return (
    <div className="App">
      <h1>Poll Creator</h1>
      <CreatePoll addPoll={addPoll}/>
      {/* <Poll question={"what is 2+2?"} answer1={5} answer2={4} /> */}
      <PollCollection polls={polls}/>
        
    </div>
  )
}

export default App
