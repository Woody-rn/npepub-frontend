import { Outlet, Link as RouterLink } from 'react-router-dom'
import { Box, Flex, Link, Heading, Container } from '@chakra-ui/react'

function Layout() {
  return (
    <Box minH="100vh" bg="#0a0a0a" color="white">
      <Flex
        as="nav"
        p={4}
        borderBottom="1px solid"
        borderColor="#ff00ff40"
        justify="space-between"
        align="center"
        bg="#0a0a0a"
        boxShadow="0 0 20px #ff00ff20"
      >
        <Heading size="md" color="neon.yellow" textShadow="0 0 10px #fcee0a">
          <Link asChild _hover={{ textDecoration: 'none', color: 'neon.pink' }}>
            <RouterLink to="/">[npepub]</RouterLink>
          </Link>
        </Heading>
        <Flex gap={6}>
          <Link asChild _hover={{ color: 'neon.blue', textShadow: '0 0 10px #00ffff' }}>
            <RouterLink to="/">~/главная</RouterLink>
          </Link>
          <Link asChild _hover={{ color: 'neon.blue', textShadow: '0 0 10px #00ffff' }}>
            <RouterLink to="/projects">~/проекты</RouterLink>
          </Link>
        </Flex>
      </Flex>
      <Container maxW="container.lg" py={8}>
        <Outlet />
      </Container>
    </Box>
  )
}

export default Layout