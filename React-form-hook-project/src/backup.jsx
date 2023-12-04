import React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import "./style.css";

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <br />
          <input {...register("firstName", { required: "First Name is required"})} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </label>
        <br />
        <label>
          Last Name:
          <br />
          <input {...register("lastName", { required: "lastName is required"})} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </label>
        <br />
        <label>
          Email Address:
          <br />
          <input {...register("email", { required: 'Email is required', pattern: /^\S+@\S+$/i })} />
        {errors.email && <p>{errors.email.message}</p>}
          <br />
        </label>
        <label>
          Password:
          <br />
          <input {...register("password")} />
          <br />
        </label>
        <label>
          Confirm password:
          <br />
          <input {...register("confirmpassword")} />
          <br />
        </label>
        <label>
          Gender:
          <br />
            <select {...register("gender")}>
              <option value="">Select...</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="others">Others</option>
            </select>
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form


//import 'react-hook-form/dist/react-hook-form.css';