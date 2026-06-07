import { Box } from '@chakra-ui/react'

function TerminalBox({ children, ...props }) {
    return (
        <Box
            border="1px solid"
            borderColor="neon.blue"
            p={6}
            boxShadow="0 0 10px #00ffff, inset 0 0 10px #00ffff20"
            fontFamily="mono"
            w="100%"
            bg="rgba(0, 0, 0, 0.7)"
            backdropFilter="blur(4px)"
            {...props}
        >
            {children}
        </Box>
    )
}

export default TerminalBox