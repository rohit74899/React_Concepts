import React from 'react'
import { useState } from 'react'

let nextid=0;


const CrudOp = () => {
    const [name,setname]=useState('');
    const [list,setlist]=useState([]);

  return (
    <div>
      <h1>All the Artists!</h1>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>

      <button onClick={()=>{
        setlist([
            ...list,
            {id:nextid++,name:name}  //add new elements at the end
        ]
        )
      }}>Add</button>
      
      <ol>
        {list.map((item)=>{
            return <li key={item.id}>
                {item.name}{" "}
                <button onClick={()=>{
                    setlist(
                        list.filter((a)=>{
                            return a.id!==item.id  //new array contains only those elements that have passed this condition
                        })
                    )
                }}>Delete</button>

                </li>
        })}
      </ol>
    </div>
  )
}

export default CrudOp


// to add the elements in the list not prefered way
// ()=>{
//     list.push({
//         id:nextid++,
//         name:name,
//     });
//   }
