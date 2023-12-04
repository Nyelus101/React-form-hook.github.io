import React from "react"
//import { useState } from "react"
import { useForm } from "react-hook-form"
import "./style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validationSchema";
import 'bootstrap/dist/css/bootstrap.min.css';



function Form() {
  const { register, handleSubmit, formState: {errors = {}} } = useForm({ 
    resolver: yupResolver(validationSchema),
   });
  //const [data, setData] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

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
      </div>
    </div>
  );
}

export default Form
