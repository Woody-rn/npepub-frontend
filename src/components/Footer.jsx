import { Box, Flex, Text, Link, Container } from '@chakra-ui/react'

function Footer() {
    return (
        <Box
            as="footer"
            w="100%"
            py={6}
            borderTop="1px solid"
            borderColor="#00ffff20"
            mt="auto"
        >
            <Container maxW="container.lg">
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                    align="center"
                    gap={4}
                >
                    {/* Логотип и копирайт */}
                    <Text color="gray.500" fontSize="sm" fontFamily="mono">
                        © {new Date().getFullYear()} <Text as="span" color="neon.yellow">[npepub]</Text>. Все права защищены.
                    </Text>

                    {/* Ссылки */}
                    <Flex gap={6} fontFamily="mono" fontSize="sm">
                        <Link
                            href="https://github.com/woody-rn"
                            isExternal
                            color="gray.400"
                            _hover={{ color: 'neon.blue', textShadow: '0 0 8px #00ffff' }}
                        >
                            GitHub
                        </Link>
                        <Link
                            href="https://t.me/npepub"
                            isExternal
                            color="gray.400"
                            _hover={{ color: 'neon.blue', textShadow: '0 0 8px #00ffff' }}
                        >
                            Telegram
                        </Link>
                        <Link
                            href="mailto:nikitinruslan@internet.ru"
                            color="gray.400"
                            _hover={{ color: 'neon.blue', textShadow: '0 0 8px #00ffff' }}
                        >
                            Email
                        </Link>
                        <Link
                            href="/api/v1/resume"
                            color="neon.pink"
                            _hover={{ color: 'white', textShadow: '0 0 8px #ff00ff' }}
                        >
                            Resume.pdf
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

export default Footer