import { createContext, useContext } from 'react';

import { AppContextInterface } from 'types';
import { Time } from './time';
import { Form } from './form';

const Context = createContext<AppContextInterface>({} as AppContextInterface);

export const useApp = () => useContext(Context);

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const time = Time();
  const form = Form();

  return <Context.Provider value={{ ...time, ...form }} children={children} />;
};

export default StateProvider;
