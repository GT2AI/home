import React from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Flex,
  useBreakpointValue,
  useColorMode,
  Icon,
  Button,
  SlideFade
} from '@chakra-ui/react';
import { FiPackage } from 'react-icons/fi';
import ProductCard from './ProductCard';

const ProductShowcase = ({ products }) => {
  const { colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

  // For mobile, render a vertical stack
  // For desktop, render a scrollable horizontal container
  return (
    <Box id="products" as="section" w="full" py={8}>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        mb={8}
      >
        <Heading 
          as="h2" 
          size="lg"
          fontFamily="heading"
          display="flex"
          alignItems="center"
        >
          <Icon as={FiPackage} mr={2} /> Products
        </Heading>

        {/* <Button 
          size="sm" 
          variant="outline"
          fontFamily="mono"
        >
          View All
        </Button> */}
      </Flex>

      <Box
        className={isMobile ? '' : 'scroll-x'}
        pb={4}
        mx={isMobile ? 0 : -4}
        px={isMobile ? 0 : 4}
      >
        <Flex
          direction={isMobile ? 'column' : 'row'}
          gap={6}
          w={isMobile ? '100%' : 'max-content'}
        >
          {products.map((product, index) => (
            <SlideFade 
              key={product.id} 
              in={true} 
              delay={0.1 * index}
              offsetY="20px"
            >
              <ProductCard product={product} />
            </SlideFade>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductShowcase;