import Navbar from 'components/Navbar/Navbar';
import { FunctionComponent, ReactNode } from 'react';

type LayoutTypes = {
  hideNavigation: boolean;
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutTypes> = ({ hideNavigation, children }) => {
  return (
    <>
      {!hideNavigation && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
