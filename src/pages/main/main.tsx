import React, { useContext } from 'react';
import GlobalState from 'state';
import AccountList from '../../components/account-list/account-list';

const Main = () => {
  const { state } = useContext(GlobalState.Context);

  return (
    <div>
      <AccountList list={state.bankAccounts} />
    </div>
  );
};

export default Main;
