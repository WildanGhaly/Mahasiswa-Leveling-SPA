import {
    Box,
    VStack,
    HStack,
    Text,
    Icon,
  } from '@chakra-ui/react';
  import { FaTrophy } from 'react-icons/fa';
  import { CheckCircleIcon, StarIcon, InfoOutlineIcon } from '@chakra-ui/icons';
  
  type PerformanceCardProps = {
    totalAchievement: number;
    totalQuest: number;
    level: number;
    experience: number;
  };
  
  const PerformanceCard: React.FC<PerformanceCardProps> = ({
    totalAchievement,
    totalQuest,
    level,
    experience,
  }) => {
    return (
        <Box borderWidth='1px' borderRadius='lg' p={4} boxShadow='md' mt={4}>
          <Text fontSize='2xl' fontWeight='bold' margin="20px">
            Performance
          </Text>
          <VStack align='stretch' spacing={6}>
            <HStack justifyContent="space-between">
              <Box flex="1" display="flex" alignItems="center" margin="0 20px">
                <Icon as={FaTrophy} w={12} h={12} mr={2} marginRight="30px" />
                <VStack align="start">
                  <Text fontSize="2xl" fontWeight="bold">{totalAchievement}</Text>
                  <Text fontSize="xl">Achievements</Text>
                </VStack>
              </Box>
              <Box flex="1" display="flex" alignItems="center" margin="0 20px">
                <Icon as={CheckCircleIcon} w={12} h={12} mr={2} marginRight="30px" />
                <VStack align="start">
                  <Text fontSize="2xl" fontWeight="bold">{totalQuest}</Text>
                  <Text fontSize="xl">Quests</Text>
                </VStack>
              </Box>
            </HStack>
            <HStack justifyContent="space-between">
              <Box flex="1" display="flex" alignItems="center" margin="0 20px">
                <Icon as={StarIcon} w={12} h={12} mr={2} marginRight="30px" />
                <VStack align="start">
                  <Text fontSize="2xl" fontWeight="bold">{level}</Text>
                  <Text fontSize="xl">Level</Text>
                </VStack>
              </Box>
              <Box flex="1" display="flex" alignItems="center" margin="0 20px">
                <Icon as={InfoOutlineIcon} w={12} h={12} mr={2} marginRight="30px" />
                <VStack align="start">
                  <Text fontSize="2xl" fontWeight="bold">{experience}</Text>
                  <Text fontSize="xl">Experience</Text>
                </VStack>
              </Box>
            </HStack>
          </VStack>
        </Box>
      );
    };
    
  
  export default PerformanceCard;
  