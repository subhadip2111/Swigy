
import React, { useState } from 'react'
import Title from "../component/Title.js"

const loggedInUser = () => {
  return false
}
const Header = () => {

  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (

    <>
 <div className='header'>
<Title/>
             <div className='nav-items'>
                 <ul>
                     <li>Home</li>
                      <li>Contact</li>
                     <li>About</li>
                      <li>Cart</li>
                 </ul>
      </div>

      {isLoggedIn?(    <button onClick={ ()=>setIsLoggedIn(false)}>Logout</button>):(<button onClick={()=>setIsLoggedIn(true)}>Login</button>)}
      
  
      </div>
      </>
  )
}

export default Header
