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
    alert(values);
    setTimeout(() => {
      navigate(-1);
    }, 0);
  }

  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-700 h-screen flex items-center justify-center">
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handleNavigate(JSON.stringify(values));
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
              <h2 className="text-2xl mb-4 font-semibold">Login</h2>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email"
                className="form-input mb-2"
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
                className="form-input mb-2"
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

