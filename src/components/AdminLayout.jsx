import { Outlet, Link as RouterLink } from 'react-router-dom'
import { Box, Container, Link, Flex, Heading } from '@chakra-ui/react'

function AdminLayout() {
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
          boxShadow="0 0 20px #00ffff20"
        >
          <Heading size="md" color="neon.yellow" textShadow="0 0 10px #fcee0a">
            <Link asChild _hover={{ textDecoration: 'none', color: 'neon.pink' }}>
              <RouterLink to="/">[npepub]</RouterLink>
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

export default AdminLayout