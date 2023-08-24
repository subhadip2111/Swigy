// import React from 'react'
// import { useRouteError } from 'react-router'
// const Error = () => {
//     const err=useRouteError()
//   return (
//       <>
//             <div>
//               <h1> OPPS!!!</h1>
//               <h2>{ err.status +" : "+ err.statusText}</h2>
//     </div>
//   </>
//   )
// }

// export default Error
import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-red-600">Oops!</h1>
          <p className="text-gray-500 mt-2">{err.status + ' : ' + err.statusText}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
