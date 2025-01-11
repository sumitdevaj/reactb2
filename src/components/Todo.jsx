import React, { useState } from 'react'

const Todo = () => {
    let [task,setTask]=useState([]);
    let [inputVal,setInputVal]=useState('');
    let i=1
    const add = () => {
        
        if(inputVal !== ''){
            setTask([...task,{id:Date.now(),value:inputVal}])
            setInputVal('');
        }
    }
    console.log(task);
    
  return (
    <div>
    <input type='text' placeholder='enter task' value={inputVal} onChange={(e)=>setInputVal(e.target.value)}></input>
    <span className='btn-pritam ' onClick={add}>Add task</span>
    {task && task.map(t=>{
        return <div className=''>{t.value}</div>
    })}
    </div>
  )
}

export default Todo