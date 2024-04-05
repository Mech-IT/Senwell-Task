import React, { useEffect, useState } from 'react'

const ChildCounter = ({ getCounter }) => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        getCounter(counter)
    }, [counter])

    return (
        <div className='container'>
            <button type="button" class="btn btn-primary me-2" onClick={() => setCounter((c) => c - 1)}>-</button>
            <button type="button" class="btn btn-primary" onClick={() => setCounter((c) => c + 1)}>+</button>
        </div>
    )
}

export default ChildCounter