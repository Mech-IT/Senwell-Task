import React, { useRef, useState } from 'react'

const BubbleSort = () => {
    const [inputArray, setInputArray] = useState([])
    const [outPutArray, setOutPutArray] = useState([])

    const ref = useRef()

    const handleAdd = ()=>{
        const ele = Number(ref.current.value)
        setInputArray([...inputArray,ele])
        ref.current.value = ""
    }

    const handleSort = (type)=>{
            let arr = [...inputArray]
            let len = inputArray.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len - 1 -i; j++) {

                    if(type === "asc"){
                        if (arr[j] > arr[j + 1]) {
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }

                    }else{
                        if (arr[j] < arr[j + 1]) {
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                }
            }
            
            setOutPutArray([...arr])
        
    }
    return (
        <div className='mt-5'>
           <h2>Bubble Sorting</h2>
            <div class="mb-3">
                <label class="form-label">Add your array element one by one</label>
                <input type="number" class="form-control" ref={ref}/>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary me-3" onClick={handleAdd}>Add</button>
                <button type="submit" class="btn btn-primary me-3" onClick={()=>{setInputArray([]); setOutPutArray([])}}>Reset</button>
                <button type="submit" class="btn btn-primary me-3" onClick={()=>handleSort("asc")}>Sort in Ascending</button>
                <button type="submit" class="btn btn-primary" onClick={()=>handleSort("dsc")}>Sort in Decending</button>
            </div>
            <div className='mb-3'>
                <div>{`Input Array : [ ${inputArray} ]`}</div>
                <div>{`Output Array : [ ${outPutArray} ]`}</div>
            </div>
        </div>
    )
}

export default BubbleSort