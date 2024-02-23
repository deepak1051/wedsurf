import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container mx-auto px-4 max-w-lg">
      <Outlet />
    </div>
  );
};

export default Layout;
