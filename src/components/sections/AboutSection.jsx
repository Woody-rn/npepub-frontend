import {Heading, Text, Box} from '@chakra-ui/react'
import TerminalBox from '../TerminalBox'
import Cursor from '../Cursor'

function AboutSection() {
    return (
        <Box w="100%">
            <Heading
                size="2xl"
                color="neon.blue"
                textShadow="0 0 10px #00ffff, 0 0 40px #00ffff"
                mb={6}
            >
                &gt; about.md
            </Heading>

            <TerminalBox>
                <Text color="gray.300" mb={4}>
                    Java Backend Developer. Пишу на Java 17/21 со стеком Spring (Boot, Security, Data JPA)
                </Text>

                <Text color="neon.green" fontFamily="mono">
                    &gt; Занятость: открыт к предложениям
                    <br/>
                    &gt; Локация: Красноярск / Удаленная работа / Гибрид
                    <br/>
                    &gt; Фокус: Spring Boot, микросервисы, REST API
                    <br/>
                    &gt; Изучаю: React, современный фронтенд
                    <br/>
                    &gt; Принципы: SOLID, DIP, Ports & Adapters
                    <br/>
                    &gt; English: Pre-Intermediate (чтение документации)
                </Text>

                <Text color="neon.green" mt={6}>$<Cursor/></Text>
            </TerminalBox>
        </Box>
    )
}

export default AboutSection