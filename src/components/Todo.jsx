import React, { useState } from 'react'

const Todo = () => {
    let [task,setTask]=useState([]);
    let [inputVal,setInputVal]=useState('');
    let i=1
    const add = () => {
        
        if(inputVal !== ''){
            setTask([...task,{id:Date.now(),value:inputVal,completed:false}])
            setInputVal('');
        }
    }
    const toggleComplete = (idx) => {
      setTask(
        task.map((t,i)=>i === idx ? {...t,completed:!t.completed}:t)
      )
    }
    const deleteTask = (idx)=>{
      setTask(task.filter((_,i)=>i!==idx))
    }
    
  return (
    <div>
    <input type='text' placeholder='enter task' value={inputVal} onChange={(e)=>setInputVal(e.target.value)}></input>
    <span className='btn-pritam ' onClick={add}>Add task</span>
    {task && task.map((t,i)=>{
        return <div className='' ><span style={{textDecoration:t.completed?'line-through':"none"}} onClick={()=>toggleComplete(i)}>{t.value}</span>
        <span className='btn-pritam '  onClick={()=>deleteTask(i)} >del</span>
        </div>
    })}
    </div>
  )
}

export default Todo