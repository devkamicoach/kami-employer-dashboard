import { createContext, useContext, useReducer } from 'react';
import type { Dispatch } from 'react';

const INITIAL_STATE = {
  open: false,
  title: undefined,
  description: undefined,
  details: undefined,
  price: undefined,
  testimonial: undefined,
};

const ModuleContext = createContext(INITIAL_STATE);
const ModuleDispatchContext = createContext((() => null) as Dispatch<any>);

export const ModuleProvider = ({ children }: any) => {
  const [module, dispatch] = useReducer(moduleReducer, INITIAL_STATE);

  return (
    <ModuleContext.Provider value={module}>
      <ModuleDispatchContext.Provider value={dispatch}>{children}</ModuleDispatchContext.Provider>
    </ModuleContext.Provider>
  );
};

export const useModule = () => {
  return useContext(ModuleContext);
};

export const useModuleDispatch = () => {
  return useContext(ModuleDispatchContext);
};

function moduleReducer(module: any, action: any) {
  switch (action.type) {
    case 'open': {
      return { open: true, ...action.content };
    }
    case 'close': {
      return { open: false };
    }
  }
}
