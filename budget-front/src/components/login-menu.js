import "../subpages/style/loginStyle.css"
import { Button, Flex, Heading, HStack, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'

export default function LoginMenu(props){
    
    return(
        <>
        <Flex display="flex" className="menu1" w="72vw" h="6vh" flexDir="row" justify="space-between" align="center" bg="#f8f9fa" mb="0.5vh" pl="2%" borderTopRadius="24px">
            <Heading size="md" fontFamily="sans-serif" ml="1%">PennyTracker</Heading>
            <HStack spacing="0" w="51%"> 
                <Button id="login" onClick={props.setSubpage} variant="login-menu-bttn">Login</Button>
                <Button id="register" onClick={props.setSubpage} variant="login-menu-bttn">Register</Button>
                <Button id="aboutus" onClick={props.setSubpage} variant="login-menu-bttn">About Us</Button>
                <Button id="download" onClick={props.setSubpage} variant="login-menu-bttn" borderTopRightRadius="25px">Download</Button>
            </HStack>
        </Flex>
        <Flex className="menu2" display="none" w="72vw" h="6vh" flexDir="row" justify="space-between" align="center" bg="#f8f9fa" mb="0.5vh" pl="2%" pr="3%" borderTopRadius="24px">
            <Heading size="md" fontFamily="sans-serif" ml="1%">PennyTracker</Heading>
            <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon />} />
                <MenuList>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>About Us</MenuItem>
                    <MenuItem>Download</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
        </>
    )
}