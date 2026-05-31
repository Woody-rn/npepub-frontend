import { Heading, Text, Box } from '@chakra-ui/react'
import TerminalBox from '../TerminalBox'

function HeroSection() {
    return (
        <Box w="100%">
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
            <TerminalBox mt={4}>
                <Text color="neon.green">
                    &gt; Статус: в разработке
                    <br />
                    &gt; Локация: GMT+7
                    <br />
                    &gt; Стек: Java 21, Spring Boot, React
                </Text>
            </TerminalBox>
        </Box>
    )
}

export default HeroSection