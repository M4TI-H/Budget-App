import "./style/loginStyle.css";
import { Flex, Heading, Text, Image, HStack } from "@chakra-ui/react";
import download from "../images/download.jpg"

export default function Download(){

    return(
        <Flex bg="#f8f9fa" h="78vh" w="72vw" flexDir="row" borderBottomRadius="24px">
            <Flex className="form-box" h="inherit" w="50%" borderRadius="3xl" flexDir="column" pt="3%" pb="1%" align="flex-end" justify="space-between">

                <Flex className="title-box" flexDir="column" w="90%" h="12vh" pr="6%">
                    <Heading className="title" fontSize="2vw" color="#212529" fontWeight="extrabold">Hey!<br/>Download Penny Tracker desktop app</Heading>
                    <Text className="title-description" fontSize="0.8vw" color="#6C757D" fontWeight="bold">Easy access to your plans even without internet connection.
                    Download Penny Tracker app on your desktop for a boundless way to manage your budget anytime, anywhere. Once the installation file is downloaded, just open it and follow the simple 
                    prompts to get started. Don't miss out, join the community and make managing your money simplier than ever!
                    </Text>
                </Flex>

                <Flex className="form" w="100%" h="10vh" flexDir="column" align="center" justify="space-evenly">
                    <Text>Check out Penny Tracker on social media</Text>
                    <HStack spacing="2vw">
                        <Image src={"https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png"} h="4.5vh"/>
                        <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/2048px-X_icon.svg.png"} h="4.3vh"/>
                        <Image src={"https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"} h="4.5vh"/>
                        <Image src={"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"} h="4.3vh"/>
                    </HStack>
                </Flex>
                
            </Flex>
            <Flex className="image-box" h="inherit" w="50%" justify="center" align="center">
                <Image className="image" src={download} boxSize="98%" borderBottomRightRadius="16px"/>
            </Flex>
        </Flex>
    )
}