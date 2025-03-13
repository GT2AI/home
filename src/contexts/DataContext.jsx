import { createContext } from 'react';

// Create context for simulated data
export const DataContext = createContext({
  simulatedData: null,
  pwaInstallPrompt: null,
  showInstallPrompt: false,
  handleInstallClick: () => {},
});