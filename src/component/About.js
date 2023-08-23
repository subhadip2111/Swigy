// import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import food from "../Images/burger-image.png";

// const About = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <div>
//       <div className="flex justify-center mt-4">
//         {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
//         {show ? (
//           <>
//             <Link to="/about">
//               <button
//                 className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
//                 onClick={() => setShow(false)}
//               >
//                 Hide My Profile
//               </button>
//             </Link>
//             <Outlet />
//           </>
//         ) : (
//           <Link to="/profile">
//             <button
//               className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
//               onClick={() => setShow(true)}
//             >
//               Show My Profile
//             </button>
//           </Link>
//         )}
//       </div>
//       <div className="flex justify-center mt-8">
//         <div className="w-1/2 p-6">
//           <h1 className="text-3xl font-semibold mb-4">
//             Welcome to <br /> The world of <br />{" "}
//             <span className="text-green-500">Tasty & Fresh Food</span>
//           </h1>
//           <h4 className="text-gray-600">
//             "Eat For love more .... !!!  <span className="text-red-500"> @Fire</span> Healthy
//             Meal"
//           </h4>
//         </div>
//         <div className="w-1/2">
//           <img src={food} alt="Food Image" className="w-full" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import food from "../Images/burger-image.png";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center mt-12">
        {show ? (
          <>
            <Link to="/about">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to="/profile">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      <div className="flex justify-center items-center mt-8 px-6">
        <div className="w-1/2">
          <img src={food} alt="Food Image" className="w-full rounded-lg shadow-xl" />
        </div>
        <div className="w-1/2 p-6">
          <h1 className="text-4xl font-semibold mb-4 text-blue-600">
            Explore the World of <br />{" "}
            <span className="text-green-500">Delicious & Fresh Food</span>
          </h1>
          <h4 className="text-gray-600 text-lg">
            "Savor Every Bite... 🍔🍕🥗  Enjoy Every Flavor... <span className="text-red-500">@Fire</span> Healthy and Happy Meals 🥦🍓🍇"
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
