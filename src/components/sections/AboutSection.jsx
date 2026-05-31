import { Heading, Text, Box } from '@chakra-ui/react'
import TerminalBox from '../TerminalBox'

function AboutSection() {
    return (
        <Box w="100%">
            <Heading size="xl" color="neon.blue" textShadow="0 0 10px #00ffff" mb={4}>
                &gt; about.md
            </Heading>
            <TerminalBox>
                <Text color="neon.green" mb={3}>$ cat about.txt</Text>
                <Text color="gray.300" ml={4}>
                    Java-разработчик с фокусом на Spring Boot и микросервисы.
                </Text>
                <Text color="gray.300" ml={4}>
                    Умею строить REST API, работать с базами данных и Docker.
                </Text>
                <Text color="gray.300" ml={4}>
                    Осваиваю современный фронтенд на React.
                </Text>
                <Text color="gray.300" ml={4}>
                    Люблю чистый код и SOLID.
                </Text>
                <Text color="neon.green" mt={3}>$ █</Text>
            </TerminalBox>
        </Box>
    )
}

export default AboutSection