import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import Register from "../subpages/register";
import Login from "../subpages/login";
import LoginMenu from "../components/login-menu"
import Aboutus from "../subpages/aboutus";
import Download from "../subpages/download";
import RegisterValidation from "../validation/registerValidation";

export default function LoginPage() {

    const [activeSub, setActiveSub] = useState("login")

    //Select subpage with menu buttons
    const setSubpage = (e) => {
        e.preventDefault();
    
        setActiveSub(e.target.id);
    }

    //Create user with register form
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [registerData, setRegisterData] = useState({email: null, password: null, password2: null});

    const [logemail , setLogEmail] = useState("");
    const [logpassword, setLogPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState({});

    const submitRegistration = (e) => {
        e.preventDefault();

        const error = RegisterValidation(email, password, password2, setRegisterData);
        setErrorMessage(error);

        const registerUserQuery = async () => {
            await axios.post("http://localhost:8080/register", {email, password})
            .then((res) => {
                console.log(registerData)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        if(error.email !== "" || error.password !== "" || error.password2 !== ""){
            console.log("Validation error", password, password2);
        }
        else{
            registerUserQuery();
            setEmail("");
            setPassword("");
            setPassword2("");
            //setActiveSub("login");
        }
    }

    const submitLogin = (e) => {
        e.preventDefault();

        const LoginUserQuery = async () => {
            await axios.post("http://localhost:8080/login", {logemail, logpassword})
            .then((res) => {
                console.log(logemail, logpassword);
            })
            .catch((err) => {
                console.log(err)
            })
        }   
        LoginUserQuery();
    }

    return (
        <Flex bg="#ced4da" h="100vh" flexDir="column" justify="center" align="center">
            <LoginMenu setSubpage={setSubpage}/>
            {activeSub === "register" && <Register setSubpage={setSubpage} submitRegistration={submitRegistration} setEmail={setEmail} setPassword={setPassword} setPassword2={setPassword2}
            errorMessage={errorMessage} email={email} password={password} password2={password2}/>}
            {activeSub === "login" && <Login setSubpage={setSubpage} submitLogin={submitLogin} setLogPassword={setLogPassword} setLogEmail={setLogEmail}
            errorMessage={errorMessage} logemail={logemail} logpassword={logpassword}/>}
            {activeSub === "aboutus" && <Aboutus />}
            {activeSub === "download" && <Download />}

        </Flex>
    );
}