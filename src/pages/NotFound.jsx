import React from 'react';
import { Box, Heading, Text, Button, VStack, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  const { colorMode } = useColorMode();

  return (
    <Box 
      textAlign="center" 
      py={20} 
      px={6} 
      minH="70vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={8}>
        <Box 
          display="inline-block" 
          p={2}
          bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
          borderRadius="md"
          fontFamily="mono"
          fontSize="lg"
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: `10px solid ${colorMode === 'dark' ? '#1A202C' : '#EDF2F7'}`
          }}
        >
          <Text
            fontFamily="mono"
            color={colorMode === 'dark' ? 'red.300' : 'red.500'}
          >
            Error 404
          </Text>
        </Box>
        
        <Heading 
          as="h1" 
          size="xl" 
          bgGradient={colorMode === 'dark' 
            ? 'linear(to-r, red.300, red.500)'
            : 'linear(to-r, red.500, red.700)'
          }
          bgClip="text"
        >
          Page Not Found
        </Heading>
        
        <Text fontSize="lg">
          The page you're looking for doesn't exist or has been moved.
        </Text>
        
        <Button
          as={RouterLink}
          to="/"
          colorScheme="brand"
          bgGradient={colorMode === 'dark' 
            ? 'linear(to-r, brand.400, brand.600)'
            : 'linear(to-r, brand.500, brand.700)'
          }
          size="lg"
          fontFamily="mono"
        >
          Return to Homepage
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFound;