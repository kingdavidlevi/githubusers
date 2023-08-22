import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { FaTimes } from "react-icons/fa";

function SideBar (){

  
    return (
      
           

        <div className='sidebar'>
          <ul className='sidebar-ul'>
            <li className='list'><FaHome className='home' /> <span> <strong>Home</strong></span></li>
            <li className='list'>  <FaArrowRight className='arrow' /> <span><strong>Login</strong></span></li>
            <li className='list'><FaUser className='user'/> <span><strong>User</strong></span></li>
            <li className='list'> <FaAddressBook className='book'/> <span><strong>About</strong></span></li>
           
            <li className='setting'> <FaWrench className='tool'/> <span><strong>Setting</strong></span></li>
           
          </ul>
          
        </div>

        
        
    )
    }


export default SideBar ;