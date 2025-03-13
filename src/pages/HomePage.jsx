import React from 'react';
import { motion } from 'framer-motion';
import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Group, 
  Grid, 
  Card, 
  Badge,
  useMantineTheme,
  Space
} from '@mantine/core';
import useSimulatedData from '../hooks/useSimulatedData';
import MetricsDashboard from '../components/metrics/MetricsDashboard';


const HomePage = () => {
  const theme = useMantineTheme();
  const { data: productsData, loading: productsLoading } = useSimulatedData('products');

  return (
    <Container size="xl" py={40}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title align="center" mb="xs">
          Student-built <Text component="span" color="blue" inherit>AI products</Text> 
          <br /> powering Georgia Tech
        </Title>
        
        <Text align="center" color="dimmed" size="lg" mx="auto" mb={50} sx={{ maxWidth: 700 }}>
          Empowering students to improve academic experiences through AI-driven software products.
        </Text>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Grid mb={50}>
          <Grid.Col sm={12} md={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section
                sx={{
                  height: 4,
                  backgroundColor: theme.colors.blue[5],
                }}
              />
              <Group position="apart" mt="md" mb="xs">
                <Title order={3}>GT^Search</Title>
                <Badge color="blue" variant="light">
                  Active
                </Badge>
              </Group>
              <Text size="sm" color="dimmed" mb="xl">
                A domain-specific search engine for Georgia Tech resources
              </Text>
              <Group position="apart" mt="md">
                <Text weight={500}>
                  <Text span color="blue">
                    {productsLoading ? '...' : productsData?.[0]?.users || 123}
                  </Text> active users
                </Text>
                <Button 
                  variant="light" 
                  component="a" 
                  href="/products/search"
                >
                  Try Now
                </Button>
              </Group>
            </Card>
          </Grid.Col>
          
          {/* Placeholder cards for future products */}
          <Grid.Col sm={12} md={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder 
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              })}
            >
              <Text size="sm" color="dimmed" align="center">
                More products coming soon...
              </Text>
            </Card>
          </Grid.Col>
          
          <Grid.Col sm={12} md={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder 
              sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              })}
            >
              <Text size="sm" color="dimmed" align="center">
                More products coming soon...
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </motion.div>

      <Space h={50} />

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        >
        <MetricsDashboard />
        </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Title order={2} align="center" mb="sm">Build the Next GT^AI Product</Title>
        <Text align="center" color="dimmed" mb="xl" mx="auto" sx={{ maxWidth: 600 }}>
          Join our team and create innovative solutions using the AI Makerspace resources.
        </Text>
        <Group position="center">
          <Button 
            size="md" 
            component="a" 
            href="/apply"
          >
            Apply Now
          </Button>
        </Group>
      </motion.div>
    </Container>
  );
};

export default HomePage;