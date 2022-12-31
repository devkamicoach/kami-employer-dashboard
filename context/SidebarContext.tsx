import { createContext, useContext, useReducer } from 'react';
import type { Dispatch } from 'react';

const SidebarContext = createContext(null);
const SidebarDispatchContext = createContext((() => null) as Dispatch<any>);

export const SidebarProvider = ({ open = false, children }: any) => {
  const [module, dispatch] = useReducer(sidebarReducer, { open });

  return (
    <SidebarContext.Provider value={module}>
      <SidebarDispatchContext.Provider value={dispatch}>{children}</SidebarDispatchContext.Provider>
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export const useSidebarDispatch = () => {
  return useContext(SidebarDispatchContext);
};

function sidebarReducer(module: any, action: any) {
  switch (action.type) {
    case 'open': {
      return { open: true, ...action.content };
    }
    case 'close': {
      return { open: false };
    }
  }
}
