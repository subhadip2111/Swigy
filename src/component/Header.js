
import React, { useState ,useContext} from 'react'
import Title from "../component/Title.js"
  import UserContext from "../utils/UserContext"
import { Link } from 'react-router-dom';
import  {useSelector}  from 'react-redux';
const loggedInUser = () => {
  return false
}






//Spa -Singe page
///client side routing 
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  const {user} = useContext(UserContext)
  
//this hook me the access our store

   const cartItem=useSelector((store)=>store.cart.items)
 console.log(cartItem)
 
  return (
     <header className="sticky top-0 bg-white z-10 shadow-md">
    <div className="p-3 w-full m-0 md:m-auto md:w-4/5  flex justify-between items-center">
      <Title />
      <div className="nav-items">
        <ul className='fixed bottom-0 flex p-2  justify-around bg-white left-0 w-full  md:flex md:justify-between md:gap-5 md:text-xl md:static md:w-auto '>
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
           <li className='px-3 py-2'>
              <Link to="/cart">Cart - { cartItem.length}</Link>
            </li>
                  <li className='px-3 py-2'>
            <Link to="/login">Login</Link>
            </li>
         
        </ul>
      </div>

     
    </div>
    </header>
  );
};

export default Header;



