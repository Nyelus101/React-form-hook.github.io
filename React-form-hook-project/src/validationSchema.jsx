// validationSchema.js
/*import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default validationSchema;
*/

// validationSchema.js
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  gender: Yup.string().required('Gender is required'),
});

export default validationSchema;


/*
{submitted && (
  <div>
  <h2>Form Data Submitted</h2>
  <p>firstName : {formData.firstName}</p>
  <p>lastName: {formData.lastName}</p>
  <p>email: {formData.email}</p>
  <p>password: {formData.password}</p>
  <p>confirmpassword: {formData.confirmpassword}</p>
  <p>gender: {formData.gender}</p>
  </div>
  )}
*/