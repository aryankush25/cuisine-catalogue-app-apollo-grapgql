import React from 'react';
import { useLoginHook } from '../../hooks/loginHooks';
import { REGISTER_ROUTE } from '../../utils/routesNavigationConstants';

const Login = () => {
  const {
    loading,
    formValues,
    onChangeFormValues,
    onSubmit,
    goto
  } = useLoginHook();

  return (
    <div>
      <form onSubmit={onSubmit}>
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

      <div onClick={() => goto(REGISTER_ROUTE)}>Goto Login Page</div>
    </div>
  );
};

export default Login;
