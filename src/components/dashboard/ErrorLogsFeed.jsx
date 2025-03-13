import React, { useRef, useEffect } from 'react';
import { 
  Box, 
  Heading, 
  VStack, 
  Text, 
  HStack, 
  Badge, 
  Icon,
  useColorMode,
  Flex
} from '@chakra-ui/react';
import { MdInfo, MdWarning, MdError } from 'react-icons/md';
import { format } from 'date-fns';

const ErrorLogsFeed = ({ logs }) => {
  const { colorMode } = useColorMode();
  const scrollRef = useRef(null);
  
  // Auto-scroll to bottom when new logs come in
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // Get color and icon for log type
  const getLogTypeProps = (type) => {
    switch (type) {
      case 'error':
        return {
          icon: MdError,
          color: 'red',
          bg: colorMode === 'dark' ? 'red.900' : 'red.50'
        };
      case 'warning':
        return {
          icon: MdWarning,
          color: 'orange',
          bg: colorMode === 'dark' ? 'orange.900' : 'orange.50'
        };
      case 'info':
      default:
        return {
          icon: MdInfo,
          color: 'blue',
          bg: colorMode === 'dark' ? 'blue.900' : 'blue.50'
        };
    }
  };

  return (
    <Box
      p={5}
      borderRadius="lg"
      boxShadow="md"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      borderWidth="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
      height="300px"
    >
      <Heading as="h3" size="md" mb={4}>
        System Logs
      </Heading>
      
      <Box 
        ref={scrollRef}
        overflowY="auto" 
        height="220px"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
            background: colorMode === 'dark' ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.05)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: colorMode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
            borderRadius: '24px',
          },
        }}
      >
        <VStack spacing={2} align="stretch">
          {logs.map((log) => {
            const { icon, color, bg } = getLogTypeProps(log.type);
            return (
              <Box
                key={log.id}
                p={2}
                borderRadius="md"
                bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
                borderLeft="3px solid"
                borderLeftColor={`${color}.500`}
                fontSize="sm"
                fontFamily="mono"
              >
                <Flex justify="space-between" mb={1}>
                  <HStack>
                    <Icon as={icon} color={`${color}.500`} />
                    <Badge 
                      colorScheme={color} 
                      variant="subtle"
                      px={2}
                      rounded="md"
                    >
                      {log.type}
                    </Badge>
                    <Badge 
                      colorScheme="gray" 
                      variant="outline"
                      fontSize="xs"
                      px={1}
                    >
                      {log.source}
                    </Badge>
                  </HStack>
                  <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.500'} fontSize="xs">
                    {format(new Date(log.timestamp), 'HH:mm:ss')}
                  </Text>
                </Flex>
                <Text>{log.message}</Text>
              </Box>
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
};

export default ErrorLogsFeed;