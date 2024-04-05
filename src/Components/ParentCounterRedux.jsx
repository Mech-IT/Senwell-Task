import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ChildCounterRedux from './ChildCounterRedux'

const ParentCounterRedux = () => {
   const {counter}=useSelector(state=>state.counter)
  return (
    <div className='container'>
      <h4>{counter}</h4>
      <ChildCounterRedux/>
    </div>
  )
}

export default ParentCounterRedux