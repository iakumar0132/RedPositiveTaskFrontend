import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addData } from "../api";

const AddForm = ({ handleAdd }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    hobbies: Yup.string().required("Hobbies are required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await addData(values);
      handleAdd(values);
    } catch (error) {
      // Handle error message
      console.error("Error:", error);
      setErrors({ submit: "Error occurred while saving data." });
    }
    setSubmitting(false);
  };
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Add New Entry</h2>
      <Formik
        initialValues={{ name: "", phoneNumber: "", email: "", hobbies: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                style={{ color: 'black' }}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Field
                type="text"
                name="phoneNumber"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                style={{ color: 'black' }}
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                style={{ color: 'black' }}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="hobbies" className="block text-sm font-medium text-gray-700">
                Hobbies
              </label>
              <Field
                type="text"
                name="hobbies"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                style={{ color: 'black' }}
              />
              <ErrorMessage
                name="hobbies"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
            <ErrorMessage name="submit" component="div" className="text-red-500 text-sm" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddForm;
