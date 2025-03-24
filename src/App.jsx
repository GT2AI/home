import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, useColorMode, useToast } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BuildProductPage from './pages/BuildProductPage';
import JoinTeamPage from './pages/JoinTeamPage';
import NotFound from './pages/NotFound';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { DataContext } from './contexts/DataContext';
import { generateSimulatedData } from './utils/mockData';

function App() {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [simulatedData, setSimulatedData] = useState(generateSimulatedData());
  const [pwaInstallPrompt, setPwaInstallPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  // Simulate data updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedData(generateSimulatedData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Listen for PWA install event
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setPwaInstallPrompt(e);
      // Only show install prompt for mobile devices
      if (window.innerWidth < 768) {
        setShowInstallPrompt(true);
      }
    });

    window.addEventListener('appinstalled', () => {
      // Log install to analytics
      console.log('PWA was installed');
      // Hide the prompt
      setShowInstallPrompt(false);
      // Show success toast
      toast({
        title: 'Installed Successfully',
        description: 'GT^AI Homepage has been installed on your device',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', () => {});
      window.removeEventListener('appinstalled', () => {});
    };
  }, [toast]);

  // Handle PWA installation
  const handleInstallClick = () => {
    if (pwaInstallPrompt) {
      pwaInstallPrompt.prompt();
      pwaInstallPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
          setShowInstallPrompt(false);
        } else {
          console.log('User dismissed the install prompt');
        }
      });
    }
  };

  return (
    <DataContext.Provider value={{ simulatedData, pwaInstallPrompt, showInstallPrompt, handleInstallClick }}>
      <Box 
        minH="100vh" 
        bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
        display="flex"
        flexDirection="column"
      >
        <Header />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/build-product" element={<BuildProductPage />} />
            <Route path="/join-team" element={<JoinTeamPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </DataContext.Provider>
  );
}

export default App