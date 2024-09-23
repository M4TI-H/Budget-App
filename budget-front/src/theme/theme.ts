import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    components: {
        Button: {
            variants: {
                'menu-bttn': {
                    bg: "none",
                    color: "#212529",
                    w: "100%",
                    h: "6vh",
                    borderRadius: 0,
                    justifyContent: "flex-start",
                    _hover: {
                        bg: "#e9ecef"
                    }
            }
        }
      }
    }
})

export default theme