import { Outlet, Link as RouterLink } from 'react-router-dom'
import { Box, Flex, Link, Heading, Container } from '@chakra-ui/react'

function Layout() {
  return (
    <Box minH="100vh" bg="gray.900" color="white">
      <Flex as="nav" p={4} borderBottom="1px" borderColor="gray.700" justify="space-between" align="center">
        <Heading size="md">
          <Link asChild _hover={{ textDecoration: 'none', color: 'teal.300' }}>
            <RouterLink to="/">npepub</RouterLink>
          </Link>
        </Heading>
        <Flex gap={6}>
          <Link asChild _hover={{ color: 'teal.300' }}>
            <RouterLink to="/">Главная</RouterLink>
          </Link>
          <Link asChild _hover={{ color: 'teal.300' }}>
            <RouterLink to="/projects">Проекты</RouterLink>
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