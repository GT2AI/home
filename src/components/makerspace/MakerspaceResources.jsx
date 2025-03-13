import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Progress,
  Text,
  HStack,
  VStack,
  Flex,
  useColorMode,
  Badge,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider
} from '@chakra-ui/react';
import { FiServer, FiCpu, FiHardDrive, FiDatabase } from 'react-icons/fi';
import DocumentationHub from './DocumentationHub';

const MakerspaceResources = ({ resources }) => {
  const { colorMode } = useColorMode();
  const { gpuClusters, storageUsed, activeProjects, recentTools } = resources;

  return (
    <Box 
      id="makerspace"
      as="section"
      w="full"
      py={8}
    >
      <Heading 
        as="h2" 
        size="lg"
        mb={6}
        fontFamily="heading"
        display="flex"
        alignItems="center"
      >
        <Icon as={FiServer} mr={2} /> AI Makerspace
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {/* GPU Resources */}
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
              <Icon as={FiCpu} mr={2} /> GPU Resources
            </Heading>
            
            <Badge colorScheme="green">
              {gpuClusters.reduce((acc, cluster) => acc + cluster.availableGPUs, 0)} Available
            </Badge>
          </HStack>

          <VStack spacing={4} align="stretch">
            {gpuClusters.map((cluster) => (
              <Box key={cluster.name}>
                <Flex justify="space-between" mb={1}>
                  <Text fontWeight="medium">{cluster.name}</Text>
                  <Text fontSize="sm">
                    {cluster.availableGPUs} / {cluster.totalGPUs} GPUs available
                  </Text>
                </Flex>
                
                <Progress 
                  value={cluster.utilizationRate} 
                  colorScheme={
                    cluster.utilizationRate > 90 ? 'red' : 
                    cluster.utilizationRate > 70 ? 'orange' : 'green'
                  }
                  size="sm"
                  borderRadius="full"
                  mb={1}
                />
                
                <Flex justify="space-between">
                  <Text fontSize="xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
                    {cluster.utilizationRate}% utilization
                  </Text>
                  <Text fontSize="xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
                    {cluster.queuedJobs} jobs in queue
                  </Text>
                </Flex>
              </Box>
            ))}
          </VStack>

          <Divider my={4} />

          <SimpleGrid columns={2} spacing={4}>
            <Stat>
              <StatLabel color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} fontSize="xs">
                Storage Used
              </StatLabel>
              <Flex align="center">
                <Icon as={FiHardDrive} mr={2} />
                <StatNumber fontSize="lg">{storageUsed}%</StatNumber>
              </Flex>
              <Progress 
                value={storageUsed} 
                size="xs" 
                colorScheme={
                  storageUsed > 90 ? 'red' : 
                  storageUsed > 70 ? 'orange' : 'green'
                }
                mt={1}
              />
            </Stat>
            
            <Stat>
              <StatLabel color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} fontSize="xs">
                Active Projects
              </StatLabel>
              <Flex align="center">
                <Icon as={FiDatabase} mr={2} />
                <StatNumber fontSize="lg">{activeProjects}</StatNumber>
              </Flex>
              <StatHelpText fontSize="xs">
                {recentTools[0]?.name} is most used
              </StatHelpText>
            </Stat>
          </SimpleGrid>
        </Box>

        {/* Documentation Hub */}
        <DocumentationHub recentTools={recentTools} />
      </SimpleGrid>
    </Box>
  );
};

export default MakerspaceResources;