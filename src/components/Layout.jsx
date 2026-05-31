import { Outlet, Link as RouterLink } from 'react-router-dom'
import { Box, Flex, Link, Heading, Container } from '@chakra-ui/react'

const neonLinkStyle = {
  color: 'neon.yellow',
  textShadow: '0 0 10px #fcee0a, 0 0 20px #fcee0a',
  _hover: {
    color: 'white',
    textShadow: '0 0 15px #fcee0a, 0 0 30px #fcee0a, 0 0 45px #fcee0a'
  }
}

function Layout() {
  return (
    <Box minH="100vh" bg="#0a0a0a" color="white">
      <Container maxW="container.lg" py={4}>
        <Flex
          as="nav"
          p={4}
          borderBottom="1px solid"
          borderColor="#00ffff40"
          justify="space-between"
          align="center"
          bg="#0a0a0a"
          boxShadow="0 0 20px #00ffff20"
        >
          <Flex gap={6} align="center">
            <Heading size="md" {...neonLinkStyle}>
              <Link asChild _hover={{ textDecoration: 'none' }}>
                <RouterLink to="/">[npepub]</RouterLink>
              </Link>
            </Heading>
            <Heading size="md" {...neonLinkStyle}>
              <Link asChild _hover={{ textDecoration: 'none' }}>
                <RouterLink to="/projects">~/проекты</RouterLink>
              </Link>
            </Heading>
          </Flex>
          <Heading size="md" {...neonLinkStyle}>
            <Link asChild _hover={{ textDecoration: 'none' }}>
              <RouterLink to="/admin/login">~/админ</RouterLink>
            </Link>
          </Heading>
        </Flex>
      </Container>
      <Container maxW="container.lg" py={8}>
        <Outlet />
      </Container>
    </Box>
  )
}

export default Layout