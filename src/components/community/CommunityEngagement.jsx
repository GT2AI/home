import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  useColorMode,
  Icon,
  VStack
} from '@chakra-ui/react';
import { FiUsers } from 'react-icons/fi';
import LiveReactions from './LiveReactions';
import MiniChat from './MiniChat';

const CommunityEngagement = ({ reactions, comments }) => {
  const { colorMode } = useColorMode();

  return (
    <Box 
      id="community"
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
        <Icon as={FiUsers} mr={2} /> Community
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <LiveReactions reactions={reactions} />
        <MiniChat comments={comments} />
      </SimpleGrid>
    </Box>
  );
};

export default CommunityEngagement;