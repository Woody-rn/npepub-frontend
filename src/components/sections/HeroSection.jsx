import { Heading, Text, Box } from '@chakra-ui/react'

function HeroSection() {
    return (
        <Box>
            <Heading
                size="2xl"
                color="neon.yellow"
                textShadow="0 0 10px #fcee0a, 0 0 40px #fcee0a, 0 0 80px #ff00ff"
                _hover={{ animation: 'glitch 0.3s infinite' }}
            >
                &gt; Привет, я Java-разработчик
            </Heading>
            <Text fontSize="lg" color="gray.300" mt={4} maxW="600px">
                Создаю бэкенды на Spring Boot и разбираюсь в современном фронтенде.
                Добро пожаловать в моё портфолио.
            </Text>
            <Box
                border="1px solid"
                borderColor="neon.blue"
                p={4}
                mt={4}
                boxShadow="0 0 10px #00ffff, inset 0 0 10px #00ffff20"
                fontFamily="mono"
            >
                <Text color="neon.green">
                    &gt; Статус: в разработке
                    <br />
                    &gt; Локация: GMT+7
                    <br />
                    &gt; Стек: Java 21, Spring Boot, React
                </Text>
            </Box>
        </Box>
    )
}

export default HeroSection