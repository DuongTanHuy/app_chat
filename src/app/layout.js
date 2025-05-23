import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './global.css';

export const metadata = {
  title: 'Minimal Chat',
  description: 'A minimal chat application built with Next.js and MUI',
  icons: {
    icon: '/favicon/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
