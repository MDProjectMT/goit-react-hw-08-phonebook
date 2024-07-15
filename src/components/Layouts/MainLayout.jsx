import { Suspense } from 'react';
import { AppBar } from '../AppBar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
