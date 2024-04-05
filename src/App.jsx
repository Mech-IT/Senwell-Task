import React from 'react'
import "./App.css"
import ParentCounter from './Components/ParentCounter'
import ParentCounterRedux from './Components/ParentCounterRedux'
import BubbleSort from './Components/BubbleSort'
const App = () => {
  return (
    <>
      <div className='main_container'>
        <div className='sub_conatiner'>
          <h1>Counter using props</h1>
          <ParentCounter />
        </div>
        <div className='sub_conatiner'>
          <h1>Counter using redux</h1>
          <ParentCounterRedux />
        </div>
      </div>
      <div className='bubble-sort'>
        <BubbleSort />
      </div>
    </>
  )
}

export default App