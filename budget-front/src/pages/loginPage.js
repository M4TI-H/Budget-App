import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import Register from "../subpages/register";
import Login from "../subpages/login";
import LoginMenu from "../components/login-menu"
import Aboutus from "../subpages/aboutus";
import Download from "../subpages/download";

export default function LoginPage() {

    const [activeSub, setActiveSub] = useState("login")

    //Select subpage with menu buttons
    const setSubpage = (e) => {
        e.preventDefault()
    
        setActiveSub(e.target.id)
    }

    //Create user with register form
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [registerData, setRegisterData] = useState([])

    const submitRegistration = (e) => {
        e.preventDefault()

        const registerUserQuery = async () => {
            await axios.post("http://localhost:8080/register", {email, password})
            .then((res) => {
                console.log(registerData)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        registerUserQuery()
    }

    return (
        <Flex bg="#ced4da" h="100vh" flexDir="column" justify="center" align="center">
            <LoginMenu setSubpage={setSubpage}/>
            {activeSub === "register" && <Register setSubpage={setSubpage} submitRegistration={submitRegistration} setEmail={setEmail} setPassword={setPassword}/>}
            {activeSub === "login" && <Login setSubpage={setSubpage}/>}
            {activeSub === "aboutus" && <Aboutus />}
            {activeSub === "download" && <Download />}
        </Flex>
    );
}