import { Heading, Text, VStack } from '@chakra-ui/react'

function HomePage() {
  return (
    <VStack gap={6} align="start">
      <Heading size="2xl">Привет, я Java-разработчик</Heading>
      <Text fontSize="lg" color="gray.400">
        Создаю бэкенды на Spring Boot и разбираюсь в современном фронтенде.
        Добро пожаловать в моё портфолио.
      </Text>
    </VStack>
  )
}

export default HomePage