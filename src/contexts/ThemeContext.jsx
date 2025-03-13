// src/contexts/ThemeContext.jsx
import React, { useState, useEffect } from 'react';
import { MantineProvider } from '@mantine/core';

export function ThemeProvider({ children }) {
  const [colorScheme, setColorScheme] = useState('dark');
  
  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('gtai-theme');
    if (savedTheme) {
      setColorScheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setColorScheme('light');
    }
  }, []);

  const toggleColorScheme = (value) => {
    const newColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(newColorScheme);
    localStorage.setItem('gtai-theme', newColorScheme);
  };

  return (
    <MantineProvider
      theme={{
        colorScheme,
        primaryColor: 'blue',
        defaultRadius: 'md',
        colors: {
          // You can define custom colors here
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ThemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
        {children}
      </ThemeContext.Provider>
    </MantineProvider>
  );
}

// Create the context
const ThemeContext = React.createContext({
  colorScheme: 'dark',
  toggleColorScheme: () => {},
});

// Hook for accessing the theme context
export const useTheme = () => React.useContext(ThemeContext);

export default ThemeProvider;