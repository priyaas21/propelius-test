import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Reducers';

const SigninForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [formState, setFormState] = useState({
    identifier: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields
    let errors = {};
    if (!formState.identifier) {
      errors.identifier = 'Email or username is required';
    }
    if (!formState.password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length === 0) {
      const user = users.find((user) => (user.email === formState.identifier || user.username === formState.identifier) && user.password === formState.password);
      if (user) {
        // Dispatch login action
        dispatch(login(user));
        setFormState({
          identifier: '',
          password: '',
        });
      } else {
        setFormErrors({ message: 'Invalid email/username or password' });
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email/Username:
        <input type="text" name="identifier" value={formState.identifier} onChange={handleChange} />
        {formErrors.identifier && <div className="error">{formErrors.identifier}</div>}
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formState.password} onChange={handleChange} />
        {formErrors.password && <div className="error">{formErrors.password}</div>}
      </label>
      <button type="submit">Sign in</button>
      {formErrors.message && <div className="error">{formErrors.message}</div>}
    </form>
  );
};

export default SigninForm;
