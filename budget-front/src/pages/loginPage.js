import { Button, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import Login from "../subpages/login";
import Plogo from "../images/Plogo.png"
import { useState } from "react";

export default function LoginPage() {

    const [activeSub, setActiveSub] = useState("login")

    const setSubpage = (e) => {
        e.preventDefault()

        setActiveSub(e.target.id)
    }


    return (
        <Flex bg="#ced4da" h="100vh" flexDir="column" justify="center" align="center">
            <Flex w="90%" h="9vh" flexDir="row" justify="space-between" align="center" pos="fixed" top="1">
                <Image src={Plogo} boxSize="80px"/>
                <HStack w="50%" spacing="15%">
                    <Button id="login" onClick={setSubpage} variant="login-menu-bttn">Login</Button>
                    <Button id="register" onClick={setSubpage} variant="login-dark-bttn">Register</Button>
                    <Button id="about" onClick={setSubpage} variant="login-menu-bttn">About Us</Button>
                    <Button id="download" onClick={setSubpage} variant="login-menu-bttn">Download</Button>
                </HStack>
            </Flex>
            {activeSub === "login" && <Login />}
            
        </Flex>
    );
}