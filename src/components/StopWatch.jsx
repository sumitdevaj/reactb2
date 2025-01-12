import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [data,setData] = useState();

    const [time,setTIme]= useState(0);
    const [isRunning,setIsRunning] = useState(true)

  
    const formatTime = (time)=>{
        const minutes = String(Math.floor(time/60))>9 ? String(Math.floor(time/60)): `0${String(Math.floor(time/60))}`;
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
        return ()=> clearInterval(interval)
        console.log(interval);
        
    },[isRunning])
  return (
    <>
    <h1>Simple StopWatch</h1>
    <h2>{formatTime(time)}</h2>
    </>
  )
}

export default StopWatch