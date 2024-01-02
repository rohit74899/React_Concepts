import React from 'react'
import { useState } from 'react'

const States = () => {
    const [fname,setfname]=useState('');
    const [lname,setlname]=useState('');
    const [fullname,setFullname]=useState('');

    function handle_fname(e){
        setfname(e.target.value);
        setFullname(e.target.value + ' ' + lname);
    }
// e.target if the DOM element that triggers the event
    function handle_lname(e){
        setlname(e.target.value);
        setFullname(fname + ' ' + e.target.value);
    }
  return (
    <div>
      <h2>lets check you in </h2>
      <label>
        First name:
        <input type="fname" value={fname} onChange={handle_fname} />
      </label>

      <label >
        Last name:
        <input type="text" value={lname} onChange={handle_lname} />
      </label>

      <p>your Ticket will be issued to : <b>{fullname}</b> </p>

      
    </div>
  )
}

export default States
