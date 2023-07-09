import React from 'react';
import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/button";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import {Icon} from '@chakra-ui/icon'
import { FaSun, FaMoon, FaPlane, FaBookmark, FaSearch} from 'react-icons/fa';
import { ImLocation} from 'react-icons/im';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, InputGroup, InputRightElement, Heading, Stack, HStack, Spacer, Flex } from '@chakra-ui/react';



function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

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

      <VStack alignItems='flex-start' ml='100' mt='250'>
        <HStack mb='-5'>
          <Icon as={ImLocation} boxSize={7}/>
          <Text fontWeight='semibold'>Palawan, Philippines</Text>
        </HStack>
        <Text fontSize='80' fontWeight='bold' mb='-50'>EL NIDO</Text>
        <Text fontSize='80' fontWeight='bold'>ISLAND</Text>
        <Text>Experience the pinnacle of exceptional service at the world's best island this summer.</Text>
        <HStack mt='5'>
          <Button colorScheme='teal' variant='solid' w='150px'>Explore</Button>
          <IconButton ml='3' colorScheme='teal' isRound='true' icon={<FaBookmark/>}></IconButton>
        </HStack>
      </VStack>

    </Stack>
  );
}

export default App;
