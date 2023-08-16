
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';
import { createBrowserRouter,RouterProvider ,Outlet} from 'react-router-dom';
import About from './component/About';
import Error from './component/Error';
import Contact from './component/Contact';
import RestaurantMenu from './component/RestaurantMenu';



//OutLate is an component 
const AppLayout = () => {

    return (
     <>
         <Header/>
          <Outlet/>
    <Footer/>

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
        element: <About />,
      },
     
       
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//instead of showing only appLayout we provided that dynamics
// It will render according to the configure 
root.render(<RouterProvider router={appRouter} />);
//

