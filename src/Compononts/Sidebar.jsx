import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
const Sidebar = ({bgcolor,color}) => {
  return (
    <>
    <div className="side_bar_content" style={{
      backgroundColor:`${bgcolor}`,color:`${color}`
    }}>
      <div className="top_content">
        <div className="items"><FaHome className='icons'/>Home</div>
        <div className="items"><IoMdNotifications className='icons'/>Notification</div>
        <div className="items"><FaShoppingBag className='icons'/>Shop</div>
        <div className="items"><IoIosChatboxes className='icons'/>Conversation</div>
        <div className="items"><IoWallet className='icons'/>Wallet</div>
        <div className="items"><FaYoutube className='icons'/>Subscription</div>
        <div className="items"><CgProfile className='icons'/>My profile</div>
      </div>
      <div className="bottom_content items"><CiLogout className='icons'/>Log Out</div>
    </div>
    </>
  )
}

export default Sidebar