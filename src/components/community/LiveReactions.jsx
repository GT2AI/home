import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  useColorMode,
  Flex,
  Badge
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const LiveReactions = ({ reactions }) => {
  const { colorMode } = useColorMode();
  const [userReactions, setUserReactions] = useState({});

  // Handle reaction click
  const handleReactionClick = (emoji) => {
    setUserReactions(prev => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1
    }));
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
      position="relative"
      overflow="hidden"
    >
      <Flex 
        justify="space-between" 
        align="center" 
        mb={4}
      >
        <Heading as="h3" size="md">
          Live Reactions
        </Heading>
        <Badge colorScheme="green" variant="subtle">Live</Badge>
      </Flex>

      <VStack spacing={6} align="stretch">
        {/* Reaction counts */}
        <Box
          className="scroll-x hide-scrollbar"
          display="flex"
          overflowX="auto"
          py={2}
        >
          <HStack spacing={4} minW="max-content">
            {reactions.map(({ emoji, count }) => {
              const userCount = userReactions[emoji] || 0;
              const totalCount = count + userCount;
              
              return (
                <VStack key={emoji} spacing={1}>
                  <Button
                    variant="outline"
                    borderRadius="full"
                    size="md"
                    height="50px"
                    width="50px"
                    fontSize="xl"
                    onClick={() => handleReactionClick(emoji)}
                    position="relative"
                    _hover={{ transform: 'scale(1.1)' }}
                    borderColor={userCount > 0 
                      ? colorMode === 'dark' ? 'brand.700' : 'brand.200' 
                      : colorMode === 'dark' ? 'gray.700' : 'gray.200'}
                    borderWidth={userCount > 0 ? '2px' : '1px'}
                  >
                    {emoji}
                    
                    {/* Show animation when user clicks */}
                    {userCount > 0 && (
                      <MotionBox
                        position="absolute"
                        top="-2"
                        right="-2"
                        width="16px"
                        height="16px"
                        borderRadius="full"
                        bg="brand.500"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Button>
                  <Text fontSize="sm" fontWeight="medium">
                    {totalCount}
                  </Text>
                </VStack>
              );
            })}
          </HStack>
        </Box>

        {/* Prompts to react */}
        <Box 
          p={4} 
          borderRadius="md"
          bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
          textAlign="center"
        >
          <Text fontSize="sm">
            Share your reaction to the GT^AI platform!
          </Text>
        </Box>
        
        {/* Recent reactions animation */}
        <Box position="relative" height="60px">
          {/* This would be a place for floating emoji animations */}
          <Text 
            fontSize="xs" 
            color="gray.500" 
            position="absolute" 
            bottom="0" 
            left="0"
          >
            {Object.entries(userReactions).reduce((sum, [_, count]) => sum + count, 0)} 
            reactions from you in this session
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default LiveReactions;