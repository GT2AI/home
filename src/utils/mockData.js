// Generates simulated data for development
export const generateSimulatedData = () => {
    // Random number within a range
    const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Random float with fixed decimal places
    const randomFloat = (min, max, decimals = 2) => {
      const val = Math.random() * (max - min) + min;
      return Number(val.toFixed(decimals));
    };
  
    // Current timestamp
    const now = new Date();
    
    // Products data
    const products = [
      {
        id: 'gt-search',
        name: 'GT^Search',
        screenshot: '/product-shots/gt-search.png',
        description: 'Semantic search for Georgia Tech resources',
        usage: randomInRange(800, 1200),
        uptime: randomFloat(99.7, 100, 2),
        technologies: ['React', 'Python', 'FastAPI'],
        team: [
          { id: 'user1', name: 'William Gay', avatar: 'https://avatars.githubusercontent.com/u/95644674?v=4' },
          { id: 'user2', name: 'Mitchell Gay', avatar: 'https://avatars.githubusercontent.com/u/98074122?v=4' },
        ],
        url: 'https://gt-ai-search.vercel.app/',
        repo: 'https://github.com/GT2AI/search',
        lastUpdate: new Date(now - randomInRange(1, 48) * 60 * 60 * 1000).toISOString(),
      },
    ];
  
    // Generate random log entries
    const logTypes = ['info', 'warning', 'error', 'debug'];
    const logSources = ['api', 'client', 'database', 'auth', 'cron'];
    const logMessages = [
      'Request completed successfully',
      'Connection established',
      'Cache miss for query',
      'User authentication successful',
      'Data indexed successfully',
      'Rate limit approached',
      'Slow query detected',
      'API rate limit reached',
      'Database connection timeout',
      'Invalid request parameters',
      'Service temporarily unavailable',
    ];
  
    const logs = Array.from({ length: 20 }, (_, i) => {
      const type = logTypes[randomInRange(0, logTypes.length - 1)];
      const source = logSources[randomInRange(0, logSources.length - 1)];
      const message = type === 'error' 
        ? logMessages.slice(-3)[randomInRange(0, 2)] 
        : logMessages.slice(0, -3)[randomInRange(0, 7)];
      
      return {
        id: `log-${Date.now()}-${i}`,
        timestamp: new Date(now - randomInRange(1, 3600) * 1000).toISOString(),
        type,
        source,
        message,
        product: products[randomInRange(0, products.length - 1)].id,
      };
    }).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
    // Generate random reactions
    const reactions = [
      { emoji: '👍', count: randomInRange(10, 50) },
      { emoji: '🚀', count: randomInRange(8, 40) },
      { emoji: '🔥', count: randomInRange(5, 30) },
      { emoji: '👏', count: randomInRange(3, 25) },
      { emoji: '🤯', count: randomInRange(2, 15) },
      { emoji: '❤️', count: randomInRange(5, 35) },
    ];
  
    // Generate recent community comments
    const commentAuthors = [
      { name: 'visitor123', avatar: null },
      { name: 'techstudent', avatar: 'https://i.pravatar.cc/150?u=comment1' },
      { name: 'ai_enthusiast', avatar: null },
      { name: 'coder404', avatar: 'https://i.pravatar.cc/150?u=comment2' },
      { name: 'gtbuzz', avatar: 'https://i.pravatar.cc/150?u=comment3' },
    ];
    
    const commentTexts = [
      'Really loving the new GT^Search update!',
      'How can I contribute to Campus Copilot?',
      'Research Radar saved me so much time on my thesis research',
      'Is there documentation for the API?',
      'Would love to see integration with Canvas',
      'The visualization in Research Radar is brilliant',
      'GT^Search needs better mobile support',
      'Thanks to the team for all their hard work!',
    ];
    
    const comments = Array.from({ length: 5 }, (_, i) => {
      const author = commentAuthors[randomInRange(0, commentAuthors.length - 1)];
      const text = commentTexts[randomInRange(0, commentTexts.length - 1)];
      
      return {
        id: `comment-${Date.now()}-${i}`,
        author,
        text,
        timestamp: new Date(now - randomInRange(1, 24 * 60) * 60 * 1000).toISOString(),
        likes: randomInRange(0, 15),
      };
    }).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
    // System metrics and stats
    const systemMetrics = {
      activeUsers: randomInRange(150, 300),
      requestsPerMinute: randomInRange(80, 200),
      totalProducts: products.length,
      totalUsers: randomInRange(1500, 2500),
      serverLoad: randomFloat(20, 65, 1),
      memoryUsage: randomFloat(40, 75, 1),
      uptime: randomInRange(1, 30),
    };
  
    // AI Makerspace resources
    const makerspaceResources = {
      gpuClusters: [
        { 
          name: 'A100 Cluster', 
          totalGPUs: 8, 
          availableGPUs: randomInRange(1, 7),
          utilizationRate: randomFloat(50, 95, 1),
          queuedJobs: randomInRange(0, 5),
        },
        { 
          name: 'RTX Cluster', 
          totalGPUs: 16, 
          availableGPUs: randomInRange(3, 12),
          utilizationRate: randomFloat(40, 90, 1),
          queuedJobs: randomInRange(0, 8),
        },
      ],
      storageUsed: randomFloat(40, 90, 1),
      activeProjects: randomInRange(15, 30),
      recentTools: [
        { name: 'PyTorch', usage: randomInRange(70, 95) },
        { name: 'TensorFlow', usage: randomInRange(50, 85) },
        { name: 'Hugging Face', usage: randomInRange(60, 90) },
        { name: 'CUDA', usage: randomInRange(75, 95) },
      ],
    };
  
    return {
      products,
      logs,
      reactions,
      comments,
      systemMetrics,
      makerspaceResources,
      timestamp: now.toISOString(),
    };
  };