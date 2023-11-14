import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';
import axios from 'axios';
import {
    Box, Input, Button, FormControl, FormLabel, InputGroup, InputLeftElement,
    Text, VStack, chakra, Flex
} from '@chakra-ui/react';
import { AtSignIcon, EmailIcon, LockIcon } from '@chakra-ui/icons';

const ChakraLink = chakra(Link);

const RegisterPage = () => {
    const nav = useNavigate();
    const { login } = useAuth();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleApiRegister = async (username: string, email: string, password: string) => {
        try {
            console.log('Registering...');
            const response = await axios.post('http://localhost:8080/auth/register', {
                username,
                email,
                password
            }, { withCredentials: true });

            if (response.status !== 200) {
                throw new Error('Register failed');
            }

            login(response.data.username);

            console.log('Registered!', response.data);
            nav('/dashboard');
        } catch (error) {
            console.error('Register failed', error);
        }
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registering...FE');
        handleApiRegister(username, email, password);
    };
    
    return (
        <Flex align='center' justify='center' h='80vh' w='100%'>
            <Box bg='black' p={1} boxShadow='md' borderRadius='md' w='full' maxW='md' border='1px' borderColor='black'>
                <Box bg='white' p={6} boxShadow='md' borderRadius='md'>
                    <VStack spacing={4} align='stretch'>
                        <Text fontSize='2xl'>Register</Text>
                        <form onSubmit={handleRegister}>
                            <FormControl id='username' isRequired>
                                <FormLabel>Username:</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none' children={<AtSignIcon color='black' />} />
                                    <Input 
                                        type='text'
                                        value={username} 
                                        onChange={(e) => setUsername(e.target.value)}
                                        borderColor='black'
                                        color='black'
                                    />
                                </InputGroup>
                            </FormControl>

                            <FormControl id='email' isRequired>
                                <FormLabel>Email:</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none' children={<EmailIcon color='black' />} />
                                    <Input 
                                        type='email'
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                        borderColor='black'
                                        color='black'
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
                                        color='black'
                                    />
                                </InputGroup>
                            </FormControl>

                            <Button type='submit' colorScheme='blue' width='full' mt={4}>
                                Register
                            </Button>
                        </form>
                        <Text mt={2}>
                            Already have an account?{' '}
                            <ChakraLink color='teal.500' to="/login">
                                Login
                            </ChakraLink>
                        </Text>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
};

export default RegisterPage;
