import React from 'react';
import { 
  Box, 
  Stat, 
  StatLabel, 
  StatNumber, 
  StatHelpText, 
  StatArrow, 
  useColorMode,
  Icon,
  Flex
} from '@chakra-ui/react';

const MetricCard = ({ title, value, change, icon, colorScheme = 'blue' }) => {
  const { colorMode } = useColorMode();
  const isPositiveChange = change >= 0;

  // Color mapping based on colorScheme
  const getColors = () => {
    const colorMap = {
      blue: {
        light: { bg: 'blue.50', icon: 'blue.500', text: 'blue.800' },
        dark: { bg: 'blue.900', icon: 'blue.300', text: 'white' }
      },
      green: {
        light: { bg: 'green.50', icon: 'green.500', text: 'green.800' },
        dark: { bg: 'green.900', icon: 'green.300', text: 'white' }
      },
      purple: {
        light: { bg: 'purple.50', icon: 'purple.500', text: 'purple.800' },
        dark: { bg: 'purple.900', icon: 'purple.300', text: 'white' }
      },
      orange: {
        light: { bg: 'orange.50', icon: 'orange.500', text: 'orange.800' },
        dark: { bg: 'orange.900', icon: 'orange.300', text: 'white' }
      },
      red: {
        light: { bg: 'red.50', icon: 'red.500', text: 'red.800' },
        dark: { bg: 'red.900', icon: 'red.300', text: 'white' }
      },
      gray: {
        light: { bg: 'gray.50', icon: 'gray.500', text: 'gray.800' },
        dark: { bg: 'gray.800', icon: 'gray.300', text: 'white' }
      }
    };

    return colorMap[colorScheme][colorMode === 'dark' ? 'dark' : 'light'];
  };

  const colors = getColors();

  return (
    <Box
      p={5}
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      borderRadius="lg"
      boxShadow="md"
      borderWidth="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
        borderColor: `${colorScheme}.${colorMode === 'dark' ? '700' : '300'}`
      }}
    >
      <Flex justify="space-between" align="flex-start">
        <Stat>
          <StatLabel color={colorMode === 'dark' ? 'gray.400' : 'gray.500'} fontSize="sm">
            {title}
          </StatLabel>
          <StatNumber fontSize="2xl" mt={1} color={colorMode === 'dark' ? 'white' : 'gray.800'}>
            {value}
          </StatNumber>
          {change !== undefined && (
            <StatHelpText>
              <StatArrow type={isPositiveChange ? 'increase' : 'decrease'} />
              {Math.abs(change)}%
            </StatHelpText>
          )}
        </Stat>
        <Box
          p={2}
          borderRadius="md"
          bg={colors.bg}
          color={colors.icon}
        >
          <Icon as={icon} boxSize={5} />
        </Box>
      </Flex>
    </Box>
  );
};

export default MetricCard;