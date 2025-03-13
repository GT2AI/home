import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Heading, 
  useColorMode,
  Text
} from '@chakra-ui/react';

// This is a placeholder component that will be replaced with a real visualization
// using D3 or another visualization library in the future
const PulseVisualization = () => {
  const { colorMode } = useColorMode();
  const [pulseData, setPulseData] = useState([]);
  
  // Generate random pulse data
  useEffect(() => {
    const generateData = () => {
      const now = Date.now();
      const newPoint = {
        time: now,
        value: Math.random() * 100
      };
      
      setPulseData(prev => {
        const newData = [...prev, newPoint];
        // Keep only the last 50 points
        if (newData.length > 50) {
          return newData.slice(-50);
        }
        return newData;
      });
    };
    
    // Initial data
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: Date.now() - (20 - i) * 1000,
      value: Math.random() * 100
    }));
    setPulseData(initialData);
    
    // Update every second
    const interval = setInterval(generateData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      p={5}
      borderRadius="lg"
      boxShadow="md"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      borderWidth="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
      height="300px"
      position="relative"
      overflow="hidden"
    >
      <Heading as="h3" size="md" mb={4}>
        Activity Pulse
      </Heading>

      {/* Placeholder visualization */}
      <Box height="220px" position="relative">
        <Box 
          position="absolute" 
          bottom="0" 
          left="0" 
          right="0" 
          height="200px"
          display="flex"
          alignItems="flex-end"
        >
          {pulseData.map((point, index) => (
            <Box
              key={point.time}
              height={`${point.value * 1.5}px`}
              width="8px"
              borderRadius="2px"
              mx="1px"
              bg={`hsl(${200 + point.value}, 70%, 50%)`}
              opacity={0.7 + (index / pulseData.length) * 0.3}
              transition="height 0.3s ease"
            />
          ))}
        </Box>
      </Box>
      
      <Text 
        position="absolute" 
        bottom="2" 
        right="4" 
        fontSize="xs" 
        color={colorMode === 'dark' ? 'gray.500' : 'gray.400'}
      >
        Live data simulation
      </Text>
    </Box>
  );
};

export default PulseVisualization;