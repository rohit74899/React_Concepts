import React from 'react'
import { useState } from 'react'

const ChangePosition = () => {
    let initialPosition=[
        {id:0,type:"circle",x:50,y:100},
        {id:0,type:"Square",x:150,y:100},
        {id:0,type:"circle",x:250,y:100},
    ]
    const [item,setitem]=useState(
        initialPosition
    );
  return (
    <>
        
      {
        item.map(item=>{
           return <div
            key={item.id}
            style={
                {background:'purple',
                position:'absolute',
                left: item.x,
                top: item.y,
                borderRadius: item.type==="circle"?'50%':'',
                width:20,
                height:20,
                }
            }
            >
                
            </div>
        })
      }
    </>
  )
}

export default ChangePosition
