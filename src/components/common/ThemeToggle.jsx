import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { 
  FiMoon, 
  FiSun, 
} from 'react-icons/fi';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <IconButton
      icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
      onClick={toggleColorMode}
      variant="ghost"
      aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
    />
  );
};

export default ThemeToggle;