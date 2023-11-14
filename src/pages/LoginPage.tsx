import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';
import axios from 'axios';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  chakra,
  Flex,
} from '@chakra-ui/react';
import { AtSignIcon, LockIcon } from '@chakra-ui/icons';

const ChakraLink = chakra(Link);

const LoginPage = () => {
    const nav = useNavigate();
    const { login } = useAuth(); // The login function should accept an access token

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleApiLogin = async (username: string, password: string) => {
        try {
            console.log('Logging in...');
            const response = await axios.post('http://localhost:8080/auth/login', {
                username,
                password
            }, { withCredentials: true });
  
            if (response.status !== 200) {
                throw new Error('Login failed');
            }

            login(response.data.username);

            console.log('Logged in!', response.data);
            nav('/dashboard');
        } catch (error) {
            setError('Login failed. Please try again.');
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        handleApiLogin(username, password);
    };

    return (
        <Flex align='center' justify='center' h='80vh' w='100%'>
            <Box bg='black' p={1} boxShadow='md' borderRadius='md' w='full' maxW='md'>
            <Box className='auth-box' bg='white' p={6} boxShadow='md' borderRadius='md'>
                <VStack spacing={4} align='stretch'>
                    <Text fontSize='2xl' fontWeight='bold'>LOGIN</Text>
                    <form onSubmit={handleLogin}>

                        <FormControl id='username' isRequired>
                            <FormLabel>Username:</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none' children={<AtSignIcon color='black' />} />
                                <Input 
                                    type='text'
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)}
                                    borderColor='black'
                                />
                            </InputGroup>
                        </FormControl>

                        <FormControl id='password' isRequired>
                            <FormLabel>Password:</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none' children={<LockIcon color='black' />} />
                                <Input 
                                    type='password'
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    borderColor='black'
                                />
                            </InputGroup>
                        </FormControl>

                        {error && <Text color='red.500'>{error}</Text>}

                        <Button type='submit' colorScheme='blue' width='full' mt={4}>
                            Login
                        </Button>
                    </form>
                    <Text mt={2}>
                        Don't have an account?{' '}
                        <ChakraLink color='teal.500' to="/register">
                            Register
                        </ChakraLink>
                    </Text>
                </VStack>
            </Box>
            </Box>
        </Flex>
    );
};


export default LoginPage;