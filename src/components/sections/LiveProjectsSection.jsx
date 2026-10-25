import { Heading, Text, Box, Link } from '@chakra-ui/react'
import TerminalBox from '../TerminalBox'
import Cursor from '../Cursor'

function LiveProjectsSection() {
    return (
        <Box w="100%">
            <Heading size="xl" color="neon.blue" textShadow="0 0 10px #00ffff" mb={4}>
                &gt; активные_сервисы
            </Heading>

            <TerminalBox>
                <Text color="gray.300" mb={4}>
                    Мои пет-проекты, которые работают прямо сейчас (развернуты на собственном сервере):
                </Text>

                <Box mb={3}>
                    <Text color="neon.yellow" mb={1}>[bank]</Text>
                    <Text color="gray.300" ml={4}>
                        Система управления банковскими картами (Java + React).<br/>
                        <Link href="https://bank.npepub.ru" color="neon.blue" isExternal>Frontend</Link> •
                        <Link href="https://bank-api.npepub.ru/swagger-ui/index.html" color="neon.blue" isExternal ml={2}>Swagger API</Link>
                    </Text>
                </Box>

                <Box mb={4}>
                    <Text color="neon.yellow" mb={1}>[jsonfusion]</Text>
                    <Text color="gray.300" ml={4}>
                        Веб-сервис для слияния JSON-файлов (Java + React).<br/>
                        <Link href="https://jsonfusion.npepub.ru" color="neon.blue" isExternal>Открыть сервис</Link>
                    </Text>
                </Box>

                <Text color="neon.green" mt={4}>$<Cursor /></Text>
            </TerminalBox>
        </Box>
    )
}

export default LiveProjectsSection