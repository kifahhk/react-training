import { State } from 'types/state';
import concat from 'lodash/concat';
import { ADD_BANK_ACCOUNT } from './constants';

export default (state: State, action: any) => {
  switch (action.type) {
    case ADD_BANK_ACCOUNT:
      return { ...state, bankAccounts: concat(state.bankAccounts, action.data) };
    default:
      return state;
  }
};
