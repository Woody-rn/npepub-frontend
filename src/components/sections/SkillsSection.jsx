import { Heading, Text, Box } from '@chakra-ui/react'
import TerminalBox from '../TerminalBox'
import Cursor from '../Cursor'

function SkillsSection() {
    return (
        <Box w="100%">
            <Heading size="xl" color="neon.blue" textShadow="0 0 10px #00ffff" mb={4}>
                &gt; стек_технологий
            </Heading>
            <TerminalBox>
                <Box mb={4}>
                    <Text color="neon.yellow" mb={1}>[backend]</Text>
                    <Text color="gray.300" ml={4}>Java 17/21, Spring Boot, Spring Security, Spring Data JPA, Hibernate, JOOQ, Javalin</Text>
                </Box>
                <Box mb={4}>
                    <Text color="neon.yellow" mb={1}>[database]</Text>
                    <Text color="gray.300" ml={4}>PostgreSQL, MySQL, Liquibase, H2</Text>
                </Box>
                <Box mb={4}>
                    <Text color="neon.yellow" mb={1}>[testing]</Text>
                    <Text color="gray.300" ml={4}>JUnit 5, Mockito, Spring Test, TestContainers</Text>
                </Box>
                <Box mb={4}>
                    <Text color="neon.yellow" mb={1}>[devops]</Text>
                    <Text color="gray.300" ml={4}>Docker, Docker Compose, Nginx, GitHub Actions (CI/CD), Linux, Certbot</Text>
                </Box>
                <Box mb={4}>
                    <Text color="neon.yellow" mb={1}>[frontend]</Text>
                    <Text color="gray.300" ml={4}>React (18/19), TypeScript, Chakra UI, Zustand</Text>
                </Box>
                <Text color="neon.green" mt={4}>$<Cursor /></Text>
            </TerminalBox>
        </Box>
    )
}

export default SkillsSection