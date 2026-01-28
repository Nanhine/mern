import React,{useState} from 'react'
import Service from './Service';

const Contact = (props) => {
  const[name,setName]=useState("nandhini");
  const toggleName=()=>{
    setName(name==="nandhini"?"nandu":"nandhini")
  }
  return (
    <div>
      <h1>Name:{name}</h1>
      <button onClick={toggleName}>Toggle</button>
      <Service name={props.name}/>
    </div>
  )
}

export default Contact
