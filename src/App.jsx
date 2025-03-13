// src/App.jsx
import React from 'react';
import { AppShell } from '@mantine/core';
import ThemeProvider from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <AppShell
        padding="md"
        header={<Header />}
        footer={<Footer />}
        styles={(theme) => ({
          main: {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            minHeight: 'calc(100vh - 120px)', // Subtract header and footer height
          },
        })}
      >
        <HomePage />
      </AppShell>
    </ThemeProvider>
  );
}

export default App;