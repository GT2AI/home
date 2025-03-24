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
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { FiStar, FiArrowLeft } from 'react-icons/fi';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const BuildProductPage = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gtUsername: '',
    major: '',
    year: '',
    productName: '',
    productDescription: '',
    technicalRequirements: '',
    timeline: '',
    teamSize: '',
    skills: [],
    hasGithubAccount: false,
    githubUsername: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create issue title and body
      const issueTitle = `[Product Application] ${formData.productName} by ${formData.name}`;
      const issueBody = `
## Product Application

### Applicant Information
- **Name**: ${formData.name}
- **Email**: ${formData.email}
- **GT Username**: ${formData.gtUsername}
- **Major**: ${formData.major}
- **Year**: ${formData.year}
- **GitHub Username**: ${formData.githubUsername || 'Not provided'}

### Product Information
- **Product Name**: ${formData.productName}
- **Description**: ${formData.productDescription}
- **Technical Requirements**: ${formData.technicalRequirements}
- **Timeline**: ${formData.timeline}
- **Team Size**: ${formData.teamSize}
- **Skills Required**: ${formData.skills.join(', ') || 'None specified'}

### Additional Information
${formData.additionalInfo || 'No additional information provided.'}

---
Submitted via Build a Product form on ${new Date().toISOString().split('T')[0]}
`;

      // In a real implementation, you would use the GitHub API to create an issue
      // For demonstration purposes, we'll simulate a successful submission
      // In production, you would use the GitHub API with an access token
      
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
          labels: ['product-application'],
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
        description: "We've received your product idea submission and will review it soon.",
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
                Thanks for submitting your product idea. Our team will review your application and get back to you soon.
              </AlertDescription>
            </Alert>
            
            <VStack mt={8} spacing={4}>
              <Text>What happens next?</Text>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} width="full">
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                  <Heading fontSize="xl">Review</Heading>
                  <Text mt={4}>Our team will review your application within 5-7 business days</Text>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                  <Heading fontSize="xl">Discussion</Heading>
                  <Text mt={4}>We'll schedule a meeting to discuss your idea in more detail</Text>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
                  <Heading fontSize="xl">Kickoff</Heading>
                  <Text mt={4}>If approved, we'll help you set up your project and allocate resources</Text>
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
            <FiStar style={{ marginRight: '0.5rem' }} /> Build a Product
          </Heading>
        </Container>
      </Box>
      
      {/* Main Content */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={8} align="stretch">
          {/* Introduction */}
          <Box mb={8}>
            <Text fontSize="lg" mb={4}>
              Have an idea for an AI-powered product that could benefit the GT community? Submit your proposal below, and we'll help you bring your concept to life with our resources and mentorship.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Box p={4} bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'} borderRadius="md">
                <Text fontWeight="medium" mb={2}>What you'll get:</Text>
                <Text fontSize="sm">• GPU compute resources</Text>
                <Text fontSize="sm">• Technical mentorship</Text>
                <Text fontSize="sm">• Project management support</Text>
                <Text fontSize="sm">• Deployment infrastructure</Text>
              </Box>
              <Box p={4} bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'} borderRadius="md">
                <Text fontWeight="medium" mb={2}>What we look for:</Text>
                <Text fontSize="sm">• Impact on GT community</Text>
                <Text fontSize="sm">• Technical feasibility</Text>
                <Text fontSize="sm">• Innovation & creativity</Text>
                <Text fontSize="sm">• Sustainability plan</Text>
              </Box>
              <Box p={4} bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'} borderRadius="md">
                <Text fontWeight="medium" mb={2}>Timeline:</Text>
                <Text fontSize="sm">• Review: 5-7 business days</Text>
                <Text fontSize="sm">• Initial meeting: Within 2 weeks</Text>
                <Text fontSize="sm">• Project setup: 1-2 weeks after approval</Text>
                <Text fontSize="sm">• First milestone: 1 month after kickoff</Text>
              </Box>
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
              <Heading as="h2" size="lg" fontFamily="heading">Product Application</Heading>
              
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
                  
                  <FormControl>
                    <FormLabel>GitHub Username</FormLabel>
                    <HStack align="flex-start">
                      <Checkbox 
                        name="hasGithubAccount"
                        isChecked={formData.hasGithubAccount}
                        onChange={handleCheckboxChange}
                      >
                        I have a GitHub account
                      </Checkbox>
                    </HStack>
                    {formData.hasGithubAccount && (
                      <Input 
                        mt={2}
                        name="githubUsername"
                        value={formData.githubUsername}
                        onChange={handleInputChange}
                        placeholder="Your GitHub username"
                      />
                    )}
                  </FormControl>
                </SimpleGrid>
              </Box>
              
              {/* Product Information */}
              <Box mt={6}>
                <Heading as="h3" size="md" fontFamily="heading" mb={4}>Product Information</Heading>
                
                <VStack spacing={6} align="stretch">
                  <FormControl isRequired>
                    <FormLabel>Product Name</FormLabel>
                    <Input 
                      name="productName"
                      value={formData.productName}
                      onChange={handleInputChange}
                      placeholder="Your product's name"
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>Product Description</FormLabel>
                    <Textarea 
                      name="productDescription"
                      value={formData.productDescription}
                      onChange={handleInputChange}
                      placeholder="Describe your product idea in detail. What problem does it solve? Who is the target audience? How does it use AI?"
                      minH="150px"
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>Technical Requirements</FormLabel>
                    <Textarea 
                      name="technicalRequirements"
                      value={formData.technicalRequirements}
                      onChange={handleInputChange}
                      placeholder="What technologies, APIs, or data sources will your product need?"
                      minH="100px"
                    />
                  </FormControl>
                  
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <FormControl isRequired>
                      <FormLabel>Estimated Timeline</FormLabel>
                      <Select 
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        placeholder="Select timeline"
                      >
                        <option value="1-2 months">1-2 months</option>
                        <option value="3-4 months">3-4 months</option>
                        <option value="5-6 months">5-6 months</option>
                        <option value="7-12 months">7-12 months</option>
                        <option value="Over 1 year">Over 1 year</option>
                      </Select>
                    </FormControl>
                    
                    <FormControl isRequired>
                      <FormLabel>Estimated Team Size</FormLabel>
                      <Select 
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        placeholder="Select team size"
                      >
                        <option value="Solo">Solo (Just me)</option>
                        <option value="2-3 people">2-3 people</option>
                        <option value="4-5 people">4-5 people</option>
                        <option value="6-10 people">6-10 people</option>
                        <option value="10+ people">10+ people</option>
                      </Select>
                    </FormControl>
                  </SimpleGrid>
                  
                  <FormControl>
                    <FormLabel>Skills Required</FormLabel>
                    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                      <Checkbox 
                        value="ML Engineering"
                        isChecked={formData.skills.includes("ML Engineering")}
                        onChange={handleSkillsChange}
                      >
                        ML Engineering
                      </Checkbox>
                      <Checkbox 
                        value="Frontend Dev"
                        isChecked={formData.skills.includes("Frontend Dev")}
                        onChange={handleSkillsChange}
                      >
                        Frontend Dev
                      </Checkbox>
                      <Checkbox 
                        value="Backend Dev"
                        isChecked={formData.skills.includes("Backend Dev")}
                        onChange={handleSkillsChange}
                      >
                        Backend Dev
                      </Checkbox>
                      <Checkbox 
                        value="UX/UI Design"
                        isChecked={formData.skills.includes("UX/UI Design")}
                        onChange={handleSkillsChange}
                      >
                        UX/UI Design
                      </Checkbox>
                      <Checkbox 
                        value="Data Engineering"
                        isChecked={formData.skills.includes("Data Engineering")}
                        onChange={handleSkillsChange}
                      >
                        Data Engineering
                      </Checkbox>
                      <Checkbox 
                        value="DevOps"
                        isChecked={formData.skills.includes("DevOps")}
                        onChange={handleSkillsChange}
                      >
                        DevOps
                      </Checkbox>
                      <Checkbox 
                        value="Project Management"
                        isChecked={formData.skills.includes("Project Management")}
                        onChange={handleSkillsChange}
                      >
                        Project Management
                      </Checkbox>
                      <Checkbox 
                        value="Domain Expertise"
                        isChecked={formData.skills.includes("Domain Expertise")}
                        onChange={handleSkillsChange}
                      >
                        Domain Expertise
                      </Checkbox>
                    </SimpleGrid>
                  </FormControl>
                  
                  <FormControl>
                    <FormLabel>Additional Information</FormLabel>
                    <Textarea 
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Anything else you'd like us to know about your product idea or team?"
                      minH="100px"
                    />
                  </FormControl>
                </VStack>
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
                    leftIcon={<FiStar />}
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

export default BuildProductPage;