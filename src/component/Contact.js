// import { useState } from "react";
// import contact from "../Images/Contact-Us.png";

// const Contact = () => {
//   const [message, setMessage] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessage(true);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-5xl flex bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="w-1/2 p-8">
//           <img src={contact} alt="Contact Us" className="w-full h-auto" />
//         </div>
//         <div className="w-1/2 p-8 bg-gray-50">
//           <h1 className="text-3xl font-semibold mb-4">Contact us</h1>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:border-blue-500"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:border-blue-500"
//               required
//             />
//             <textarea
//               placeholder="Type your Message here..."
//               className="w-full px-4 py-2 mb-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Submit
//             </button>
//             {message && (
//               <span className="text-green-600 mt-2">
//                 Thanks for Contact Us ..  Our Team Will Contact you As Soon As Possible
//               </span>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React, { useState } from "react";
import contact from "../Images/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 to-emerald-500">
      <div className="w-full max-w-5xl flex bg-white shadow-md rounded-lg overflow-hidden">
        <div className="w-1/2 p-8 bg-gradient-to-r from-emerald-500 to-teal-400 text-white">
          <img src={contact} alt="Contact Us" className="w-full h-auto" />
        </div>
        <div className="w-1/2 p-8 bg-gray-100">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:border-teal-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:border-teal-400"
              required
            />
            <textarea
              placeholder="Type your message here..."
              className="w-full px-4 py-2 mb-2 border rounded-lg resize-none focus:outline-none focus:border-teal-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Submit
            </button>
            {message && (
              <span className="text-green-600 mt-2">
                Thanks for contacting us! Our team will get in touch with you soon.
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
