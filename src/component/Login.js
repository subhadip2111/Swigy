
// import React, { useState } from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .required("Email is a required field")
//     .email("Invalid email format"),
//   password: Yup.string()
//     .required("Password is a required field")
//     .min(8, "Password must be at least 8 characters"),
// });

// const Login = () => {
//   const navigate = useNavigate();
//    const [isLoggedIn, setIsLoggedIn] = useState(false);

//   function handleNavigate(values) {
//     // Simulate a login by storing user data in local storage
//     localStorage.setItem("userData", JSON.stringify(values));
//      setIsLoggedIn(true);

//     setTimeout(() => {
//       navigate("/");
//     }, 0);
//   }

//   function handleLogout() {
//     // Simulate a logout by removing user data from local storage
//     localStorage.removeItem("userData");
//     setIsLoggedIn(false)
//   }

//   const userData = JSON.parse(localStorage.getItem("userData"));

//   return (
//     <div className="bg-gradient-to-r from-purple-700 to-blue-700 h-screen flex items-center justify-center">
//       <Formik
//         validationSchema={schema}
//         initialValues={{ email: "", password: "" }}
//         onSubmit={(values) => {
//           handleNavigate(values);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//         }) => (
//           <div className="login-container transform-gpu rotate-x-2 bg-white rounded p-6 shadow-md">
//             {isLoggedIn ? (
//               <>
//                 <h2 className="text-2xl mb-4 font-semibold text-green-600">
//                   Logged In
//                 </h2>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <form noValidate onSubmit={handleSubmit}>
//                 <h2 className="text-2xl mb-4 font-semibold text-blue-600">
//                   Login
//                 </h2>
//                 <input
//                   type="email"
//                   name="email"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.email}
//                   placeholder="Enter your email"
//                   className="bg-gray-100 border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   id="email"
//                 />
//                 <p className="text-red-500">
//                   {errors.email && touched.email && errors.email}
//                 </p>
//                 <input
//                   type="password"
//                   name="password"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                   placeholder="Enter your password"
//                   className="bg-gray-100 border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//                 <p className="text-red-500">
//                   {errors.password && touched.password && errors.password}
//                 </p>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                   Login
//                 </button>
//               </form>
//             )}
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  function handleNavigate(values) {
    // Simulate a login by storing user data in local storage
    localStorage.setItem("userData", JSON.stringify(values));

    setTimeout(() => {
      navigate("/");
    }, 0);
  }

  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-700 h-screen flex items-center justify-center">
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handleNavigate(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login-container transform-gpu rotate-x-2 bg-white rounded p-6 shadow-md">
            <form noValidate onSubmit={handleSubmit}>
              <h2 className="text-2xl mb-4 font-semibold text-blue-600">
                Login
              </h2>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email"
                className="bg-gray-100 border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                id="email"
              />
              <p className="text-red-500">
                {errors.email && touched.email && errors.email}
              </p>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter your password"
                className="bg-gray-100 border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <p className="text-red-500">
                {errors.password && touched.password && errors.password}
              </p>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;


