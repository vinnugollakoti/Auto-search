import { useState,useRef } from 'react'
import './App.css'
import data from './data'
function App() {
  const [state, setstate] = useState("")
  let reference=useRef()
  document.body.onkeydown=(e)=>{
    if(e.key=="Escape"){
    reference.current.style.display="none"
    console.log("Escape")
    }}
  return (
    <div>
      <center>
      <input onChange={(e)=>{setstate(e.target.value)
      reference.current.style.display="block"
      }}
       />
      <div ref={reference}>
      {data.filter((i)=>{return state!==""?i.name.toLowerCase().startsWith(state.toLowerCase()):0}).map((i,id)=>
        <h2 key={id} >{i.name}</h2>)
        }
      </div></center>
    </div>
  )
}

export default App
