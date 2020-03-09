import React, { createContext } from 'react';
import { StateWithActions } from 'types/state';
import useState from './use-state';

interface ProviderPropTypes {
  children: React.ReactNode;
  defaultState?: {
    [k: string]: undefined | boolean | string | number;
  };
}

function GlobalState(useValue: (state: any) => StateWithActions) {
  const Context: React.Context<any> = createContext(null);

  const Provider = ({ children, defaultState }: ProviderPropTypes) => {
    const value = useValue(defaultState);

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return {
    Context,
    Provider,
  };
}

export default GlobalState(useState);
