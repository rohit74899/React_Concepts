
import React from 'react'
import { useState } from 'react';
import ContactList from './ContactList'
import Chat from './Chat';



const ChatApp = () => {

    const contacts=[
        {
            name:'Rohit',email:'Rohit@gmail.com'
        },
        {
            name:"Prajwal",email:'Prajwal@gmail.com'
        },
        {
            name:"Rushikesh",email:'Rushikesh@gmail.com'
        }
    ]
    const [to,setTo] =useState(contacts[0]);

    
  return (
    <div>
      
      <ContactList 
      contacts={contacts} 
      selectedContact={to}
      onSelect={contact=>setTo(contact)}>
      </ContactList>
      <Chat contact={to}/>
    </div>
  )
}

export default ChatApp
