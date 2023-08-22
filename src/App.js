import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import SideBar from './Sidebar'
import Main from './Main';
function App() {
  const url = 'https://api.github.com/users';
  const [inputtext, setInputText] = useState('')
  const [githubuser, setgithubuser] = useState([]);
  
   
    
    

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

 const handleinput = (event) =>{
  console.log (setInputText(event.target.value))
 }

  
  return (

    <>
   <Header handleinput={handleinput} inputtext= {inputtext}/>

   <SideBar />
   <Main removeItem={removeItem} githubuser={githubuser} />
    </>
  );
}

export default App;
