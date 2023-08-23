
import React, { lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';
import { createBrowserRouter,RouterProvider ,Outlet} from 'react-router-dom';
import About from './component/About';
import Error from './component/Error';
import Contact from './component/Contact';
import RestaurantMenu from './component/RestaurantMenu';
import Profile from './component/Profile';
import Shimmer from './component/Shimmer';
import Login from './component/Login';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './component/Cart';

import InstaMart from './component/instaMart';
// On Demand loading---->upon render -->suspend loading
//Dynamic Importing
//Lazy Import
//Chunking 
//OutLate is an component

// const About=lazy(()=>import("./component/About"))
//   const InstaMart=lazy(()=>import("./component/InstaMart"))
const AppLayout = () => {

    return (
      <>

        
        {/* here the propes name is mendetaory */}
        <Provider store={store}>
         <Header/>
          <Outlet/>
    <Footer/>
</Provider>
    </>
)
   
}

//This is a configaration for providing routing

//this configaration is an array of object
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
        children: [
     {
        path: "/",
        element: <Body/>,
        },
     {
        path: "/about",
      element:<About/>,
  
      },
     
       
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
          },
      
       {
        path: "/instamart",
         element: <InstaMart />
         
          },
         {
    path: "login",
    element: <Login/>,
          },
           { path: "cart",
    element: <Cart/>,
          },
             { path: "profile",
    element: <Profile/>,
          },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//instead of showing only appLayout we provided that dynamics
// It will render according to the configure 
root.render(<RouterProvider router={appRouter} />);
//

