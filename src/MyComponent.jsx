import React from 'react';
import ReactDOM from 'react-dom';
const MyComponent = () => {
  let myName = "Renu"
  let myHobby = "I like to code."
  return(
  <div style={{color:`purple`}}>
    <h1 >My name is {myName}.</h1>
  <h2>Hi {myHobby}.</h2>

  </div>

  )
   
}

export default MyComponent