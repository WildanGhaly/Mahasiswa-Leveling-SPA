// src/components/cards/UserCard.tsx

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
  import { EmailIcon, StarIcon, AtSignIcon } from '@chakra-ui/icons';
  
  type UserCardProps = {
    username: string;
    name: string;
    email: string;
    onToggleEmailNotify: () => void;
  };
  
  const UserCard: React.FC<UserCardProps> = ({
    username,
    name,
    email,
    onToggleEmailNotify,
  }) => {
    return (
      <Box borderWidth='1px' borderRadius='lg' p={4} boxShadow='md' marginTop="5vh">
        <HStack spacing={4}>
          <Avatar name={name} src='//path/to/dummy/profile.jpg' size='2xl' margin="0 20px" />
          <VStack align='stretch'>
            <HStack>
              <Icon as={StarIcon} color='yellow.400' />
              <Text fontSize="2xl" fontWeight='bold'>{name}</Text>
            </HStack>
            <HStack>
              <Icon as={AtSignIcon} />
              <Text fontSize="xl">{username}</Text>
            </HStack>
            <HStack>
              <Icon as={EmailIcon} />
              <Text fontSize="xl">{email}</Text>
            </HStack>
            <FormControl display='flex' alignItems='center'>
              <FormLabel fontSize="xl" htmlFor='email-toggle' mb='0'>
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
  