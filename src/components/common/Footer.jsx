import React from 'react';
import { 
  Box, 
  Container, 
  Stack, 
  Text, 
  Link, 
  Flex, 
  Divider, 
  IconButton, 
  useColorMode, 
  HStack,
  Button,
  Icon,
  Tooltip
} from '@chakra-ui/react';
import { 
  FaGithub, 
  FaTwitter, 
  FaDiscord 
} from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';

const Footer = () => {
  const { colorMode } = useColorMode();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
      borderTop="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
    >
      <Container maxW="container.xl" py={8}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
        >
          <Box>
            <Text
              fontFamily="heading"
              fontWeight="bold"
              fontSize="xl"
              mb={3}
            >
              GT<sup>AI</sup>
            </Text>
            <Text fontSize="sm" maxW="xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
              Student-built AI products powering Georgia Tech
            </Text>
          </Box>

          <Stack direction="row" spacing={10}>
            <Stack spacing={4} align="flex-start">
              <Text fontWeight="semibold" fontSize="sm" textTransform="uppercase" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
                Products
              </Text>
              <Stack spacing={3} align="flex-start">
                <Link href="https://gt-ai-search.vercel.app/">GT^Search</Link>
              </Stack>
            </Stack>

            <Stack spacing={4} align="flex-start">
              <Text fontWeight="semibold" fontSize="sm" textTransform="uppercase" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
                Resources
              </Text>
              <Stack spacing={3} align="flex-start">
                <Link href="https://gt-ai-docs.vercel.app/" isExternal>Documentation</Link>
                <Link href="https://coe.gatech.edu/academics/ai-for-engineering/ai-makerspace">AI Makerspace</Link>
                <Link href="https://github.com/GT2AI">Contribute</Link>
              </Stack>
            </Stack>

            <Stack spacing={4} align="flex-start">
              <Text fontWeight="semibold" fontSize="sm" textTransform="uppercase" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
                Community
              </Text>
              <Stack spacing={3} align="flex-start">
              <Link href="#apply">Build a Product</Link>
                <Link href="#apply">Join a Team</Link>
                <Link href="https://github.com/GT2AI" isExternal>GitHub</Link>
                {/* <Link href="#">Events</Link> */}
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Divider my={6} borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'} />

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
            © {currentYear} GT^AI. All rights reserved.
          </Text>

          <HStack spacing={2}>
            <Tooltip label="GitHub" hasArrow placement="top">
              <IconButton
                as={Link}
                href="https://github.com/GT2AI"
                aria-label="GitHub"
                icon={<FaGithub />}
                size="sm"
                colorScheme="gray"
                variant="ghost"
                isExternal
              />
            </Tooltip>
            {/* <Tooltip label="Twitter" hasArrow placement="top">
              <IconButton
                as={Link}
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="sm"
                colorScheme="gray"
                variant="ghost"
                isExternal
              />
            </Tooltip> */}
            <Tooltip label="Discord" hasArrow placement="top">
              <IconButton
                as={Link}
                href="https://discord.gg/tdZvPuTazB"
                aria-label="Discord"
                icon={<FaDiscord />}
                size="sm"
                colorScheme="gray"
                variant="ghost"
                isExternal
              />
            </Tooltip>
          </HStack>

          <Button
            leftIcon={<BsCodeSlash />}
            size="sm"
            variant="outline"
            colorScheme="gray"
            fontFamily="mono"
            as={Link}
            href="https://github.com/GT2AI/home"
            isExternal
          >
            View Source
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer