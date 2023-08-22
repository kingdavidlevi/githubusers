import './App.css'
import {FaGithub} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
function Header ({handleInput, inputtext, navigate, handlesubmit}){

    
    return(
        <div className='header'>
            <div>
            <FaBars className='bars' onClick={navigate} /> 
            <FaGithub className='git'/>
           < span className='hub'> <strong> Github </strong></span>
            </div>
        
            <div className='input-box' >
            <div className='search'>
             <FaSearch  /> 
             </div>
           <div> <form onSubmit={handlesubmit}><input type='text' placeholder='search...' className='input' onChange={handleInput} value={inputtext}/></form> </div> 
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