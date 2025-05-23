import React from 'react';
import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard/layout';

const layout = ({ children }) => {
  return (
    // <AuthGuard>
    <DashboardLayout>{children}</DashboardLayout>
    // </AuthGuard>
  );
};

export default layout;
