const components = {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 'md',
      },
      variants: {
        solid: (props) => ({
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            _disabled: {
              bg: 'brand.500',
            },
          },
          _active: { bg: 'brand.700' },
        }),
        outline: (props) => ({
          border: '2px solid',
          borderColor: 'brand.500',
          color: props.colorMode === 'dark' ? 'white' : 'brand.500',
          _hover: {
            bg: props.colorMode === 'dark' ? 'whiteAlpha.100' : 'brand.50',
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'whiteAlpha.200' : 'brand.100',
          },
        }),
        ghost: (props) => ({
          color: props.colorMode === 'dark' ? 'white' : 'brand.500',
          _hover: {
            bg: props.colorMode === 'dark' ? 'whiteAlpha.100' : 'brand.50',
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'whiteAlpha.200' : 'brand.100',
          },
        }),
        terminal: (props) => ({
          fontFamily: 'mono',
          bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.100',
          color: props.colorMode === 'dark' ? 'green.300' : 'green.500',
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'gray.700' : 'gray.300',
          borderRadius: 'md',
          _hover: {
            bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.200',
          },
          _before: {
            content: '"> "',
            fontWeight: 'bold',
            mr: '2',
          },
        }),
      },
      defaultProps: {
        variant: 'solid',
      },
    },
    Card: {
      baseStyle: (props) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          borderRadius: 'lg',
          boxShadow: 'lg',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: 'xl',
          },
        },
        header: {
          p: 6,
          borderBottom: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'gray.700' : 'gray.200',
        },
        body: {
          p: 6,
        },
        footer: {
          p: 6,
          borderTop: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'gray.700' : 'gray.200',
        },
      }),
      variants: {
        elevated: (props) => ({
          container: {
            boxShadow: props.colorMode === 'dark' ? 'dark-lg' : 'xl',
          },
        }),
        outline: (props) => ({
          container: {
            borderWidth: '1px',
            borderColor: props.colorMode === 'dark' ? 'gray.700' : 'gray.200',
          },
        }),
        filled: (props) => ({
          container: {
            bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.100',
          },
        }),
        terminal: (props) => ({
          container: {
            bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
            border: '1px solid',
            borderColor: props.colorMode === 'dark' ? 'gray.700' : 'gray.300',
            borderRadius: 'md',
            fontFamily: 'mono',
          },
          header: {
            bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.200',
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          body: {
            p: 4,
            color: props.colorMode === 'dark' ? 'green.300' : 'green.600',
          },
        }),
      },
      defaultProps: {
        variant: 'elevated',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'bold',
      },
    },
    Text: {
      variants: {
        code: (props) => ({
          fontFamily: 'mono',
          fontSize: 'sm',
          px: '0.2em',
          py: '0.1em',
          borderRadius: 'sm',
          bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.100',
        }),
        terminal: (props) => ({
          fontFamily: 'mono',
          color: props.colorMode === 'dark' ? 'green.300' : 'green.500',
        }),
      },
    },
    Badge: {
      baseStyle: {
        px: 2,
        py: 1,
        borderRadius: 'full',
        textTransform: 'lowercase',
        fontWeight: 'medium',
        fontSize: 'xs',
      },
      variants: {
        tech: (props) => ({
          bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.200',
          color: props.colorMode === 'dark' ? 'brand.200' : 'brand.500',
          borderWidth: '1px',
          borderColor: props.colorMode === 'dark' ? 'brand.700' : 'brand.200',
        }),
      },
    },
  };
  
  export default components;