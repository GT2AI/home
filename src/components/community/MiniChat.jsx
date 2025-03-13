import React, { useState, useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorMode,
  Flex,
  FormControl,
  Divider
} from '@chakra-ui/react';
import { FiSend, FiThumbsUp } from 'react-icons/fi';
import { formatDistanceToNow } from 'date-fns';

const MiniChat = ({ comments }) => {
  const { colorMode } = useColorMode();
  const [message, setMessage] = useState('');
  const [localComments, setLocalComments] = useState(comments || []);
  const inputRef = useRef(null);

  // Handle submitting a new message
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (message.trim()) {
      const newComment = {
        id: `local-${Date.now()}`,
        author: { name: 'You', avatar: null },
        text: message,
        timestamp: new Date().toISOString(),
        likes: 0,
        isLocal: true
      };
      
      setLocalComments([...localComments, newComment]);
      setMessage('');
    }
  };

  // Handle liking a comment
  const handleLike = (id) => {
    setLocalComments(localComments.map(comment => 
      comment.id === id 
        ? { ...comment, likes: comment.likes + 1, isLikedByUser: true } 
        : comment
    ));
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
      display="flex"
      flexDirection="column"
    >
      <Heading as="h3" size="md" mb={4}>
        Community Chat
      </Heading>

      {/* Comments List */}
      <VStack 
        spacing={3} 
        align="stretch" 
        flex="1" 
        overflowY="auto"
        mb={4}
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
        {localComments.map((comment) => (
          <Box
            key={comment.id}
            p={3}
            borderRadius="md"
            bg={comment.isLocal 
              ? colorMode === 'dark' ? 'blue.900' : 'blue.50'
              : colorMode === 'dark' ? 'gray.700' : 'gray.100'
            }
            borderWidth={comment.isLocal ? '1px' : '0'}
            borderColor={colorMode === 'dark' ? 'blue.700' : 'blue.200'}
          >
            <HStack spacing={3} align="flex-start">
              <Avatar 
                size="sm" 
                name={comment.author.name} 
                src={comment.author.avatar}
                bg={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
              />
              <Box flex="1">
                <Flex justify="space-between" mb={1}>
                  <Text fontWeight="medium" fontSize="sm">
                    {comment.author.name}
                  </Text>
                  <Text fontSize="xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>
                    {formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true })}
                  </Text>
                </Flex>
                <Text fontSize="sm">{comment.text}</Text>
                <HStack spacing={1} mt={1}>
                  <IconButton
                    aria-label="Like comment"
                    icon={<FiThumbsUp />}
                    size="xs"
                    variant="ghost"
                    isDisabled={comment.isLikedByUser}
                    color={comment.isLikedByUser ? 'brand.500' : undefined}
                    onClick={() => handleLike(comment.id)}
                  />
                  <Text fontSize="xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>
                    {comment.likes}
                  </Text>
                </HStack>
              </Box>
            </HStack>
          </Box>
        ))}
      </VStack>

      <Divider mb={4} />

      {/* New message form */}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputGroup size="md">
            <Input
              placeholder="Add a comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              pr="2.5rem"
              ref={inputRef}
              bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
              border="none"
              _hover={{ bg: colorMode === 'dark' ? 'gray.600' : 'gray.200' }}
              _focus={{ 
                bg: colorMode === 'dark' ? 'gray.600' : 'gray.200',
                borderColor: 'brand.500',
                boxShadow: `0 0 0 1px var(--chakra-colors-brand-500)`
              }}
            />
            <InputRightElement>
              <IconButton
                aria-label="Send message"
                icon={<FiSend />}
                size="sm"
                variant="ghost"
                isDisabled={!message.trim()}
                onClick={handleSubmit}
                colorScheme="brand"
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
    </Box>
  );
};

export default MiniChat;