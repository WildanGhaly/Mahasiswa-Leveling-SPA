import {
    Box,
    VStack,
    Text,
    Switch,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react';
  
  type UserCardProps = {
    username: string;
    name: string;
    email: string;
    points: number;
    onToggleEmailNotify: () => void;
  };
  
  const UserCard: React.FC<UserCardProps> = ({
    username,
    name,
    email,
    points,
    onToggleEmailNotify,
  }) => {
    return (
      <Box borderWidth='1px' borderRadius='lg' p={4} boxShadow='md' marginTop="5vh">
        <VStack align='stretch'>
          <Text fontWeight='bold'>{username}</Text>
          <Text>{name}</Text>
          <Text>{email}</Text>
          <Text>{`Points: ${points}`}</Text>
          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-toggle' mb='0'>
              Get notify by email
            </FormLabel>
            <Switch id='email-toggle' onChange={onToggleEmailNotify} />
          </FormControl>
        </VStack>
      </Box>
    );
  };
  export default UserCard;
  