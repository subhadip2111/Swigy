
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './component/About';
import Error from './component/Error';



const AppLayout = () => {

    return (
     <>
         <Header />
    <Body/>
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
        errorElement:<Error />
    },
    {
        path: "/about",
        element:<About/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//instead of showing only appLayout we provided that dynamics
// It will render according to the configure 
root.render(<RouterProvider router={appRouter} />);
//