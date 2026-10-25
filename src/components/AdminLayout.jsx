import { Outlet, Link as RouterLink } from 'react-router-dom'
import { Box, Container, Link, Flex, Heading } from '@chakra-ui/react'

function AdminLayout() {
    return (
        <Box
            minH="100vh"
            color="white"
            position="relative"
            display="flex"
            flexDirection="column"
            bg="#0a0a0a"
        >
            {/* Стилизованный Header */}
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
                        <Heading size="md" fontFamily="mono">
                            <Link
                                asChild
                                color="gray.400"
                                transition="all 0.2s"
                                _hover={{
                                    color: 'neon.yellow',
                                    textShadow: '0 0 10px #fcee0a',
                                    textDecoration: 'none'
                                }}
                            >
                                <RouterLink to="/">← на сайт</RouterLink>
                            </Link>
                        </Heading>
                    </Flex>
                </Container>
            </Box>

            {/* Контент админки */}
            <Container maxW="container.lg" py={8} position="relative" zIndex={1} flex="1">
                <Outlet />
            </Container>
        </Box>
    )
}

export default AdminLayout