
import { FaTimes } from "react-icons/fa";



function Main ({githubuser,removeItem , } ){

   
    return (

        <section>
        
            
        <div className="main-element">
           
        {githubuser.map ((profile) =>{
            const {id, login, avatar_url, html_url } = profile
            return(
                
                <div className="gitusers" key={id}>
                <figure >
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
    
     </section>
    );

        }
        
  

export default Main







