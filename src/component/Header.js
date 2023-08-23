

import React, { useState, useContext } from 'react';
import Title from '../component/Title.js';
import UserContext from '../utils/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const { user } = useContext(UserContext);

  const cartItem = useSelector((store) => store.cart.items);

  const token = localStorage.getItem('token');

  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(token?.length === 100 ? true : false);

  const navigate = useNavigate();

  return (
    <header className="sticky top-0 bg-white z-10 shadow-md">
      <div className="p-3 w-full m-0 md:m-auto md:w-4/5 flex justify-between items-center">
        <Title />
        <div className="nav-items">
          <ul className='fixed bottom-0 flex p-2 justify-around bg-white left-0 w-full  md:flex md:justify-between md:gap-5 md:text-xl md:static md:w-auto '>
            <li className='px-3 py-2'>
              <Link to="/">Home</Link>
            </li>

            <li className='px-3 py-2'>
              <Link to="/about">About</Link>
            </li>
            <li className='px-3 py-2'>
              <Link to="/contact">Contact</Link>
            </li>

            <li className='px-3 py-2 text-red-500'>
              <Link to="/instamart">Instamart</Link>
            </li>
            <li className='px-3 py-2 ' data-testid="cart">
              <Link to="/cart">
                <div className="relative ml-2">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-xl"
                style={{ transition: '0.3s' }}
              />
              {cartItem.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      { cartItem.length}
                </div>
                  )}
                  

    
         </div> 
              </Link>
            </li>

          


            <li>
              {/* use conditional rendering for login and logout */}
              {console.log('isLoggedin:', isLoggedin)}
              {isLoggedin ? (
                <button
                  className="px-3 py-2"
                  onClick={() => {
                    localStorage.clear();
                    setIsLoggedin(!isLoggedin);
                  }}
                >
                  Logout
                </button>
              ) : (
                <button className="px-3 py-2" onClick={() => navigate('/login')}>
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
