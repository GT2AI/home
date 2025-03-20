import React from 'react';
import {
  Box,
  Heading,
  Text,
  Badge,
  HStack,
  VStack,
  Flex,
  Image,
  useColorMode,
  Button,
  Link,
  Avatar,
  AvatarGroup,
  Icon,
  Tooltip,
  Stack
} from '@chakra-ui/react';
import { 
  FiExternalLink, 
  FiGithub, 
  FiUsers, 
  FiClock 
} from 'react-icons/fi';
import { format, formatDistanceToNow } from 'date-fns';

const ProductCard = ({ product }) => {
  const { colorMode } = useColorMode();
  const {
    id,
    name,
    screenshot,
    description,
    usage,
    uptime,
    technologies,
    team,
    url,
    repo,
    lastUpdate
  } = product;

  return (
    <Box
      id={id}
      minW={{ base: '100%', md: '350px' }}
      maxW={{ base: '100%', md: '350px' }}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      borderWidth="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
        borderColor: colorMode === 'dark' ? 'blue.700' : 'blue.200'
      }}
    >
      {/* Preview Image */}
      <Box 
        bg={colorMode === 'dark' ? 'blue.900' : 'blue.50'} 
        h="140px" 
        position="relative" 
        overflow="hidden"
      >
        <Image
          src={screenshot}
          alt={`${name} preview`}
          height="140px"
          width="100%"
          objectFit="cover"
        />
        
        {/* Uptime Badge */}
        <Tooltip label="Uptime percentage" hasArrow>
          <Badge
            position="absolute"
            top="2"
            right="2"
            px="2"
            py="1"
            borderRadius="full"
            bg={uptime > 99.5 ? 'green.500' : uptime > 98 ? 'yellow.500' : 'red.500'}
            color="white"
            fontWeight="medium"
            fontSize="xs"
          >
            {uptime}% Uptime
          </Badge>
        </Tooltip>
      </Box>

      <Box p={4}>
        <Heading as="h3" size="md" mb={2} fontFamily="heading">
          {name}
        </Heading>
        
        <Text 
          fontSize="sm" 
          color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} 
          mb={4}
          height="40px"
          noOfLines={2}
        >
          {description}
        </Text>
        
        {/* Technologies */}
        <HStack spacing={2} mb={4} flexWrap="wrap">
          {technologies.map(tech => (
            <Badge 
              key={tech} 
              variant="tech" 
              fontFamily="mono"
              mb={1}
            >
              {tech.toLowerCase()}
            </Badge>
          ))}
        </HStack>
        
        {/* Stats */}
        <HStack spacing={4} mb={4}>
          <Flex align="center">
            <Icon as={FiUsers} mr={1} />
            <Text fontSize="sm" fontWeight="medium">
              {usage} users
            </Text>
          </Flex>
          
          <Flex align="center">
            <Icon as={FiClock} mr={1} />
            <Tooltip 
              label={format(new Date(lastUpdate), 'PPpp')}
              hasArrow
            >
              <Text fontSize="sm">
                {formatDistanceToNow(new Date(lastUpdate), { addSuffix: true })}
              </Text>
            </Tooltip>
          </Flex>
        </HStack>
        
        {/* Team */}
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontSize="sm" fontWeight="medium">Team:</Text>
          <AvatarGroup size="sm" max={3}>
            {team.map(member => (
              <Tooltip key={member.id} label={member.name} hasArrow>
                <Avatar name={member.name} src={member.avatar} />
              </Tooltip>
            ))}
          </AvatarGroup>
        </Flex>
        
        {/* Actions */}
        <Stack direction="row" spacing={3} mt={4}>
          <Button 
            as={Link}
            href={url}
            target="_blank"
            colorScheme="brand" 
            leftIcon={<FiExternalLink />}
            size="sm"
            flex="1"
          >
            Use Now
          </Button>
          
          <Button
            as={Link}
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            leftIcon={<FiGithub />}
            size="sm"
            flex="1"
          >
            Contribute
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;