import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box, Button, Field, Heading, Input, VStack, Alert
} from '@chakra-ui/react'
import axios from 'axios'

function AdminLoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post('/api/v1/admin/login', { username, password })
      localStorage.setItem('token', response.data.token)
      navigate('/admin/projects')
    } catch (err) {
      setError('Неверный логин или пароль')
    }
  }

  return (
    <Box maxW="400px" mx="auto" mt={20}>
      <VStack gap={6} align="stretch">
        <Heading size="lg" textAlign="center">Вход в админку</Heading>

        {error && (
          <Alert.Root status="error">
            <Alert.Indicator />
            <Alert.Title>{error}</Alert.Title>
          </Alert.Root>
        )}

        <form onSubmit={handleLogin}>
          <VStack gap={4}>
            <Field.Root required>
              <Field.Label>Логин</Field.Label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
              />
            </Field.Root>

            <Field.Root required>
              <Field.Label>Пароль</Field.Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Field.Root>

            <Button type="submit" colorPalette="teal" width="full">
              Войти
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  )
}

export default AdminLoginPage