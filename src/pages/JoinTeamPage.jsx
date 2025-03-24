import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  VStack,
  SimpleGrid,
  useColorMode,
  useToast,
  Select,
  Checkbox,
  CheckboxGroup,
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
  Radio,
  RadioGroup,
  Tag,
  Wrap,
  WrapItem,
  Link,
} from '@chakra-ui/react';
import { FiUsers, FiArrowLeft, FiLink, FiCode } from 'react-icons/fi';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// Mock data for available teams/projects
const availableProjects = [
  { 
    id: 'gt-search', 
    name: 'GT^Search', 
    description: 'Semantic search for Georgia Tech resources',
    roles: ['Frontend Developer', 'ML Engineer', 'UX Designer'],
    technologies: ['React', 'Python', 'FastAPI', 'Hugging Face'],
  },
/*   {
    id: 'campus-copilot',
    name: 'Campus Copilot',
    description: 'AI assistant for navigating campus life and resources',
    roles: ['Backend Developer', 'ML Engineer', 'Content Writer'],
    technologies: ['Node.js', 'LangChain', 'MongoDB', 'React Native'],
  },
  {
    id: 'research-radar',
    name: 'Research Radar',
    description: 'AI-powered research paper recommendation system',
    roles: ['Data Engineer', 'ML Engineer', 'Frontend Developer'],
    technologies: ['Python', 'PyTorch', 'ElasticSearch', 'React'],
  }, */
];

const JoinTeamPage = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gtUsername: '',
    major: '',
    year: '',
    role: '',
    projectId: '',
    skills: [],
    experience: '',
    portfolio: '',
    github: '',
    resume: '',
    commitment: '',
    motivation: '',
    availability: [],
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
    setFormData((prev) => ({
      ...prev,
      projectId: projectId,
    }));
  };

  const handleRoleSelect = (role) => {
    setFormData((prev) => ({
      ...prev,
      role: role,
    }));
  };

  const handleSkillsChange = (skills) => {
    setFormData((prev) => ({
      ...prev,
      skills: skills,
    }));
  };

  const handleAvailabilityChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      availability: checked
        ? [...prev.availability, value]
        : prev.availability.filter((day) => day !== value),
    }));
  };

  const handleCommitmentChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      commitment: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Find the selected project
      const project = availableProjects.find(p => p.id === formData.projectId);
      
      // Create issue title and body
      const issueTitle = `[Team Application] ${formData.role} for ${project?.name || 'Unknown Project'} - ${formData.name}`;
      const issueBody = `
## Team Application

### Applicant Information
- **Name**: ${formData.name}
- **Email**: ${formData.email}
- **GT Username**: ${formData.gtUsername}
- **Major**: ${formData.major}
- **Year**: ${formData.year}

### Project Interest
- **Project**: ${project?.name || formData.projectId}
- **Role**: ${formData.role}
- **Skills**: ${formData.skills.join(', ')}
- **Time Commitment**: ${formData.commitment}
- **Availability**: ${formData.availability.join(', ') || 'Not specified'}

### Experience and Portfolio
- **Experience**: ${formData.experience}
- **Portfolio**: ${formData.portfolio || 'Not provided'}
- **GitHub**: ${formData.github || 'Not provided'}
- **Resume**: ${formData.resume || 'Not provided'}

### Motivation
${formData.motivation}

### Additional Information
${formData.additionalInfo || 'No additional information provided.'}

---
Submitted via Join Team form on ${new Date().toISOString().split('T')[0]}
`;

      // In a real implementation, you would use the GitHub API to create an issue
      // For demonstration purposes, we'll simulate a successful submission
      
      /*
      // Example of how you would create a GitHub issue using fetch:
      const response = await fetch('https://api.github.com/repos/GT2AI/admin/issues', {
        method: 'POST',
        headers: {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: issueTitle,
          body: issueBody,
          labels: ['team-application', formData.projectId, formData.role.toLowerCase().replace(/\s+/g, '-')],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create GitHub issue');
      }
      */
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast({
        title: 'Application submitted successfully!',
        description: "We've received your application and will review it soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Submission failed',
        description: "There was an error submitting your application. Please try again.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Container maxW="container.lg" py={10}>
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" py={10} px={6}>
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
              bg={colorMode === 'dark' ? 'green.900' : 'green.50'}
              borderRadius="lg"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Application Submitted!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                Thanks for your interest in joining a GT^AI team. We'll review your application and get back to you soon.
              </AlertDescription>
            </Alert>
            
            <VStack mt={8} spacing={4}>
              <Text>What happens next?</Text>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} width="full">
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                  <Heading fontSize="xl">Review</Heading>
                  <Text mt={4}>Project leads will review applications within 5-7 business days</Text>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                  <Heading fontSize="xl">Interview</Heading>
                  <Text mt={4}>Selected candidates will be invited for a short interview</Text>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                  <Heading fontSize="xl">Onboarding</Heading>
                  <Text mt={4}>If selected, you'll be onboarded to the project team</Text>
                </Box>
              </SimpleGrid>
              
              <Button 
                leftIcon={<FiArrowLeft />} 
                mt={8} 
                onClick={() => navigate('/')}
                colorScheme="brand"
              >
                Return to Home
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    );
  }

  return (
    <Box as="main" w="100%">
      {/* Header */}
      <Box 
        bg={colorMode === 'dark' ? 'gray.800' : 'blue.50'} 
        py={10} 
        position="relative"
        overflow="hidden"
      >
        {/* Background pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity="0.05"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxwYXRoIGQ9Ik0wIDBoMXYxSDB6TTQgNGgxdjFINHpNOCA4aDF2MUg4ek0xMiAxMmgxdjFoLTF6TTE2IDE2aDF2MWgtMXoiIGZpbGw9IiNmZmYiPjwvcGF0aD48L3N2Zz4=')"
          }}
          backgroundSize="20px 20px"
        />
        
        <Container maxW="container.xl" position="relative">
          <Heading 
            as="h1" 
            size="xl" 
            fontFamily="heading"
            bgGradient={colorMode === 'dark' 
              ? 'linear(to-r, brand.200, brand.400)'
              : 'linear(to-r, brand.500, brand.700)'
            }
            bgClip="text"
            letterSpacing="tight"
            display="flex"
            alignItems="center"
          >
            <FiUsers style={{ marginRight: '0.5rem' }} /> Join a Team
          </Heading>
        </Container>
      </Box>
      
      {/* Main Content */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={8} align="stretch">
          {/* Introduction */}
          <Box mb={8}>
            <Text fontSize="lg" mb={4}>
              Contribute your skills to an existing GT^AI project. We're looking for developers, designers, ML engineers, project managers, and more to help build the next generation of AI tools for Georgia Tech.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Box p={4} bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'} borderRadius="md">
                <Text fontWeight="medium" mb={2}>What we offer:</Text>
                <Text fontSize="sm">• Hands-on experience with AI projects</Text>
                <Text fontSize="sm">• Mentorship from faculty and industry experts</Text>
                <Text fontSize="sm">• Collaboration with talented peers</Text>
                <Text fontSize="sm">• Portfolio-building opportunities</Text>
              </Box>
              <Box p={4} bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'} borderRadius="md">
                <Text fontWeight="medium" mb={2}>What we expect:</Text>
                <Text fontSize="sm">• Consistent contribution (5-10 hrs/week)</Text>
                <Text fontSize="sm">• Team collaboration and communication</Text>
                <Text fontSize="sm">• Commitment to learning and growth</Text>
                <Text fontSize="sm">• Passion for AI and its applications</Text>
              </Box>
              <Box p={4} bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'} borderRadius="md">
                <Text fontWeight="medium" mb={2}>Application Timeline:</Text>
                <Text fontSize="sm">• Initial review: 5-7 business days</Text>
                <Text fontSize="sm">• Interviews: Scheduled within 2 weeks</Text>
                <Text fontSize="sm">• Final decisions: Within 3 weeks</Text>
                <Text fontSize="sm">• Onboarding: Next project cycle</Text>
              </Box>
            </SimpleGrid>
          </Box>
          
          {/* Available Projects */}
          <Box mb={8}>
            <Heading as="h2" size="lg" fontFamily="heading" mb={4}>Available Projects</Heading>
            <Text mb={4}>Select a project you're interested in joining:</Text>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {availableProjects.map((project) => (
                <Box
                  key={project.id}
                  p={5}
                  borderWidth="1px"
                  borderRadius="lg"
                  borderColor={selectedProject === project.id 
                    ? colorMode === 'dark' ? 'brand.500' : 'brand.500' 
                    : colorMode === 'dark' ? 'gray.700' : 'gray.200'
                  }
                  bg={selectedProject === project.id 
                    ? colorMode === 'dark' ? 'brand.900' : 'brand.50' 
                    : colorMode === 'dark' ? 'gray.800' : 'white'
                  }
                  cursor="pointer"
                  onClick={() => handleProjectSelect(project.id)}
                  boxShadow={selectedProject === project.id ? 'md' : 'sm'}
                  transition="all 0.2s"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                  }}
                >
                  <Heading as="h3" size="md" fontFamily="heading" mb={2}>
                    {project.name}
                  </Heading>
                  <Text fontSize="sm" mb={4}>{project.description}</Text>
                  
                  <Text fontWeight="medium" fontSize="sm" mb={2}>Open Roles:</Text>
                  <Wrap mb={4}>
                    {project.roles.map((role) => (
                      <WrapItem key={role}>
                        <Tag
                          size="md"
                          colorScheme={selectedProject === project.id && formData.role === role ? 'brand' : 'gray'}
                          variant={selectedProject === project.id && formData.role === role ? 'solid' : 'subtle'}
                          cursor="pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (selectedProject === project.id) {
                              handleRoleSelect(role);
                            } else {
                              handleProjectSelect(project.id);
                              handleRoleSelect(role);
                            }
                          }}
                        >
                          {role}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                  
                  <Text fontWeight="medium" fontSize="sm" mb={2}>Technologies:</Text>
                  <Wrap>
                    {project.technologies.map((tech) => (
                      <WrapItem key={tech}>
                        <Tag size="sm" colorScheme="gray" variant="subtle" fontFamily="mono">
                          {tech.toLowerCase()}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
          
          {/* Application Form */}
          <Box 
            as="form" 
            onSubmit={handleSubmit}
            p={8}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg={colorMode === 'dark' ? 'gray.800' : 'white'}
          >
            <VStack spacing={6} align="stretch">
              <Heading as="h2" size="lg" fontFamily="heading">Team Application</Heading>
              
              {selectedProject ? (
                <Alert status="info" borderRadius="md">
                  <AlertIcon />
                  <Box>
                    <AlertTitle>Selected Project: {availableProjects.find(p => p.id === selectedProject)?.name}</AlertTitle>
                    <AlertDescription>
                      Role: {formData.role || "No role selected"}
                    </AlertDescription>
                  </Box>
                </Alert>
              ) : (
                <Alert status="warning" borderRadius="md">
                  <AlertIcon />
                  Please select a project and role from the options above.
                </Alert>
              )}
              
              {/* Personal Information */}
              <Box>
                <Heading as="h3" size="md" fontFamily="heading" mb={4}>Personal Information</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@gatech.edu"
                    />
                    <FormHelperText>Preferably your Georgia Tech email</FormHelperText>
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>GT Username</FormLabel>
                    <Input 
                      name="gtUsername"
                      value={formData.gtUsername}
                      onChange={handleInputChange}
                      placeholder="gburdell3"
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>Major</FormLabel>
                    <Input 
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                      placeholder="e.g., Computer Science"
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>Year</FormLabel>
                    <Select 
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="Select your year"
                    >
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Graduate">Graduate Student</option>
                      <option value="PhD">PhD Student</option>
                      <option value="Faculty">Faculty/Staff</option>
                    </Select>
                  </FormControl>
                </SimpleGrid>
              </Box>
              
              {/* Skills and Experience */}
              <Box mt={6}>
                <Heading as="h3" size="md" fontFamily="heading" mb={4}>Skills & Experience</Heading>
                
                <VStack spacing={6} align="stretch">
                  <FormControl isRequired>
                    <FormLabel>Relevant Skills</FormLabel>
                    <CheckboxGroup value={formData.skills} onChange={handleSkillsChange}>
                      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                        <Checkbox value="Python">Python</Checkbox>
                        <Checkbox value="JavaScript">JavaScript</Checkbox>
                        <Checkbox value="React">React</Checkbox>
                        <Checkbox value="Node.js">Node.js</Checkbox>
                        <Checkbox value="PyTorch">PyTorch</Checkbox>
                        <Checkbox value="TensorFlow">TensorFlow</Checkbox>
                        <Checkbox value="React Native">React Native</Checkbox>
                        <Checkbox value="UX/UI Design">UX/UI Design</Checkbox>
                        <Checkbox value="Data Engineering">Data Engineering</Checkbox>
                        <Checkbox value="DevOps">DevOps</Checkbox>
                        <Checkbox value="Project Management">Project Management</Checkbox>
                        <Checkbox value="LLM/NLP">LLM/NLP</Checkbox>
                      </SimpleGrid>
                    </CheckboxGroup>
                    <FormHelperText>Select all that apply</FormHelperText>
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>Relevant Experience</FormLabel>
                    <Textarea 
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Describe your experience related to the role you're applying for. Include relevant courses, projects, internships, etc."
                      minH="150px"
                    />
                  </FormControl>
                  
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl>
                      <FormLabel>Portfolio or Website</FormLabel>
                      <Input 
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        placeholder="https://your-portfolio.com"
                        leftIcon={<FiLink />}
                      />
                    </FormControl>
                    
                    <FormControl>
                      <FormLabel>GitHub Profile</FormLabel>
                      <Input 
                        name="github"
                        value={formData.github}
                        onChange={handleInputChange}
                        placeholder="https://github.com/yourusername"
                        leftIcon={<FiCode />}
                      />
                    </FormControl>
                  </SimpleGrid>
                  
                  <FormControl>
                    <FormLabel>Resume or CV Link</FormLabel>
                    <Input 
                      name="resume"
                      value={formData.resume}
                      onChange={handleInputChange}
                      placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                    />
                  </FormControl>
                </VStack>
              </Box>
              
              {/* Availability and Commitment */}
              <Box mt={6}>
                <Heading as="h3" size="md" fontFamily="heading" mb={4}>Availability & Commitment</Heading>
                
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <FormControl isRequired>
                    <FormLabel>Time Commitment</FormLabel>
                    <RadioGroup value={formData.commitment} onChange={handleCommitmentChange}>
                      <Stack spacing={2}>
                        <Radio value="1-5 hours/week">1-5 hours/week</Radio>
                        <Radio value="5-10 hours/week">5-10 hours/week</Radio>
                        <Radio value="10-15 hours/week">10-15 hours/week</Radio>
                        <Radio value="15+ hours/week">15+ hours/week</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                  
                  <FormControl>
                    <FormLabel>Typical Availability (Check all that apply)</FormLabel>
                    <VStack align="start" spacing={1}>
                      <Checkbox 
                        value="Weekday mornings"
                        isChecked={formData.availability.includes("Weekday mornings")}
                        onChange={handleAvailabilityChange}
                      >
                        Weekday mornings
                      </Checkbox>
                      <Checkbox 
                        value="Weekday afternoons"
                        isChecked={formData.availability.includes("Weekday afternoons")}
                        onChange={handleAvailabilityChange}
                      >
                        Weekday afternoons
                      </Checkbox>
                      <Checkbox 
                        value="Weekday evenings"
                        isChecked={formData.availability.includes("Weekday evenings")}
                        onChange={handleAvailabilityChange}
                      >
                        Weekday evenings
                      </Checkbox>
                      <Checkbox 
                        value="Weekends"
                        isChecked={formData.availability.includes("Weekends")}
                        onChange={handleAvailabilityChange}
                      >
                        Weekends
                      </Checkbox>
                    </VStack>
                  </FormControl>
                </SimpleGrid>
              </Box>
              
              {/* Motivation */}
              <Box mt={6}>
                <Heading as="h3" size="md" fontFamily="heading" mb={4}>Motivation</Heading>
                
                <FormControl isRequired>
                  <FormLabel>Why do you want to join this project?</FormLabel>
                  <Textarea 
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Explain why you're interested in this particular project and role, and what you hope to contribute and learn."
                    minH="150px"
                  />
                </FormControl>
              </Box>
              
              {/* Additional Information */}
              <Box mt={6}>
                <Heading as="h3" size="md" fontFamily="heading" mb={4}>Additional Information</Heading>
                
                <FormControl>
                  <FormLabel>Anything else you'd like us to know?</FormLabel>
                  <Textarea 
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Any other information that might be relevant to your application."
                    minH="100px"
                  />
                </FormControl>
              </Box>
              
              {/* Submission */}
              <Box mt={8} textAlign="center">
                <HStack justify="center" spacing={4}>
                  <Button
                    as={RouterLink}
                    to="/"
                    variant="outline"
                    leftIcon={<FiArrowLeft />}
                  >
                    Back to Home
                  </Button>
                  <Button
                    type="submit"
                    colorScheme="brand"
                    size="lg"
                    isLoading={isSubmitting}
                    loadingText="Submitting"
                    leftIcon={<FiUsers />}
                    isDisabled={!selectedProject || !formData.role}
                  >
                    Submit Application
                  </Button>
                </HStack>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default JoinTeamPage;