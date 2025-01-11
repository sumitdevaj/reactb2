import React, { useEffect, useState } from 'react'

const StopWatch = () => {

    const [time,setTIme]= useState(0);
    const [isRunning,setIsRunning] = useState(false)

    const toggle = ()=>{
        setIsRunning(!isRunning);
    }
    const reset = ()=>{
        setIsRunning(false);
        setTIme(0)
    }
    const formatTime = (time)=>{
        const minutes = String(Math.floor(time/60)).padStart(2, '0');
        const seconds = String(Math.floor(time%60)).padStart(2, '0');
        return `${minutes} : ${seconds}`
    }
    useEffect(()=>{
        let interval;
        if(isRunning){
            interval = setInterval(()=>{
                setTIme((prev)=>prev+1);

            },1000)
        }
        else{
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    },[isRunning])

  return (
    <>
    <h1>Simple StopWatch</h1>
    <h2>{formatTime(time)}</h2>
    <button onClick={toggle}>{isRunning?"pause":"start"}</button>
    <button onClick={reset} >Reset</button>
    </>
  )
}

export default StopWatch