import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    components: {
        Button: {
            variants: {
                'menu-bttn': {
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
                    
            }
        }
      }
    }
})

export default theme