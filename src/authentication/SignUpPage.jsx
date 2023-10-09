import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { signUpAsync } from "../store/reducers/authSlice";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const uniqueId  = uuidv4()

  const initialValues = {
    // uid: uniqueId,
    name: "",
    age: "",
    gmail: "",
    password: "",
    mobileNo: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    age: Yup.number().required("Required"),
    gmail: Yup.string().email("Invalid gmail format").required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
        "Password must have at least 8 characters, including uppercase, lowercase, and a number."
      )
      .required("Required"),
    mobileNo: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    dispatch(signUpAsync(values));
    console.log("Form submitted:", values);
    navigate('/login')
  };

  return (
    <div className="min-h-screen auth-image grid items-center justify-center bg-gray-100 py-16">
      <h1 className="text-white text-2xl text-center">COSMOS</h1>
      <div className="backdrop-blur p-8 rounded shadow-md w-96 text-white">
      
        <h2 className="text-2xl font-semibold mb-4 border-b">Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-wrap">
            <div className="w-full md:w-1/2 pr-4 mb-4">
              <label className="block mb-1">Name</label>
              <Field
                type="text"
                name="name"
                className="w-full px-3 py-2 border rounded-md text-black"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="w-full md:w-1/2 pl-4 mb-4">
              <label className="block mb-1">Age</label>
              <Field
                type="number"
                name="age"
                className="w-full px-3 py-2 border rounded-md text-black"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            {/* Repeat the same structure for other fields */}
            <div className="w-full mb-4">
              <label className="block mb-1">G-mail</label>
              <Field
                type="gmail"
                name="gmail"
                className="w-full px-3 py-2 border rounded-md text-black"
              />
              <ErrorMessage
                name="gmail"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block mb-1">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md text-black"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block mb-1">Mobile Number</label>
              <Field
                type="text"
                name="mobileNo"
                className="w-full px-3 py-2 border rounded-md text-black"
              />
              <ErrorMessage
                name="mobileNo"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md w-full hover:bg-gray-900"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUpPage;
