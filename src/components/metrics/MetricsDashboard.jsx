import React from 'react';
import { Paper, Title, Group, Text, ThemeIcon, SimpleGrid, RingProgress, Card, Stack, ScrollArea } from '@mantine/core';
import { IconUsers, IconCode, IconRocket, IconBrandGithub } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import useSimulatedData from '../../hooks/useSimulatedData';

const MetricsDashboard = () => {
  const { data: usersData, loading: usersLoading } = useSimulatedData('activeUsers');
  const { data: productsData, loading: productsLoading } = useSimulatedData('products');
  const { data: commitsData, loading: commitsLoading } = useSimulatedData('recentCommits');

  return (
    <Paper withBorder radius="md" p="md">
      <Title order={3} mb="md">Live Metrics</Title>
      
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {/* Active Users Metric */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card withBorder radius="md" p="md">
            <Group position="apart">
              <Text size="xs" color="dimmed" weight={700} transform="uppercase">
                Active Users
              </Text>
              <ThemeIcon color="blue" variant="light" radius="md" size="sm">
                <IconUsers size={16} />
              </ThemeIcon>
            </Group>
            
            <Group spacing="xs" mt={15}>
              <Text size="xl" weight={700}>
                {usersLoading ? '...' : usersData?.count || 0}
              </Text>
            </Group>
            
            <Text size="xs" color="dimmed" mt={7}>
              Across all products
            </Text>
          </Card>
        </motion.div>
        
        {/* Top Product Metric */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card withBorder radius="md" p="md">
            <Group position="apart">
              <Text size="xs" color="dimmed" weight={700} transform="uppercase">
                Top Product
              </Text>
              <ThemeIcon color="violet" variant="light" radius="md" size="sm">
                <IconRocket size={16} />
              </ThemeIcon>
            </Group>
            
            <Group spacing="xs" mt={15}>
              <Text size="lg" weight={700}>
                {productsLoading ? '...' : productsData?.[0]?.name || 'N/A'}
              </Text>
            </Group>
            
            <Group position="apart" mt={7}>
              <Text size="xs" color="dimmed">
                Active users
              </Text>
              <Text size="xs" weight={700} color="blue">
                {productsLoading ? '...' : productsData?.[0]?.users || 0}
              </Text>
            </Group>
            
            <RingProgress
              size={80}
              roundCaps
              thickness={8}
              sections={[{ value: 65, color: 'blue' }]}
              label={
                <Text size="xs" align="center" weight={700}>
                  65%
                </Text>
              }
              mt="md"
              mx="auto"
            />
          </Card>
        </motion.div>
        
        {/* Recent Activity Metric */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card withBorder radius="md" p="md">
            <Group position="apart">
              <Text size="xs" color="dimmed" weight={700} transform="uppercase">
                Recent Activity
              </Text>
              <ThemeIcon color="green" variant="light" radius="md" size="sm">
                <IconCode size={16} />
              </ThemeIcon>
            </Group>
            
            <Group spacing="xs" mt={15} mb={5}>
              <ThemeIcon color="gray" variant="light" radius="xl" size="sm">
                <IconBrandGithub size={14} />
              </ThemeIcon>
              <Text size="sm">
                {commitsLoading ? '...' : (
                  commitsData && commitsData.length > 0 ? (
                    <Text>
                      <Text span weight={500}>{commitsData[0].author}</Text> pushed to{' '}
                      <Text span weight={500}>{commitsData[0].repo}</Text>
                    </Text>
                  ) : 'No recent activity'
                )}
              </Text>
            </Group>
            
            <Text size="xs" color="dimmed" mt={7}>
              {commitsLoading ? '...' : (
                commitsData ? `${commitsData.length} commits in the last 24 hours` : '0 commits'
              )}
            </Text>
          </Card>
        </motion.div>
      </SimpleGrid>
      
      {/* Recent Commits List */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Title order={5} mt="xl" mb="md">Recent Commits</Title>
        <ScrollArea h={160} offsetScrollbars>
          <Stack spacing="xs">
            {commitsLoading ? (
              <Text size="sm" color="dimmed">Loading commits...</Text>
            ) : (
              commitsData && commitsData.map(commit => (
                <Paper key={commit.id} withBorder p="xs" radius="sm">
                  <Group position="apart" noWrap>
                    <div>
                      <Group spacing="xs">
                        <Text size="xs" color="blue" weight={500}>
                          {commit.repo}
                        </Text>
                        <Text size="xs" color="dimmed">
                          {commit.author}
                        </Text>
                      </Group>
                      <Text size="sm" mt={4}>
                        {commit.message}
                      </Text>
                    </div>
                    <Text size="xs" color="dimmed" sx={{ whiteSpace: 'nowrap' }}>
                      {new Date(commit.timestamp).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </Text>
                  </Group>
                </Paper>
              ))
            )}
          </Stack>
        </ScrollArea>
      </motion.div>
    </Paper>
  );
};

export default MetricsDashboard;