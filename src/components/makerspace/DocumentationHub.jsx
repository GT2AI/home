import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  InputGroup,
  Input,
  InputLeftElement,
  useColorMode,
  Link,
  Icon,
  Progress,
  SimpleGrid,
  Divider,
  Flex
} from '@chakra-ui/react';
import { FiBook, FiSearch, FiFileText, FiCode, FiTool, FiPackage } from 'react-icons/fi';

// Icon components
const FiCpu = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
);

const FiUsers = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

// Mock documentation links
const mockDocs = [
    { id: 1, title: 'Getting Started Guide', category: 'guides', icon: FiFileText, endpoint: 'started' },
    { id: 2, title: 'GPU Access Tutorial', category: 'tutorials', icon: FiCpu, endpoint: 'gps'},
    { id: 3, title: 'Python Best Practices', category: 'guides', icon: FiCode, endpoint: 'practices'},
    { id: 4, title: 'Model Deployment', category: 'tutorials', icon: FiPackage, endpoint: 'deployment'},
    { id: 5, title: 'API Documentation', category: 'api', icon: FiTool, endpoint: 'api' },
    { id: 6, title: 'Contributing Guidelines', category: 'community', icon: FiUsers, endpoint: 'contributions' },
  ];

const DocumentationHub = ({ recentTools }) => {
  const { colorMode } = useColorMode();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter docs based on search query
  const filteredDocs = searchQuery
    ? mockDocs.filter(doc => 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockDocs;

  return (
    <Box
      p={5}
      borderRadius="lg"
      boxShadow="md"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      borderWidth="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
    >
      <HStack justify="space-between" mb={4}>
        <Heading as="h3" size="md" display="flex" alignItems="center">
          <Icon as={FiBook} mr={2} /> Documentation
        </Heading>
      </HStack>

      {/* Search box */}
      <InputGroup mb={4}>
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color={colorMode === 'dark' ? 'gray.400' : 'gray.500'} />
        </InputLeftElement>
        <Input 
          placeholder="Search documentation..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
          border="none"
          _focus={{
            bg: colorMode === 'dark' ? 'gray.600' : 'gray.200',
            boxShadow: 'none',
          }}
        />
      </InputGroup>

      {/* Documentation links */}
      <VStack spacing={2} align="stretch" mb={4} maxH="160px" overflowY="auto">
        {filteredDocs.map((doc) => (
          <Link
            key={doc.id}
            href={`https://gt-ai-docs.vercel.app/${doc.endpoint}`}
            p={2}
            borderRadius="md"
            display="flex"
            alignItems="center"
            _hover={{
              bg: colorMode === 'dark' ? 'gray.700' : 'gray.100',
              textDecoration: 'none',
            }}
          >
            <Icon as={doc.icon} mr={2} />
            <Text fontSize="sm">{doc.title}</Text>
          </Link>
        ))}
      </VStack>

      <Divider my={4} />

      {/* Tools usage */}
      <Text fontSize="sm" fontWeight="medium" mb={2}>
        Most Used Tools
      </Text>
      <SimpleGrid columns={1} spacing={3}>
        {recentTools.map((tool) => (
          <Box key={tool.name}>
            <Flex justify="space-between" mb={1}>
              <Text fontSize="sm">{tool.name}</Text>
              <Text fontSize="xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
                {tool.usage}%
              </Text>
            </Flex>
            <Progress 
              value={tool.usage} 
              size="xs" 
              colorScheme="brand"
              borderRadius="full"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DocumentationHub;