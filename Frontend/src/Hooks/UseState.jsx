import React,{useState} from 'react'


const UseState = () => {
    const [name,setName]=useState("");
    const handleSubmit=(e)=>{
      e.preventdefault();
        console.log(name);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>NameL:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.Value)} placeholder='Enter the name/'></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UseState
