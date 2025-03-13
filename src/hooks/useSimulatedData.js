// src/hooks/useSimulatedData.js
import { useState, useEffect } from 'react';

/**
 * A simplified version of the simulated data hook to start with
 * This provides "fake" live data for the initial implementation
 */
const useSimulatedData = (dataType, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Default options
  const {
    updateInterval = 3000, // Update every 3 seconds
    initialData = null,
    variance = 0.1, // How much the data can change (0.1 = 10%)
  } = options;

  // Generate initial data
  useEffect(() => {
    const generateInitialData = () => {
      if (initialData) return initialData;

      switch (dataType) {
        case 'activeUsers':
          return { count: Math.floor(Math.random() * 150) + 50 };
        
        case 'products':
          return [
            { 
              id: 'gt-search', 
              name: 'GT^Search', 
              users: Math.floor(Math.random() * 200) + 50,
              queries: Math.floor(Math.random() * 1000) + 200,
              team: ['johndoe', 'janedoe', 'alexsmith']
            },
            { 
              id: 'gt-notes', 
              name: 'GT^Notes', 
              users: Math.floor(Math.random() * 100) + 30,
              downloads: Math.floor(Math.random() * 500) + 100,
              team: ['sarahc', 'miket']
            }
          ];
          
        case 'recentCommits':
          return [
            {
              id: 'commit-1',
              message: 'feat: add search results filtering',
              author: 'johndoe',
              repo: 'gt-search',
              timestamp: new Date(Date.now() - 1000000)
            },
            {
              id: 'commit-2',
              message: 'fix: resolve mobile layout issues',
              author: 'janedoe',
              repo: 'gt-search',
              timestamp: new Date(Date.now() - 5000000)
            },
            {
              id: 'commit-3',
              message: 'docs: update README with setup instructions',
              author: 'alexsmith',
              repo: 'gt-notes',
              timestamp: new Date(Date.now() - 9000000)
            }
          ];
          
        default:
          return null;
      }
    };

    setData(generateInitialData());
    setLoading(false);
  }, [dataType, initialData]);

  // Simulate updates to make data look "live"
  useEffect(() => {
    if (!data) return;

    const updateData = () => {
      switch (dataType) {
        case 'activeUsers':
          setData(prevData => {
            const change = prevData.count * variance * (Math.random() * 2 - 1);
            return { 
              count: Math.max(30, Math.floor(prevData.count + change))
            };
          });
          break;
        
        case 'products':
          setData(prevData => {
            return prevData.map(product => {
              const userChange = product.users * variance * (Math.random() * 2 - 1);
              
              const updatedProduct = { 
                ...product,
                users: Math.max(10, Math.floor(product.users + userChange))
              };
              
              // Update other metrics
              if (product.queries) {
                const queryChange = product.queries * variance * (Math.random() * 2 - 1);
                updatedProduct.queries = Math.max(50, Math.floor(product.queries + queryChange));
              }
              
              if (product.downloads) {
                const downloadChange = product.downloads * variance * (Math.random() * 2 - 1);
                updatedProduct.downloads = Math.max(10, Math.floor(product.downloads + downloadChange));
              }
              
              return updatedProduct;
            });
          });
          break;
          
        // For commits, we'll just leave them static for now
        case 'recentCommits':
          // Occasionally add a new commit with 20% chance
          if (Math.random() > 0.8) {
            const repos = ['gt-search', 'gt-notes'];
            const authors = ['johndoe', 'janedoe', 'alexsmith', 'sarahc', 'miket'];
            const prefixes = ['feat', 'fix', 'docs', 'style', 'refactor'];
            
            const newCommit = {
              id: `commit-${Date.now()}`,
              message: `${prefixes[Math.floor(Math.random() * prefixes.length)]}: ${getRandomCommitMessage()}`,
              author: authors[Math.floor(Math.random() * authors.length)],
              repo: repos[Math.floor(Math.random() * repos.length)],
              timestamp: new Date()
            };
            
            setData(prevData => [newCommit, ...prevData.slice(0, 2)]);
          }
          break;
          
        default:
          break;
      }
    };

    const interval = setInterval(updateData, updateInterval);
    return () => clearInterval(interval);
  }, [data, dataType, updateInterval, variance]);

  return { data, loading };
};

// Helper for generating random commit messages
const commitMessages = [
  'update search results UI',
  'fix responsive layout',
  'add dark mode support',
  'improve performance',
  'update dependencies',
  'refactor code structure',
  'add error handling',
  'implement caching',
  'update documentation',
  'fix typos in README'
];

const getRandomCommitMessage = () => {
  return commitMessages[Math.floor(Math.random() * commitMessages.length)];
};

export default useSimulatedData;