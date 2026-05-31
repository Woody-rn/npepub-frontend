import { Heading, Text, Box } from '@chakra-ui/react'

function ContactsSection() {
    return (
        <Box w="100%">
            <Heading size="xl" color="neon.blue" textShadow="0 0 10px #00ffff" mb={4}>
                &gt; контакты
            </Heading>
            <Box
                border="1px solid"
                borderColor="#00ffff40"
                p={6}
                boxShadow="0 0 10px #00ffff20"
                fontFamily="mono"
            >
                <Text color="neon.green" mb={3}>$ cat contacts.conf</Text>
                <Text color="gray.300" ml={4}>[github]   https://github.com/woody-rn</Text>
                <Text color="gray.300" ml={4}>[email]    woody@npepub.ru</Text>
                <Text color="gray.300" ml={4}>[telegram] @woody_rn</Text>
                <Text color="neon.green" mt={3}>$ █</Text>
            </Box>
        </Box>
    )
}

export default ContactsSection