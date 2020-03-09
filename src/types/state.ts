import { BankAccount } from './bank-account';

export interface State {
  bankAccounts: BankAccount[];
}

export interface StateWithActions {
  state: State;
  actions: {
    addBankAccount: (data: BankAccount) => void;
  };
}
