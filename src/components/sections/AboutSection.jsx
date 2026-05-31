import { Heading, Text, Box } from '@chakra-ui/react'

function AboutSection() {
    return (
        <Box w="100%">
            <Heading size="xl" color="neon.blue" textShadow="0 0 10px #00ffff" mb={4}>
                &gt; about.md
            </Heading>
            <Box
                border="1px solid"
                borderColor="#00ffff40"
                p={6}
                boxShadow="0 0 10px #00ffff20"
                fontFamily="mono"
                w="100%"
            >
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
            </Box>
        </Box>
    )
}

export default AboutSection