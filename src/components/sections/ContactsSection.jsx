import { Heading, Text, Box, Link } from '@chakra-ui/react'
import TerminalBox from '../TerminalBox'

function ContactsSection() {
    return (
        <Box w="100%">
            <Heading size="xl" color="neon.blue" textShadow="0 0 10px #00ffff" mb={4}>
                &gt; контакты
            </Heading>
            <TerminalBox>
                <Text color="neon.green" mb={3}>$ cat contacts.conf</Text>
                <Text color="gray.300" ml={4}>
                    [github]   <Link href="https://github.com/woody-rn" color="neon.blue" isExternal>github.com/woody-rn</Link>
                </Text>
                <Text color="gray.300" ml={4}>
                    [email]    <Link href="mailto:nikitinruslan@internet.ru" color="neon.blue">nikitinruslan@internet.ru</Link>
                </Text>
                <Text color="gray.300" ml={4}>
                    [telegram] <Link href="https://t.me/npepub" color="neon.blue" isExternal>@npepub</Link>
                </Text>
                <Text color="neon.green" mt={3}>$ █</Text>
            </TerminalBox>
        </Box>
    )
}

export default ContactsSection