import React, { useState, useEffect } from 'react';
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
import chocohillsimage from './components/chocohills.jpg'
import boracayimage from './components/boracay.jpg'
import batanesimage from './components/batanes.jpg'
import kawasanimage from './components/kawasan.jpg'




function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const contentData = [
    {title:"EL NIDO ISLAND", location:"Palawan, Philippines", description:"Experience the pinnacle of exceptional service at the world's best island this summer." , background:elnidoimage},
    {title:"MAYON VOLCANO", location:"Bicol, Philippines", description:"Marvel at the breathtaking symmetry of Mayon Volcano's iconic perfect cone." , background:mayonimage},
    {title:"CHOCOLATE HILLS", location:"Bohol, Philippines", description:"Nature's sweet surprise in Bohol, the iconic Chocolate Hills offer a whimsical landscape of perfectly shaped mounds." , background:chocohillsimage},
    {title:"BORACAY ISLAND", location:"Aklan, Philippines", description:"A mesmerizing island boasting pristine white sands and azure waters." , background:boracayimage},
    {title:"BATANES ISLAND", location:"Batanes, Philippines", description:"Discover its untouched beauty, an awe-inspiring archipelago blessed with dramatic cliffs and stunning landscapes" , background:batanesimage},
    {title:"KAWASAN FALLS", location:"Cebu, Philippines", description:"Immerse yourself in the captivating allure of Kawasan Falls, where cascading turquoise waters create a serene oasis in nature" , background:kawasanimage},
  ];

  const buttonsData = [
    {text: 'El Nido Island', index:0},
    {text: 'Mayon Volcano', index:1},
    {text: 'Chocolate Hills', index:2},
    {text: 'Boracay Island', index:3},
    {text: 'Batanes Island', index:4},
    {text: 'Kawasan Falls', index:5},
  ];

  const [selected, setselected] = useState(contentData[0]);

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

      <Box w='100%' position='relative' minHeight='100vh' display='flex' flexDirection='column'>
        <Box bgImage={selected.background} bgSize='cover' bgPosition='center' bgRepeat='no-repeat' minHeight='100vh' display='flex' flexDirection='column'>
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
              <Text color='white' fontWeight='semibold'>{selected.location}</Text>
            </HStack>
            <Text color='white' fontSize='80' fontWeight='bold' mb='-50'>{selected.title}</Text>
            <Text mt='10' color='white'>{selected.description}</Text>
            <HStack mt='5'>
              <Button colorScheme='teal' variant='solid' w='150px'>Explore</Button>
              <IconButton ml='3' colorScheme='teal' isRound='true' icon={<FaBookmark/>}></IconButton>
            </HStack>
          </VStack>

          <HStack mt='90'>
            {buttonsData.map((button) => (
              <Box key={button.index} as='button' ml={button.index === 0 ? '100' : '3'} borderRadius='md' boxShadow='dark-lg'
                bg='white' color='teal' px='7' h='200'
                onClick={() => setselected(contentData[button.index])}>
                {button.text}
              </Box>
            ))}
          </HStack>

        </Box>
      </Box>

    </Stack>
  );
}

export default App;
