import React from 'react'


// what is short circuiting
const ComB = ({data}) => {   

  return (
    <div>{data.map((value,idx)=>{
        return (<div key={idx}> {value.name} {value?.address}</div>)
    })}</div>
  )
}

export default ComB