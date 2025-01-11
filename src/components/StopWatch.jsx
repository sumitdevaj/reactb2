import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [data,setData] = useState();

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
        else{
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    },[isRunning])
    useEffect(()=>{
        let d = async()=>{
        let dta= await fetch('https://jsonplaceholder.typicode.com/todos')
        let d1=await dta.json()
        setData(d1)
        }
        d();
    },[])

  return (
    <>
    <h1>Simple StopWatch</h1>
    <h2>{formatTime(time)}</h2>
    <button onClick={toggle}>{isRunning?"pause":"start"}</button>
    <button onClick={reset} >Reset</button>
    {data && data.map((d,idx)=>{
        return (<><div key={idx}>{d.userId} {d.title} </div></>)
    })}

    </>
  )
}

export default StopWatch