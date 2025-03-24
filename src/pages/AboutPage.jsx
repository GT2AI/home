import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Image,
  Link,
  Icon,
  Divider,
  Button,
  Flex,
  useColorMode,
  Card,
  CardBody
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaGlobe, FaTwitter } from 'react-icons/fa';

const AboutPage = () => {
  const { colorMode } = useColorMode();

  // Team members data
  const teamMembers = [
    {
      name: 'William Gay',
      role: 'Head of Development',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQEHfWf7HLco9g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711685306343?e=1748476800&v=beta&t=E7emwFJOzkuKkgy4zVmM90ttZHBS8n1ewDvEv4BS0Xo',
      background: 'Undergraduate in Industrial Engineering and Masters in Computer Science at Georgia Tech.',
      links: [
        { icon: FaGithub, url: 'https://github.com/williamgay25' },
        { icon: FaLinkedin, url: 'https://linkedin.com/in/williamegay' },
        { icon: FaGlobe, url: 'https://williamgay25.github.io/' }
      ]
    },
    {
      name: 'Larry Heck',
      role: 'Faculty Advisor',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQF3KRoUtmBcjg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684992214559?e=1748476800&v=beta&t=pMFBO-63kYXcbu3q60Lqujn1n039hAu38f9HLfhwdYk',
      background: 'Professor in the School of Electrical and Computer Engineering. Extensive industry experience in AI including leadership roles at Google, Microsoft, and Samsung.',
      links: [
          { icon: FaGlobe, url: 'https://larryheck.github.io/' },
          { icon: FaLinkedin, url: 'https://www.linkedin.com/in/larryheck/' },
      ]
    }
  ];

  // Advisory board data
  const advisoryBoard = [
    {
      name: 'Laurence J. Jacobs',
      role: 'Senior Vice Provost',
      organization: 'Education and Learning',
      contribution: 'Provided initial funding and continues to support the growth of GT^AI initiatives.'
    },
    {
      name: 'Matthieu R. Bloch',
      role: 'Associate Dean',
      organization: 'School of Electrical and Computer Engineering',
      contribution: 'Leads the AI Makerspace initiative, providing resources and guidance for student AI projects.'
    }
  ];

  return (
    <Box as="main" w="100%">
      {/* Hero Section */}
      <Box 
        bg={colorMode === 'dark' ? 'gray.800' : 'blue.50'} 
        py={[10, 20]} 
        position="relative"
        overflow="hidden"
      >
        {/* Background pattern - reused from homepage */}
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
          <VStack spacing={6} alignItems="center" textAlign="center">
            <Heading 
              as="h1" 
              size="3xl" 
              fontFamily="heading"
              bgGradient={colorMode === 'dark' 
                ? 'linear(to-r, brand.200, brand.400)'
                : 'linear(to-r, brand.500, brand.700)'
              }
              bgClip="text"
              letterSpacing="tight"
            >
              About GT<sup>AI</sup>
            </Heading>

            <Text fontSize="xl" maxW="container.md">
              Building the future of AI at Georgia Tech
            </Text>
          </VStack>
        </Container>
      </Box>
      
      {/* Main Content */}
      <Container maxW="container.xl" py={10}>
        <VStack spacing={16} align="stretch">
          {/* Our Story Section */}
          <Box id="our-story">
            <Heading 
              as="h2" 
              size="xl" 
              mb={6} 
              fontFamily="heading"
              textAlign="center"
            >
              Our Story
            </Heading>
            
            <Card variant={colorMode === 'dark' ? 'outline' : 'elevated'}>
              <CardBody>
                <Text fontSize="lg" mb={6} lineHeight="tall">
                  GT^AI was founded as a collaborative initiative between key leaders at Georgia Tech: Larry Jacobs of the Jacobs Foundation, who provided essential seed funding; Professor Matthieu Bloch, who established the AI Makerspace as a hub for student innovation; and Professor Larry Heck, whose industry expertise and academic guidance have been instrumental in shaping our vision.
                </Text>
                
                <Text fontSize="lg" mb={6} lineHeight="tall">
                  What began as a vision to bridge theory and practice in AI education has grown into a student-led movement creating real-world solutions for the Georgia Tech community. Our products are conceived, designed, and built entirely by students, with guidance from faculty advisors who bring decades of industry and academic experience.
                </Text>
                
                <Text fontSize="lg" lineHeight="tall">
                  Today, GT^AI serves as both an incubator for student ideas and a platform for deploying practical AI tools that enhance the student experience at Georgia Tech. We're focused on creating solutions that tackle real challenges faced by students and faculty, while providing invaluable hands-on experience to the next generation of AI innovators.
                </Text>
              </CardBody>
            </Card>
          </Box>
          
          {/* Mission Section */}
          <Box id="mission">
            <Heading 
              as="h2" 
              size="xl" 
              mb={6} 
              fontFamily="heading"
              textAlign="center"
            >
              Our Mission
            </Heading>
            
            <Card variant={colorMode === 'dark' ? 'outline' : 'elevated'}>
              <CardBody>
                <Text fontSize="lg" mb={6} lineHeight="tall">
                  GT^AI's mission is to empower students to create AI solutions that meaningfully improve the Georgia Tech experience. We believe in learning by doing, and our projects reflect that philosophy by addressing real needs within our community.
                </Text>
                
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
                  <VStack align="start" spacing={4}>
                    <Heading as="h3" size="md" fontFamily="heading">
                      Build & Learn
                    </Heading>
                    <Text>
                      Provide students with hands-on experience developing production-grade AI systems, bridging the gap between academic theory and practical application.
                    </Text>
                  </VStack>
                  
                  <VStack align="start" spacing={4}>
                    <Heading as="h3" size="md" fontFamily="heading">
                      Solve Real Problems
                    </Heading>
                    <Text>
                      Create AI-powered tools that address specific challenges in the Georgia Tech ecosystem, from research assistance to campus navigation to educational support.
                    </Text>
                  </VStack>
                  
                  <VStack align="start" spacing={4}>
                    <Heading as="h3" size="md" fontFamily="heading">
                      Foster Community
                    </Heading>
                    <Text>
                      Bring together students from diverse backgrounds and disciplines to collaborate on ambitious AI projects and share knowledge.
                    </Text>
                  </VStack>
                </SimpleGrid>
              </CardBody>
            </Card>
          </Box>
          
          {/* Team Section */}
          <Box id="team">
            <Heading 
              as="h2" 
              size="xl" 
              mb={6} 
              fontFamily="heading"
              textAlign="center"
            >
              Our Team
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {teamMembers.map((member) => (
                <Card 
                  key={member.name} 
                  variant={colorMode === 'dark' ? 'outline' : 'elevated'}
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: 'xl',
                  }}
                >
                  <CardBody>
                    <Flex direction={{ base: 'column', sm: 'row' }} align="center" gap={6}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        borderRadius="full"
                        boxSize="150px"
                        objectFit="cover"
                        border="4px solid"
                        borderColor={colorMode === 'dark' ? 'brand.700' : 'brand.200'}
                      />
                      
                      <VStack align="start" spacing={3} flex="1">
                        <Heading as="h3" size="lg" fontFamily="heading">
                          {member.name}
                        </Heading>
                        
                        <Text 
                          fontWeight="medium" 
                          color={colorMode === 'dark' ? 'brand.200' : 'brand.600'}
                        >
                          {member.role}
                        </Text>
                        
                        <Text mt={2}>{member.background}</Text>
                        
                        <HStack spacing={4} mt={4}>
                          {member.links.map((link, index) => (
                            <Link 
                              key={index} 
                              href={link.url} 
                              isExternal
                            >
                              <Icon 
                                as={link.icon} 
                                boxSize={5} 
                                color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                                _hover={{ 
                                  color: colorMode === 'dark' ? 'brand.200' : 'brand.500' 
                                }}
                              />
                            </Link>
                          ))}
                        </HStack>
                      </VStack>
                    </Flex>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
          
          {/* Advisory Board Section */}
          <Box id="advisory-board">
            <Heading 
              as="h2" 
              size="xl" 
              mb={6} 
              fontFamily="heading"
              textAlign="center"
            >
              Advisory Board
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {advisoryBoard.map((advisor) => (
                <Card 
                  key={advisor.name} 
                  variant={colorMode === 'dark' ? 'outline' : 'elevated'}
                >
                  <CardBody>
                    <VStack align="start" spacing={2}>
                      <Heading as="h3" size="md" fontFamily="heading">
                        {advisor.name}
                      </Heading>
                      
                      <Text 
                        fontWeight="medium" 
                        color={colorMode === 'dark' ? 'brand.200' : 'brand.600'}
                      >
                        {advisor.role}
                      </Text>
                      
                      <Text fontSize="sm" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
                        {advisor.organization}
                      </Text>
                      
                      <Divider my={3} />
                      
                      <Text>{advisor.contribution}</Text>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
          
          {/* Get Involved CTA */}
          <Box 
            py={10} 
            textAlign="center"
            bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
            borderRadius="lg"
            px={6}
          >
            <VStack spacing={6}>
              <Heading as="h2" size="xl" fontFamily="heading">
                Join Our Mission
              </Heading>
              
              <Text fontSize="lg" maxW="container.md" mx="auto">
                Whether you're a developer, designer, or just passionate about AI, there's a place for you in the GT^AI community.
              </Text>
              
              <Button 
                as={Link}
                href="/#apply"
                size="lg"
                colorScheme="brand"
                rightIcon={<Icon as={FaGithub} />}
              >
                Get Involved
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutPage;