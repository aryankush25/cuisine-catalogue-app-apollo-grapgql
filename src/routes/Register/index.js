import React from 'react';
import { useSignupHook } from '../../hooks/signupHooks';
import { LOGIN_ROUTE } from '../../utils/routesNavigationConstants';

const Register = () => {
  const {
    loading,
    formValues,
    onChangeFormValues,
    onSubmit,
    goto
  } = useSignupHook();

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={onChangeFormValues}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={onChangeFormValues}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={onChangeFormValues}
        />

        <input
          type="submit"
          name={loading ? 'Loading' : 'Submit'}
          disabled={loading}
        />
      </form>

      <div onClick={() => goto(LOGIN_ROUTE)}>Goto Login Page</div>
    </div>
  );
};

export default Register;
