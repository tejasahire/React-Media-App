import React, { useState } from 'react'
import './App.css'
import Navbar from './Compononts/Navbar'
import Sidebar from './Compononts/Sidebar'
import Post from './Compononts/Post'
import Rightbar from './Compononts/Rightbar'
import { data,data2 } from './Compononts/Data'

const App = () => {
  const [bgcolor, setBgcolor] = useState("#232D3f")
  const [color, setColor] = useState("white")
  const [toggle, setToggle] = useState(true)

  const toggleButton=()=>{
    setToggle(!toggle)
    if(toggle){
      setBgcolor("rgb(255,255,255)")
      setColor("black")
      document.querySelector("body").style.backgroundColor='#cbc5c5'
    }else{
      setBgcolor('#232D3f')
      setColor('white')
      document.querySelector('body').style.backgroundColor='black'
    }
  }
  return (
    <>
    <Navbar bgcolor={bgcolor} color={color}  toggleButton={toggleButton} toggle={toggle}/>
    <div className="container">
      <div className="side_bar">
      <Sidebar bgcolor={bgcolor} color={color} />
      </div>
      <div className="post_section">
        {data.map((d)=>(
          <Post key={d.id} data={d} bgcolor={bgcolor} color={color} />
        ))}
      
      
      </div>
      <div className="right_bar">
        {data2.map((d)=><Rightbar key={d.id} data={d} bgcolor={bgcolor} color={color}/>) }
      
      </div>
    </div>
    </>
  )
}

export default App
