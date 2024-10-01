import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    components: {
        Button: {
            variants: {
                'sidemenu-bttn': {
                    bg: "none",
                    color: "#212529",
                    w: "100%",
                    h: "15%",
                    borderRadius: 0,
                    justifyContent: "flex-start",
                    
                    "@media (max-width: 1400px), (max-height: 400px)": {
                        justifyContent: "center",
                        h: "25%",
                    },
                    _hover: {
                        bg: "#e9ecef"
                    }
                },

                'login-menu-bttn': {
                    bg: "none",
                    color: "#212529",
                    w: "25%",
                    h: "6vh",
                    borderRadius: 0,
                    _hover: {
                        bg: "#E9ECEF"
                    }
                },

                'login-dark-bttn': {
                    bg: "#212529",
                    color: "#F8F9FA",
                    w: "120px",
                    h: "6vh",
                    borderRadius: "15px",
                    _hover: {
                        bg: "#495057",
                        h: "9vh",
                        borderRadius: 0,
                    }
                }
            }
        }
    }
})

export default theme