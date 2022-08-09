import { Box, Center, Text, Input, HStack, Button} from '@chakra-ui/react'

function App() {
  return (
    <Box h='calc(100vh)' backgroundColor = 'black'>
      <Center h='100px'>
        <Text fontSize='7xl' color='#1DB954' fontWeight='semibold' marginTop='5' textShadow='1px 1px white'>
          Featurefy
        </Text>
      </Center>
      <Box>
        <Center h='100px' color='white'>
          <Text fontSize='2xl'>
            Find the shortest path from
          </Text>
        </Center>
        <Box>
          <Center h='75px'>
            <HStack spacing='5'>
              <Input placeholder='Kanye West' size='lg' color='white'/>
              <Text fontSize='xl' color='white'>
                To
              </Text>
              <Input placeholder='Taylor Swift' size='lg' color='white'/>
            </HStack>
          </Center>
        </Box>
        <Box>
          <Center h='100px'> 
            <Button color='#1DB954' size='lg'>
              Search
            </Button>
          </Center>
        </Box>
      </Box>
    </Box>


  );
}

export default App;
