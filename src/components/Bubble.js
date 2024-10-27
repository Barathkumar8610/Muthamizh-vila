import React from 'react';


const Bubble = (props) => {
    return (
      <div className={`bubble ${(props.no === '2' || props.no === '4') ? 'apply-padding' : ''}` }>
         <img class="bubble1" src="./bubble1.png" alt="bubble1"></img>
      </div>
    );
  };
  
  export default Bubble;