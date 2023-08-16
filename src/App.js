
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';


const AppLayout = () => {

    return (
     <>
         <Header />
    <Body/>
    <Footer/>

    </>
)
   
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
//