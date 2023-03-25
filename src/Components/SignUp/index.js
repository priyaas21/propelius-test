import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../Reducers';

const SignupForm = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    email: '',
    username: '',
    contact: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    username: '',
    contact: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields
    let errors = {};
    if (!formState.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formState.username) {
      errors.username = 'Username is required';
    }
    if (!formState.contact) {
      errors.contact = 'Contact is required';
    } else if (!/^\d{10}$/.test(formState.contact)) {
      errors.contact = 'Invalid contact number';
    }
    if (!formState.password) {
      errors.password = 'Password is required';
    } else if (formState.password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    }

    if (Object.keys(errors).length === 0) {
      dispatch(signUp(formState));
      setFormState({
        email: '',
        username: '',
        contact: '',
        password: '',
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={formState.email} onChange={handleChange} />
        {formErrors.email && <div className="error">{formErrors.email}</div>}
      </label>
      <label>
        Username:
        <input type="text" name="username" value={formState.username} onChange={handleChange} />
        {formErrors.username && <div className="error">{formErrors.username}</div>}
      </label>
      <label>
        Contact:
        <input type="text" name="contact" value={formState.contact} onChange={handleChange} />
        {formErrors.contact && <div className="error">{formErrors.contact}</div>}
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formState.password} onChange={handleChange} />
        {formErrors.password && <div className="error">{formErrors.password}</div>}
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupForm;