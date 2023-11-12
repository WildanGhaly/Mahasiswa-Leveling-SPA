import {
    Box,
    VStack,
    Text,
    Switch,
    FormControl,
    FormLabel,
    Avatar,
    HStack,
    Icon,
  } from '@chakra-ui/react';
  import { EmailIcon, StarIcon, AtSignIcon, CheckCircleIcon } from '@chakra-ui/icons';
  
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
        <HStack spacing={4}>
          <Avatar name={name} src='//path/to/dummy/profile.jpg' size='xl' margin="0 20px" />
          <VStack align='stretch'>
            <HStack>
              <Icon as={StarIcon} color='yellow.400' />
              <Text fontWeight='bold'>{name}</Text>
            </HStack>
            <HStack>
              <Icon as={AtSignIcon} />
              <Text>{username}</Text>
            </HStack>
            <HStack>
              <Icon as={EmailIcon} />
              <Text>{email}</Text>
            </HStack>
            <HStack>
              <Icon as={CheckCircleIcon} />
              <Text>{`Points: ${points}`}</Text>
            </HStack>
            <FormControl display='flex' alignItems='center'>
              <FormLabel htmlFor='email-toggle' mb='0'>
                Get notify by email
              </FormLabel>
              <Switch id='email-toggle' onChange={onToggleEmailNotify} />
            </FormControl>
          </VStack>
        </HStack>
      </Box>
    );
  };
  
  export default UserCard;
  