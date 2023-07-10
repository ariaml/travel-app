import React from 'react';
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import {Icon} from '@chakra-ui/icon'
import { FaSun, FaMoon, FaPlane, FaBookmark, FaSearch} from 'react-icons/fa';
import { ImLocation, ImOpt} from 'react-icons/im';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, InputGroup, InputRightElement, Heading, Stack, HStack, Spacer, Flex } from '@chakra-ui/react';
import elnidoimage from './components/elnido.jpg'
import mayonimage from './components/mayon.jpg'


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Stack>
      <HStack p='3' w='100%'>
        <Icon ml='100' as={FaPlane} boxSize={7}/>
        <Heading ml='2' size='md' fontWeight='semibold'>travelapp</Heading>
        <Spacer></Spacer>
        <Button  variant='link'>Home</Button>
        <Button ml='10' variant='link'>Destinations</Button>
        <Button ml='10' variant='link'>Offers</Button>
        <Button ml='10' variant='link'>About Us</Button>
        <IconButton ml='10' mr='10' icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} variant='link'></IconButton>
        <Button variant='outline'>Sign-Up</Button>
        <Button ml='2' mr='100' colorScheme='teal' variant='solid' >Log in</Button>
      </HStack>

      <Box w='100%' bgGradient='linear(to-r, blue.500, blue.50)'>
        <Box bgImage={elnidoimage} bgSize='cover' bgPosition='center' bgRepeat='no-repeat' minHeight='100vh' display='flex' flexDirection='column'>
          <Flex p='5' alignItems='center' justifyContent='center'>
            <InputGroup width='500px'>
              <Input 
                variant='outline' 
                placeholder='Search Tourists spots' _placeholder={{opacity: 1, color: 'gray.500'}}
                bg='white'
                borderRadius='full' 
                boxShadow='dark-lg'/>
              <InputRightElement>
                <Icon as={FaSearch} color='gray.500' />
              </InputRightElement>
            </InputGroup>
          </Flex>

          <VStack alignItems='flex-start' ml='100' mt='180'>
            <HStack mb='-5'>
              <Icon color='white' as={ImLocation} boxSize={7}/>
              <Text color='white' fontWeight='semibold'>Palawan, Philippines</Text>
            </HStack>
            <Text color='white' fontSize='80' fontWeight='bold' mb='-50'>EL NIDO</Text>
            <Text color='white' fontSize='80' fontWeight='bold'>ISLAND</Text>
            <Text color='white'>Experience the pinnacle of exceptional service at the world's best island this summer.</Text>
            <HStack mt='5'>
              <Button colorScheme='teal' variant='solid' w='150px'>Explore</Button>
              <IconButton ml='3' colorScheme='teal' isRound='true' icon={<FaBookmark/>}></IconButton>
            </HStack>
          </VStack>

          <HStack mt='20' w='100%'>
            <Box as='button' ml='100' borderRadius='md' boxShadow='dark-lg' bg='white' color='teal' px='7' h='200'>Mayon Volcano</Box>
            <Box as='button' ml='3' borderRadius='md' boxShadow='dark-lg' bg='white' color='teal' px='7' h='200'>Boracay Island</Box>
            <Box as='button' ml='3' borderRadius='md' boxShadow='dark-lg' bg='white' color='teal' px='7' h='200'>Chocolate Hills</Box>
            <Box as='button' ml='3' borderRadius='md' boxShadow='dark-lg' bg='white' color='teal' px='7' h='200'>Calle Crisologo</Box>
            <Box as='button' ml='3' borderRadius='md' boxShadow='dark-lg' bg='white' color='teal' px='7' h='200'>Batanes Island</Box>
            <Box as='button' ml='3' borderRadius='md' boxShadow='dark-lg' bg='white' color='teal' px='7' h='200'>Kawasan Falls</Box>
          </HStack>

        </Box>
      </Box>

      

    </Stack>
  );
}

export default App;
