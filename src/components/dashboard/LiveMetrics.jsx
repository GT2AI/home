import React from 'react';
import { 
  Box, 
  Heading, 
  SimpleGrid, 
  useColorMode,
  Flex,
  VStack,
  Text,
  Icon,
  HStack,
  Badge
} from '@chakra-ui/react';
import { 
  FiUsers,
  FiBarChart2,
  FiServer,
  FiDatabase
} from 'react-icons/fi';
import MetricCard from './MetricCard';
import PulseVisualization from './PulseVisualization';
import ErrorLogsFeed from './ErrorLogsFeed';

const LiveMetrics = ({ data }) => {
  const { colorMode } = useColorMode();
  const { systemMetrics, logs } = data;

  return (
    <Box 
      id="metrics"
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
        <Icon as={FiBarChart2} mr={2} /> Live Metrics
        <Badge ml={2} colorScheme="green" variant="subtle" fontSize="xs">
          Live
        </Badge>
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={10}>
        <MetricCard 
          icon={FiUsers}
          title="Active Users"
          value={systemMetrics.activeUsers}
          change={+5}
          colorScheme="blue"
        />
        <MetricCard 
          icon={FiBarChart2}
          title="Requests / Min"
          value={systemMetrics.requestsPerMinute}
          change={-3}
          colorScheme="purple"
        />
        <MetricCard 
          icon={FiServer}
          title="Server Load"
          value={`${systemMetrics.serverLoad}%`}
          change={+2.5}
          colorScheme="orange"
        />
        <MetricCard 
          icon={FiDatabase}
          title="Memory Usage"
          value={`${systemMetrics.memoryUsage}%`}
          change={-1.2}
          colorScheme="green"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <PulseVisualization />
        <ErrorLogsFeed logs={logs} />
      </SimpleGrid>
    </Box>
  );
};

export default LiveMetrics;