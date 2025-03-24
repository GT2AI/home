import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  useColorMode,
  Icon,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider
} from '@chakra-ui/react';
import { FiUsers, FiCode, FiTool, FiStar } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

const ApplicationSection = () => {
  const { colorMode } = useColorMode();

  return (
    <Box 
      id="apply"
      as="section"
      w="full"
      py={8}
    >
      <VStack spacing={8} mb={12}>
        <Heading 
          as="h2" 
          size="lg"
          fontFamily="heading"
          display="flex"
          alignItems="center"
          textAlign="center"
        >
          <Icon as={FiUsers} mr={2} /> Join GT^AI
        </Heading>
        
        <Text 
          fontSize="lg"
          textAlign="center"
          maxW="container.md"
        >
          Help build the next generation of AI-powered tools for the Georgia Tech community
        </Text>
      </VStack>

      <SimpleGrid 
        columns={{ base: 1, md: 2 }} 
        spacing={8}
        maxW="container.lg"
        mx="auto"
      >
        {/* Build a Product Path */}
        <Card variant={colorMode === 'dark' ? 'outline' : 'elevated'}>
          <CardHeader>
            <Heading size="md" display="flex" alignItems="center">
              <Icon as={FiTool} mr={2} /> Build a Product
            </Heading>
          </CardHeader>
          
          <CardBody>
            <VStack spacing={4} align="stretch">
              <Text>
                Have an idea for an AI-powered product that could benefit the GT community? Bring your concept to life with our resources and mentorship.
              </Text>
              
              <Box p={4} bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'} borderRadius="md">
                <VStack spacing={2} align="stretch">
                  <Text fontWeight="medium">What you'll get:</Text>
                  <Text fontSize="sm">• GPU compute resources</Text>
                  <Text fontSize="sm">• Technical mentorship</Text>
                  <Text fontSize="sm">• Project management support</Text>
                  <Text fontSize="sm">• Deployment infrastructure</Text>
                </VStack>
              </Box>
            </VStack>
          </CardBody>
          
          <Divider />
          
          <CardFooter>
            <Button 
              leftIcon={<FiStar />} 
              colorScheme="brand"
              variant="solid"
              width="full"
              as={RouterLink}
              to="/build-product"
            >
              Submit Your Idea
            </Button>
          </CardFooter>
        </Card>

        {/* Join a Team Path */}
        <Card variant={colorMode === 'dark' ? 'outline' : 'elevated'}>
          <CardHeader>
            <Heading size="md" display="flex" alignItems="center">
              <Icon as={FiCode} mr={2} /> Join a Team
            </Heading>
          </CardHeader>
          
          <CardBody>
            <VStack spacing={4} align="stretch">
              <Text>
                Contribute your skills to an existing GT^AI project. We're looking for developers, designers, ML engineers, and project managers.
              </Text>
              
              <Box p={4} bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'} borderRadius="md">
                <VStack spacing={2} align="stretch">
                  <Text fontWeight="medium">Open roles:</Text>
                  <Text fontSize="sm">• Frontend Engineers (React)</Text>
                  <Text fontSize="sm">• ML Engineers (PyTorch, TensorFlow)</Text>
                  <Text fontSize="sm">• Backend Engineers (Python, Node.js)</Text>
                  <Text fontSize="sm">• UX/UI Designers</Text>
                </VStack>
              </Box>
            </VStack>
          </CardBody>
          
          <Divider />
          
          <CardFooter>
            <Button 
              leftIcon={<FiUsers />} 
              colorScheme="brand"
              variant="outline"
              width="full"
              as={RouterLink}
              to="/join-team"
            >
              Apply to Join
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default ApplicationSection;