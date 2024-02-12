import { useState,useRef } from 'react'
import './App.css'
import data from './data'
function App() {
  const [state, setstate] = useState("")
  let refe=useRef()
  document.body.onkeydown=(e)=>{
    if(e.key=="Escape"){
    refe.current.style.display="none"
    console.log("Escape")
    }}
  return (
    <div>
      <center>
      <input onChange={(e)=>{setstate(e.target.value)
      refe.current.style.display="block"
      }}
       />
      <div ref={refe}>
        {data.filter((i)=>{return state!==""?i.name.startsWith(state):0}).map((i,ind)=>
        <h2 key={ind} >{i.name}</h2>)
        }
      </div></center>
    </div>
  )
}

export default App
