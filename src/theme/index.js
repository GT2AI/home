import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';
import components from './components';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  ...foundations,
  components,
});

export default theme;