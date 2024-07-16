import { Suspense } from 'react';
import { AppBar } from '../AppBar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div style={{ maxWidth: '100vw', margin: '0 auto' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
