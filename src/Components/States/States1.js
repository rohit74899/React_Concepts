import { useState } from 'react';

// sharing state between the components
const Accordion=()=>{
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>One Picece</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >

        {/* On show property in react js is event handler
        used for updating the state of the element */}
        Rohit Is hardworking guy   
        {/* children: it is a special prop that is used to pass 
        component 
        element 
        as a children to another component  */}
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
       Rohit is bad guy
      </Panel>
    </>
  );
}
export default Accordion;

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
