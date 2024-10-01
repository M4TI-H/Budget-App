import "./style/loginStyle.css";
import { Flex, Heading, Text, Image, FormControl, FormLabel, FormHelperText, Input, HStack } from "@chakra-ui/react";
import welcome3 from "../images/welcome3.jpg"

export default function Register(){

    return(
        <Flex bg="#f8f9fa" h="78vh" w="72vw" flexDir="row" borderBottomRadius="24px">
            <Flex className="form-box" h="inherit" w="50%" borderRadius="3xl" flexDir="column" pt="3%" pb="1%" align="flex-end" justify="space-between">

                <Flex className="title-box" flexDir="column" w="90%" h="12vh" pr="6%">
                    <Heading className="title" fontSize="2vw" color="#212529" fontWeight="extrabold">Hey!<br/>Welcome to Penny Tracker</Heading>
                    <Text className="title-description" fontSize="0.8vw" color="#6C757D" fontWeight="bold">From tracking your spending to planning your budget,
                        anywhere you are. Register now and manage your money for free, giving you the tools to take charge of your finances easily.</Text>
                </Flex>

                <Flex className="form" w="90%" h="36vh" flexDir="column" justify="space-evenly" pl="3%">
                    <FormControl w="80%">
                        <FormLabel fontWeight="semibold">Email</FormLabel>
                        <Input placeholder="email@example.com" />
                        <FormHelperText display="none">Email already occupied</FormHelperText>
                    </FormControl>

                    <FormControl w="80%">
                        <FormLabel fontWeight="semibold">Password</FormLabel>
                        <Input placeholder="Pass1234#" type="password"/>
                        <FormHelperText display="none">Password must contain at least one number and one symbol (!, @, #, $, %)</FormHelperText>
                    </FormControl>

                    <FormControl w="80%">
                        <FormLabel fontWeight="semibold">Repeat password</FormLabel>
                        <Input placeholder="Pass1234#" type="password"/>
                        <FormHelperText display="none">Passwords are different</FormHelperText>
                    </FormControl>
                </Flex>

                <Flex className="form" w="100%" h="10vh" flexDir="column" align="center" justify="space-evenly">
                    <Text>Create account using:</Text>
                    <HStack spacing="2vw">
                        <Image src={"https://cdn-icons-png.flaticon.com/512/145/145804.png"} h="4.5vh"/>
                        <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/2048px-X_icon.svg.png"} h="4.3vh"/>
                        <Image src={"https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"} h="4.5vh"/>
                        <Image src={"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"} h="4.3vh"/>
                    </HStack>
                    
                </Flex>
                
            </Flex>
            <Flex className="image-box" h="inherit" w="50%" justify="center" align="center">
                <Image className="image" src={welcome3} boxSize="98%" borderBottomRadius="16px"/>
            </Flex>
        </Flex>
    )
}