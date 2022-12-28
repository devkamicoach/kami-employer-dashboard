import Navbar from 'components/Navbar/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';
import { FunctionComponent, ReactNode } from 'react';

type LayoutTypes = {
  hideNavigation: boolean;
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutTypes> = ({ hideNavigation, children }) => {
  return (
    <>
      {!hideNavigation && <Navbar />}
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
