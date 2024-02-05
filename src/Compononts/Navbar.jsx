import React from 'react'
import { FcSearch } from "react-icons/fc";
import { IoFilterSharp } from "react-icons/io5";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
const Navbar = ({bgcolor,color,toggleButton,toggle}) => {
  const bColor= color=='black'?'#cbc5c5':'black'
  return (
    <>
        <div className="nav_bar"  
        style={{backgroundColor:`${bColor}`}}
        >
            <div className="logo" style={{
      backgroundColor:`${bgcolor}`,color:`${color} `,display:'flex', justifyContent:'space-between'
    }}>
              <FaReact style={{fontSize:'20px'}} />
              <div onClick={toggleButton}>
              {toggle?(

                <BsToggle2On/>
              ):(
                <BsToggle2Off/>
              )}
         {" "}
              </div>
              
              </div>
            <div className="search" style={{
      backgroundColor:`${bgcolor}`,color:`${color}`
    }}>
                <div className="left"><FcSearch/>{"   "}Serch here...</div>
                <div className="right"><IoFilterSharp/></div>
            </div>
            <div className="seller" style={{
      backgroundColor:`${bgcolor}`,color:`${color}`
    }}>Becom Seller</div>
        </div>
    </>
  )
}

export default Navbar