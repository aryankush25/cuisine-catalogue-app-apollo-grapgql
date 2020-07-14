import React from 'react';
import useHomeHook from '../../hooks/homeHooks';

const Home = () => {
  const { logoutHandler } = useHomeHook();

  return (
    <React.Fragment>
      <div>This is Home Page</div>

      <button onClick={logoutHandler}>LOG OUT</button>
    </React.Fragment>
  );
};

export default Home;
