import React, { useEffect, useState } from 'react'
import { handleDecCounter, handleIncCounter } from '../Redux/counterReducer'
import { useDispatch } from 'react-redux'

const ChildCounterRedux = () => {

  const dispatch = useDispatch()

  const handleChange = (type) => {
    if (type === "dec") {
       dispatch(handleDecCounter())
    } else {
        dispatch(handleIncCounter())
    }
  }

  return (
    <div className='container'>
      <button type="button" class="btn btn-primary me-2" onClick={() => handleChange("dec")}>-</button>
      <button type="button" class="btn btn-primary" onClick={() => handleChange("inc")}>+</button>
    </div>
  )
}

export default ChildCounterRedux