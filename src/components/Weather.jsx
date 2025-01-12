import React, { useEffect, useState } from 'react'

const Weather = () => {
  const [value, setValue] = useState();
  const [inputVal, setInputVal] = useState("");
  useEffect(() => {
    setValue(10)
    console.log(value)
  }, [inputVal])
  return (
    <>
      {value}
      <h1>hello</h1>
      <input type='text' value={inputVal} onChange={(e) => setInputVal(e.target.value)}></input>
      <button onClick={() => {
        console.log("ddd")
      }}>click</button>
    </>

  )
}

export default Weather