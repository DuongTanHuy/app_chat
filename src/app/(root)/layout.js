'use client';

import { SettingsDrawer } from 'src/components/settings';
import { SnackbarProvider } from 'src/components/snackbar';
import ProgressBar from 'src/components/progress-bar';

export default function RootLayout({ children }) {
  return (
    <SnackbarProvider>
      <SettingsDrawer />
      <ProgressBar />
      {children}
    </SnackbarProvider>
  );
}
