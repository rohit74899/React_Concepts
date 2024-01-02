import React from 'react'

const ContactList = ({contacts,selectedContact,onSelect}) => {
  return (
    <>
    <section className='contact-list'>
        <ul>
            {
                contacts.map(contact=>
                    <li key={contact.email}>

                        <button onClick={()=>{
                            onSelect(contact);   
                            console.log(contact)
                        }}>

                            {contact.name}
                        </button>
                        
                    </li>
            )}
            
        </ul>
    </section>
    </>
    
    
  )
}

export default ContactList
