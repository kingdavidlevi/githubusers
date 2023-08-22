import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import SideBar from './Sidebar'
import Main from './Main';
function App() {
  const url = 'https://api.github.com/users';
  const [inputtext, setInputText] = useState('');
  const [githubuser, setgithubuser] = useState([]);
  const [shownav, setShowNav] = useState(true);
   
    
    

  useEffect (() => {
      async  function gitusers (){
        
          const data = await fetch (url);
          const result = await data.json();
              setgithubuser(result) }
        
      gitusers();

 },[]);

 function removeItem (id) {
  let items = githubuser.filter((profile) => profile.id !== id);
  setgithubuser (items);

 }

 const handleInput = (event) =>{
 const userInput = event.target.value
  setInputText(userInput);

  const matchresult = githubuser.filter ((selected) => ( selected.toLowerCase()).includes(userInput.toLowerCase())
  
  );
  setgithubuser(matchresult)
 }
  const navigate = () => {
    setShowNav(prevNav => !prevNav)
  }

  const handlesubmit = (event) =>{
   event.preventDefault()
  }
  
  return (

    <>
   <Header handleInput={handleInput} inputtext= {inputtext} navigate={navigate} githubuser={githubuser} handlesubmit={handlesubmit}/>

   <SideBar navigate={navigate} shownav={shownav} />
   <Main removeItem={removeItem} githubuser={githubuser} />
    </>
  );
}

export default App;
