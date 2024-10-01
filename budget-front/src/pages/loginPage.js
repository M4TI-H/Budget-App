import { Flex } from "@chakra-ui/react";
import Register from "../subpages/register";
import Login from "../subpages/login";
import LoginMenu from "../components/login-menu"
import { useState } from "react";

export default function LoginPage() {

    const [activeSub, setActiveSub] = useState("register")

    const setSubpage = (e) => {
        e.preventDefault()
    
        setActiveSub(e.target.id)
    }

    return (
        <Flex bg="#ced4da" h="100vh" flexDir="column" justify="center" align="center">
            <LoginMenu setSubpage={setSubpage}/>
            {activeSub === "register" && <Register setSubpage={setSubpage}/>}
            {activeSub === "login" && <Login setSubpage={setSubpage}/>}
        </Flex>
    );
}