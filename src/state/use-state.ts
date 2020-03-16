import { useReducer, useCallback } from 'react';
import { State, StateWithActions } from 'types/state';
import reducer from './reducer';
import { ADD_BANK_ACCOUNT } from './constants';
import { BankAccount } from '../types/bank-account';
import { mockBanks } from '../api/mockBanks';

export const defaultState = {
  bankAccounts: mockBanks,
};

export default (initialState: State = defaultState): StateWithActions => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addBankAccount = useCallback((data: BankAccount) => dispatch({ type: ADD_BANK_ACCOUNT, data }), []);

  return {
    state,
    actions: {
      addBankAccount,
    },
  };
};
