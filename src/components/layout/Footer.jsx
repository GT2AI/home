import React from 'react';
import { Container, Group, Text, Anchor } from '@mantine/core';

const Footer = () => {
  const { classes } = useStyles();
  const year = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <Container size="xl">
        <Group position="apart">
          <Text size="sm">
            © {year} GT^AI. All rights reserved.
          </Text>
          <Group spacing="xs">
            <Anchor
              size="sm"
              href="https://github.com/gt-ai"
              target="_blank"
            >
              GitHub
            </Anchor>
          </Group>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;