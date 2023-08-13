import React,{ useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
const url = 'https://api.github.com/users';


function Main (){

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
 
    return (
        <div className="main-element">
            
        {githubuser.map ((profile) =>{
            const {id, login, avatar_url, html_url } = profile
            return(
                <div className="gitusers">
                <figure key={id}>
                    <img  src={avatar_url} alt={login} className="images" />
                    <figcaption><strong>{login}</strong></figcaption>
                    <a href={html_url} className="anchor">Profile</a>
                </figure>
                <div className="times" onClick={() => removeItem (id)}>
                <FaTimes className="times1" />
                </div>
                </div>
            )
        })}
        
        
      </div>

    )
}
  

export default Main







