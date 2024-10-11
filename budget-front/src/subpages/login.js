import "./style/loginStyle.css";
import { Flex, Heading, Text, Image, FormControl, FormLabel, Input, Box, Button, Divider, AbsoluteCenter, Link, HStack } from "@chakra-ui/react";
import welcome2 from "../images/welcome2.jpg"

export default function Login(props){

    return(
        <Flex bg="#f8f9fa" h="78vh" w="72vw" flexDir="row" borderBottomRadius="24px">
            <Flex className="form-box" h="inherit" w="50%" borderRadius="3xl" flexDir="column" pt="3%" align="flex-end" justify="space-around">

                <Flex className="title-box" flexDir="column" w="90%" h="12vh" pr="6%">
                    <Heading className="title" fontSize="2vw" color="#212529" fontWeight="extrabold">Welcome back!</Heading>
                    <Text className="title-description" fontSize="0.8vw" color="#6C757D" fontWeight="bold">Enter your data and manage your money right now.</Text>
                </Flex>

                <Flex className="form" w="90%" h="24vh" flexDir="column" justify="space-around" pl="3%">
                    
                    <FormControl w="80%">
                        <FormLabel fontWeight="semibold">Email</FormLabel>
                        <Input onChange={e => props.setLogEmail(e.target.value)} value={props.logemail}/>
                    </FormControl>

                    <FormControl w="80%">
                        <FormLabel fontWeight="semibold">Password</FormLabel>
                        <HStack>    
                            <Input w="80%" type="password" onChange={e => props.setLogPassword(e.target.value)} value={props.logpassword}/>
                            <Button w="16%" ml="1%" colorScheme="green" onClick={props.submitLogin}>Login</Button>
                        </HStack>
                    </FormControl>
                </Flex>

                <Flex w="100%" flexDir="column" align="center">
                    <Box position="relative" p="2%">
                        <Divider />
                        <AbsoluteCenter bg="#f8f9fa" px="4">Or</AbsoluteCenter>
                    </Box>
                    <Flex flexDir="column" justify="space-around" align="center" w="100%" h="20vh">
                        <Button w="50%" h="25%"><Image src={"https://cdn-icons-png.flaticon.com/512/145/145804.png"} h="3vh"/>Login with Google</Button>
                        <Button w="50%" h="25%"><Image src={"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"} h="3vh"/>Login with Facebook</Button>
                        <Button w="50%" h="25%">Other...</Button>
                    </Flex>
                </Flex>
                
                <Flex flexDir="column" align="center" justify="center" w="100%" h="10vh">
                    <Text>No account? Create one now!</Text>
                    <Link id="register" textDecor="underline" onClick={props.setSubpage}>Register here</Link>
                </Flex>
                
            </Flex>
            <Flex className="image-box" h="inherit" w="50%" justify="center" align="center">
                <Image className="image" src={welcome2} boxSize="98%" borderBottomRightRadius="16px"/>
            </Flex>
        </Flex>
    )
}