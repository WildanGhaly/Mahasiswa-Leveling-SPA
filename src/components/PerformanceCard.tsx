import { Box, VStack, Text } from '@chakra-ui/react';

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
      <VStack align='stretch'>
        <Text>{`Total Achievement: ${totalAchievement}`}</Text>
        <Text>{`Total Quest: ${totalQuest}`}</Text>
        <Text>{`Level: ${level}`}</Text>
        <Text>{`Experience: ${experience}`}</Text>
      </VStack>
    </Box>
  );
};
export default PerformanceCard;
