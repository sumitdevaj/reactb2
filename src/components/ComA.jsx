import React from 'react'
import ComB from './ComB'

// props 
const ComA = () => {
    let data = [{id:1,name:"pritam",address:["tilak nagar"]},{id:2,name:"sumit"},{id:3,name:"dev"},{id:4,name:"vishal"}]
  return (
    <div><ComB data={data}/></div>
  )
}

export default ComA