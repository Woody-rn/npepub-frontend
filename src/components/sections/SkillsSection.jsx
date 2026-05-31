import { Heading, Text, Box } from '@chakra-ui/react'

function SkillsSection() {
    return (
        <Box w="100%">
            <Heading size="xl" color="neon.blue" textShadow="0 0 10px #00ffff" mb={4}>
                &gt; стек_технологий
            </Heading>
            <Box
                border="1px solid"
                borderColor="#00ffff40"
                p={6}
                boxShadow="0 0 10px #00ffff20"
                fontFamily="mono"
            >
                <Text color="neon.green" mb={3}>$ cat skills.conf</Text>
                <Box mb={4}>
                    <Text color="neon.yellow">[backend]</Text>
                    <Text color="gray.300" ml={4}>Java 21, Spring Boot, Hibernate, REST API</Text>
                </Box>
                <Box mb={4}>
                    <Text color="neon.yellow">[database]</Text>
                    <Text color="gray.300" ml={4}>PostgreSQL, Liquibase, Redis</Text>
                </Box>
                <Box mb={4}>
                    <Text color="neon.yellow">[devops]</Text>
                    <Text color="gray.300" ml={4}>Docker, Nginx, GitHub Actions, Linux</Text>
                </Box>
                <Box mb={4}>
                    <Text color="neon.yellow">[frontend]</Text>
                    <Text color="gray.300" ml={4}>React, Chakra UI, JavaScript</Text>
                </Box>
                <Text color="neon.green">$ █</Text>
            </Box>
        </Box>
    )
}

export default SkillsSection