import React from 'react';

import Button from '../../components/shared/Button';
import useHomeHook from '../../hooks/homeHooks';

const Home = () => {
  const { logoutHandler } = useHomeHook();

  return (
    <React.Fragment>
      <div>This is Home Page</div>

      <Button buttonType="secondary" text="LOG OUT" onClick={logoutHandler} />
    </React.Fragment>
  );
};

export default Home;
