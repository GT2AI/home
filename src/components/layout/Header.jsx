// src/components/layout/Header.jsx
import React from 'react';
import { 
  Group, 
  Title, 
  ActionIcon, 
  Container,
} from '@mantine/core';
import { IconSun, IconMoon, IconBrandGithub } from '@tabler/icons-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header = () => {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useTheme();
  const dark = colorScheme === 'dark';

  return (
    <header>
      <Container size="xl">
        <Group position="apart" sx={{ height: '100%' }}>
          <Title order={1} size="h3" className={classes.logo}>
            GT<sup>AI</sup>
          </Title>

          <Group spacing={5}>
            <a 
              href="https://github.com/gt-ai" 
              target="_blank" 
              rel="noreferrer"
              className={classes.link}
            >
              GitHub
            </a>
            <a 
              href="/docs"
              className={classes.link}
            >
              Docs
            </a>
            <ActionIcon
              variant="default"
              onClick={() => toggleColorScheme()}
              size={30}
              sx={(theme) => ({
                backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
              })}
            >
              {dark ? <IconSun size={16} /> : <IconMoon size={16} />}
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </header>
  );
};

export default Header;