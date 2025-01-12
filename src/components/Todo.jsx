import React, { useState } from 'react'
const Todo = () => {
    let [task,setTask]=useState([]);
    let [inputVal,setInputVal]=useState('');
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
    {task && task.map((t,idx)=>{
        return <><ReuseableComponent value={t} toggleComplete ={toggleComplete} idx={idx} deleteTask ={deleteTask}/> </>
    })}
    </div>
  )
}
export default Todo
const ReuseableComponent = ({value,toggleComplete,idx,deleteTask}) =>{
  console.log(value);
  
  return (
   <div className='w-[200px] border-2 border-red-500 flex justify-center items-center'><span  style={{textDecoration:value.completed?'line-through':"none"}} onClick={()=>{toggleComplete(idx)}}> {value.value}{value.id}</span>
   <button onClick={()=>deleteTask(idx)}> Delete</button>
   </div>
  )
}


// <div className='' ><span style={{textDecoration:t.completed?'line-through':"none"}} onClick={()=>toggleComplete(idx)}>{t.value}</span>
// <span className='btn-pritam '  onClick={()=>deleteTask(idx)} >del</span>
// </div>