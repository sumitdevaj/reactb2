import React, { useState } from 'react'

const Counter = () => {
    const [value,setValue]= useState(0);
    // let value = 0;
    const increment =()=>{
        // ++value
        console.log(value);
        setValue(value+1);
    }
    const decrement =()=>{
        if(value !==0){
        setValue(value-1);
        }
    }
    const reset = ()=>{
        setValue(0);
    }
    const mul5 = ()=>{
        setValue(value+5);
    }
    
  return (
    <div className='flex justify-center items-center m-auto border-2 border-red-500 w-[50vw] h-[50vh]' >
    <div className='flex flex-col '>
        <div className='font-bold text-2xl'>{value}</div>
        <div className=' flex justify-around w-[100%] mx-10'>
        <div className='btn-pritam' onClick={increment}>INC</div>
        <div className='btn-pritam' onClick={decrement}>DEC</div>
        <div className='btn-pritam' onClick={reset}>RESET</div>
        <div className='btn-pritam' onClick={mul5}>+5</div>
        </div>
    </div>
    </div>
  )
}

export default Counter