import React from 'react'
import About from '../component/About'

const Home = (props) => {
  const handleClick=()=>{
      }
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <button onClick={handleClick}>Go to about page</button>
      <About name={name}/>
    </div>
  )
}

export default Home
