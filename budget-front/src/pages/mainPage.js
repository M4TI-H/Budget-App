import "./mainPageStyle.css";
import { useState } from "react";
import { Flex, Text, VStack, Button, Image} from "@chakra-ui/react";
import { IconUserCircle, IconSettings, IconLogout, IconChartDots, IconHistory, IconCategory2, IconWallet} from "@tabler/icons-react";
import logo from "../images/logo.png";
import Dashboard from "../subpages/dashboard";
import Statistics from "../subpages/statistics";

export default function MainPage() {

    const [activeSub, setActiveSub] = useState("dashboard")

    const setSubpage = (e) => {
        e.preventDefault()

        setActiveSub(e.target.id)
    }

    return (
        <Flex bg="#ced4da" h="100vh" flexDir={"row"}>
            <Flex className="sidebar" bg="#f8f9fa" w="10vw" h="100vh" flexDir={"column"} justify={"space-between"}>
                <VStack spacing={0} h="50vh">
                    <Image className="logo-img" src={logo} h="20%"/>
    
                    <Button variant="menu-bttn" id="dashboard" className="menu-btn" onClick={setSubpage} leftIcon={<IconCategory2 />}><Text className="btn-text">Dashboard</Text></Button>
                    <Button variant="menu-bttn" id="statistics" className="menu-btn" onClick={setSubpage} leftIcon={<IconChartDots />}><Text className="btn-text">Statistics</Text></Button>
                    <Button variant="menu-bttn" id="history" className="menu-btn" onClick={setSubpage} leftIcon={<IconHistory />}><Text className="btn-text">History</Text></Button>
                    <Button variant="menu-bttn" id="accounts" className="menu-btn" onClick={setSubpage} leftIcon={<IconWallet />}><Text className="btn-text">Accounts</Text></Button>
                
                </VStack>
                <VStack spacing={0} h="50vh" flexDir={"column"} justify={"flex-end"}>
                    <Button variant="menu-bttn" id="profile" className="menu-btn" onClick={setSubpage} leftIcon={<IconUserCircle />}><Text className="btn-text">Profile</Text></Button>
                    <Button variant="menu-bttn" id="settings" className="menu-btn" onClick={setSubpage} leftIcon={<IconSettings />}><Text className="btn-text">Settings</Text></Button>
                    <Button variant="menu-bttn" id="logout" className="menu-btn" onClick={setSubpage} leftIcon={<IconLogout />}><Text className="btn-text">Log out</Text></Button>
                </VStack>
            </Flex>

            <Flex className="subpage" w="90vw" h="100vh" flexDir={"column"}>
                {activeSub === "dashboard" && <Dashboard />}
                {activeSub === "statistics" && <Statistics />}
                {activeSub === "history" && <Dashboard />}
                {activeSub === "accounts" && <Dashboard />}
                {activeSub === "profile" && <Dashboard />}
                {activeSub === "settings" && <Dashboard />}

            </Flex>
        </Flex>
    )
}