import React, { useState } from 'react'
import ChildCounter from './ChildCounter'

const ParentCounter = () => {
  const [count, setCount] = useState(0)

    const getCounter=(counter)=>{
        setCount(counter)
    }
  return (
    <div className='container'>
      <h4>{count}</h4>
      <ChildCounter getCounter={getCounter}/>
    </div>
  )
}

export default ParentCounter