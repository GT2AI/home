import React, { useContext } from 'react';
import { Box, Container, VStack, Heading, Text, useColorMode } from '@chakra-ui/react';
import LiveMetrics from '../components/dashboard/LiveMetrics';
import ProductShowcase from '../components/products/ProductShowcase';
import CommunityEngagement from '../components/community/CommunityEngagement';
import MakerspaceResources from '../components/makerspace/MakerspaceResources';
import ApplicationSection from '../components/application/ApplicationSection';
import { DataContext } from '../contexts/DataContext';

const HomePage = () => {
  const { colorMode } = useColorMode();
  const { simulatedData } = useContext(DataContext);

  return (
    <Box as="main" w="100%">
      {/* Hero Section */}
      <Box 
        bg={colorMode === 'dark' ? 'gray.800' : 'blue.50'} 
        py={[10, 20]} 
        position="relative"
        overflow="hidden"
      >
        {/* Background pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity="0.05"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxwYXRoIGQ9Ik0wIDBoMXYxSDB6TTQgNGgxdjFINHpNOCA4aDF2MUg4ek0xMiAxMmgxdjFoLTF6TTE2IDE2aDF2MWgtMXoiIGZpbGw9IiNmZmYiPjwvcGF0aD48L3N2Zz4=')"
          }}
          backgroundSize="20px 20px"
        />
        
        <Container maxW="container.xl" position="relative">
          <VStack spacing={6} alignItems="center" textAlign="center">
            <Heading 
              as="h1" 
              size="3xl" 
              fontFamily="heading"
              bgGradient={colorMode === 'dark' 
                ? 'linear(to-r, brand.200, brand.400)'
                : 'linear(to-r, brand.500, brand.700)'
              }
              bgClip="text"
              letterSpacing="tight"
            >
              GT<sup>AI</sup>
            </Heading>

            <Text fontSize="xl" maxW="container.md" className="cursor-blink">
              Student-built AI products powering Georgia Tech
            </Text>
          </VStack>
        </Container>
      </Box>
      
      {/* Live Metrics Dashboard */}
      <Box py={10}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <LiveMetrics data={simulatedData} />
            
            <ProductShowcase products={simulatedData.products} />
            
            <CommunityEngagement 
              reactions={simulatedData.reactions} 
              comments={simulatedData.comments} 
            />
            
            <MakerspaceResources resources={simulatedData.makerspaceResources} />
            
            <ApplicationSection />
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;