import React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import "./style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validationSchema";
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  const { register, handleSubmit, /*watch,*/ formState: {errors = {}} } = useForm({ 
    resolver: yupResolver(validationSchema),
   });
   //const { isSubmitSuccessful } = formState;

   // State to hold form data
   //gt
  /*const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });*/

  // State to track whether the form has been submitted
  const [submittedData, setSubmittedData] = useState(null);

  //const watchAllFields = watch(); // Watch all fields to trigger re-render on form submission
  
  const onSubmit = (data) => {
    console.log(data);
    setSubmittedData(data);
  };
/*
  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the state with the new value
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Set the submitted state to true
    setSubmitted(true);

    // Your form submission logic here using formData state
    console.log('Form data submitted:', formData);
  };
*/
  return (
    <div className="container">
      <div className="container__form container--signup">
        <h1>this.School!</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form__title">Sign Up</h2>
          <label className="form-label">
            First Name:
            <input /*className="input"*/  className="form-control" {...register("firstName")} />
            <span style={{ color: errors.firstName ? 'red' : 'inherit' }}>
            {errors.firstName && <p>{errors.firstName.message}</p>}
            </span>
          </label>
          <br />
          <label className="form-label">
            Last Name:
            <input /*className="input"*/  className="form-control" {...register("lastName")} />
            <span style={{ color: errors.lastName ? 'red' : 'inherit' }}>
            {errors.lastName && <p>{errors.lastName.message}</p>}
            </span>
          </label>
          <br />
          <label className="form-label">
            Email Address:
            <input /*className="input"*/  className="form-control" {...register("email")} />
            <span style={{ color: errors.email ? 'red' : 'inherit' }}>
            {errors.email && <p>{errors.email.message}</p>}
            </span>
            <br />
          </label>
          <label className="form-label">
            Password:
            <input /*className="input"*/  className="form-control" {...register("password")} />
            <span style={{ color: errors.password ? 'red' : 'inherit' }}>
            {errors.password && <p>{errors.password.message}</p>}
            </span>
            <br />
          </label>
          <label className="form-label">
            Confirm password:
            <input /*className="input"*/  className="form-control" {...register("confirmpassword")} />
            <span style={{ color: errors.confirmpassword ? 'red' : 'inherit' }}>
            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
            </span>
            <br />
          </label>
          <label className="form-label">
            Gender:
              <select /*className="input"*/  className="form-control form-select form-select-sm"  {...register("gender")}>
                <option value="">Select...</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="others">Others</option>
              </select>
              <span style={{ color: errors.gender ? 'red' : 'inherit' }}>
            {errors.gender && <p>{errors.gender.message}</p>}
            </span>
          </label>
          <input /*className="btn"*/ className="btn btn-primary" type="submit" />
        </form>

        {submittedData && (
          <div className="submitted-data">
          <h2>Summary<br /></h2>
          <h3>Form Data Submitted</h3>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Confirm Password: {submittedData.confirmpassword}</p>
          <p>Gender: {submittedData.gender}</p>
        </div>
        )}
      </div>
    </div>
  );
}

export default Form
