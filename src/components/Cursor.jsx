import { Box } from '@chakra-ui/react'

function Cursor() {
  return (
    <Box
      as="span"
      display="inline-block"
      w="0.6em"
      h="1em"
      bg="neon.green"
      ml="4px"
      verticalAlign="middle"
      animation="blink 1s step-end infinite"
    />
  )
}

export default Cursor