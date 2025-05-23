'use client';

import { SettingsDrawer, SettingsProvider } from 'src/components/settings';
import { SnackbarProvider } from 'src/components/snackbar';
import ProgressBar from 'src/components/progress-bar';
import { AuthProvider } from 'src/auth/context';
import ThemeProvider from 'src/theme';

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <SettingsProvider
        defaultSettings={{
          themeMode: 'light', // 'light' | 'dark'
          themeDirection: 'ltr', //  'rtl' | 'ltr'
          themeContrast: 'default', // 'default' | 'bold'
          themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
          themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
          themeStretch: false,
        }}
      >
        <ThemeProvider>
          <SnackbarProvider>
            <SettingsDrawer />
            <ProgressBar />

            {children}
          </SnackbarProvider>
        </ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}
