import React from 'react';
import { BankAccount } from '../../types/bank-account';

interface PropTypes {
  list: BankAccount[];
}

const AccountList: React.FC<PropTypes> = ({ list }) => {
  return (
    <ul>
      {list.map((listItem) => {
        return <li key={`bank-account-${listItem.id}`}>{listItem.name}</li>;
      })}
    </ul>
  );
};

export default AccountList;
