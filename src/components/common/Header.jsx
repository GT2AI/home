import React, { useState, useContext } from 'react';
import { 
  Box, 
  Container, 
  Flex, 
  HStack, 
  Button, 
  IconButton, 
  useColorMode, 
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Text,
  Link,
  Badge,
  useBreakpointValue
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import { DataContext } from '../../contexts/DataContext';

const Header = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pwaInstallPrompt, handleInstallClick } = useContext(DataContext);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'Community', href: '#community' },
    { name: 'Makerspace', href: '#makerspace' },
    { name: 'Apply', href: '#apply' },
    { name: 'Docs', href: 'https://github.com/gt-ai/docs', external: true },
  ];

  return (
    <Box 
      as="header" 
      position="sticky"
      top="0" 
      zIndex="sticky"
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      boxShadow="sm"
      transition="all 0.2s"
      borderBottom="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
    >
      <Container maxW="container.xl" py={3}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <RouterLink to="/">
            <HStack spacing={2} align="center">
              <Text 
                fontFamily="heading" 
                fontWeight="bold" 
                fontSize="2xl"
              >
                GT<sup>AI</sup>
              </Text>
              <Badge 
                fontSize="xs" 
                colorScheme="brand" 
                variant="outline" 
                rounded="full"
              >
                Beta
              </Badge>
            </HStack>
          </RouterLink>

          {/* Desktop Navigation */}
          {!isMobile && (
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  color={colorMode === 'dark' ? 'gray.200' : 'gray.700'}
                  fontWeight="medium"
                  _hover={{
                    textDecoration: 'none',
                    color: colorMode === 'dark' ? 'white' : 'gray.900',
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </HStack>
          )}

          {/* Action Buttons */}
          <HStack spacing={4}>
            {pwaInstallPrompt && !isMobile && (
              <Button
                size="sm"
                onClick={handleInstallClick}
                variant="outline"
                colorScheme="brand"
              >
                Install App
              </Button>
            )}

            <Link 
              href="https://github.com/gt-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              display={{ base: 'none', md: 'inline-flex' }}
            >
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                colorScheme="gray"
              />
            </Link>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                aria-label="Open menu"
                icon={<HiMenu />}
                variant="ghost"
                onClick={onOpen}
                display={{ base: 'flex', md: 'none' }}
              />
            )}
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={12}>
            <VStack spacing={6} align="flex-start">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  fontSize="lg"
                  fontWeight="medium"
                  w="full"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="https://github.com/gt-ai"
                target="_blank"
                rel="noopener noreferrer"
                fontSize="lg"
                fontWeight="medium"
                w="full"
                display="flex"
                alignItems="center"
              >
                <FaGithub style={{ marginRight: '8px' }} /> GitHub
              </Link>

              {pwaInstallPrompt && (
                <Button
                  size="md"
                  onClick={() => {
                    handleInstallClick();
                    onClose();
                  }}
                  colorScheme="brand"
                  w="full"
                  mt={4}
                >
                  Install App
                </Button>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;