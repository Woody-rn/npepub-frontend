import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom'
import { Box, Flex, Link, Heading, Container } from '@chakra-ui/react'
import Footer from './Footer'
import MatrixBackground from './MatrixBackground'

const neonLinkStyle = {
  color: 'gray.400',
  textShadow: 'none',
  transition: 'all 0.2s',
  _hover: {
    color: 'neon.yellow',
    textShadow: '0 0 10px #fcee0a, 0 0 20px #fcee0a',
    textDecoration: 'none'
  }
}

const activeLinkStyle = {
  color: 'neon.yellow',
  textShadow: '0 0 10px #fcee0a, 0 0 20px #fcee0a',
}

function Layout() {
  const location = useLocation()

  return (
      <Box
          minH="100vh"
          color="white"
          position="relative"
          display="flex"
          flexDirection="column"
          bg="#0a0a0a"
      >
        {/* Фон с эффектом Матрицы */}
        <MatrixBackground />

        {/* Header */}
        <Box
            as="header"
            position="sticky"
            top={0}
            zIndex={10}
            bg="rgba(10, 10, 10, 0.95)"
            backdropFilter="blur(8px)"
            borderBottom="1px solid"
            borderColor="#00ffff40"
            boxShadow="0 4px 20px #00ffff10"
        >
          <Container maxW="container.lg">
            <Flex
                as="nav"
                h="64px"
                justify="space-between"
                align="center"
            >
              {/* Логотип */}
              <Heading size="md" fontFamily="mono">
                <Link
                    asChild
                    color="neon.yellow"
                    textShadow="0 0 10px #fcee0a"
                    _hover={{ textDecoration: 'none', color: 'white' }}
                >
                  <RouterLink to="/">[npepub]</RouterLink>
                </Link>
              </Heading>

              {/* Навигация */}
              <Flex gap={8} fontFamily="mono" fontSize="md">
                <Link
                    asChild
                    {...(location.pathname === '/projects' ? activeLinkStyle : neonLinkStyle)}
                >
                  <RouterLink to="/projects">~/проекты</RouterLink>
                </Link>
                <Link
                    asChild
                    {...(location.pathname.startsWith('/admin') ? activeLinkStyle : neonLinkStyle)}
                >
                  <RouterLink to="/admin/login">~/админ</RouterLink>
                </Link>
              </Flex>
            </Flex>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxW="container.lg" py={12} position="relative" zIndex={1} flex="1">
          <Outlet />
        </Container>

        {/* Footer */}
        <Footer />
      </Box>
  )
}

export default Layout