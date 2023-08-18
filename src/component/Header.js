
import React, { useState } from 'react'
import Title from "../component/Title.js"

import { Link } from 'react-router-dom';
const loggedInUser = () => {
  return false
}

//Spa -Singe page
///client side routing 
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div class="flex">
      
      <h1 className='text-right'>nkklj</h1>
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          

       <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
           <li>
            <Link to="/instamart">Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;