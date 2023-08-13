import './App.css'
import {FaGithub} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
function Header (){
    return(
        <div className='header'>
            <div>
            <FaBars className='bars' /> 
            <FaGithub className='git'/>
           < span className='hub'> <strong> Github </strong></span>
            </div>
        
            <div className='input-box'>
            <div className='search'>
             <FaSearch  /> 
             </div>
           <div><input type='text' placeholder='search...' className='input'  /> </div> 
            <div className='microphone-container'><FaMicrophone  className='microphone'/></div>
            </div>
            
        
            <div className='notification'>
            <FaBell className='bell'/> 
           <span> <a className='sign' href='#'><strong>Sign up </strong></a></span>
            </div>
        


        </div>

        
    );

}
export default Header;