import { useState, useEffect } from 'react'
import { Heading, SimpleGrid, Card, Text, Badge, Stack, Link, VStack, Box } from '@chakra-ui/react'
import axios from 'axios'

function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/api/v1/projects')
      .then(res => {
        console.log('API response:', res.data)
        setProjects(res.data)
      })
      .catch(err => {
        console.error('Ошибка загрузки проектов:', err)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Text>Загрузка...</Text>

  if (!Array.isArray(projects) || projects.length === 0) {
    return <Text>Проекты не найдены</Text>
  }

  return (
    <VStack gap={6} align="start">
      <Heading size="xl">Мои проекты</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="100%">
        {projects.map(project => (
          <Card.Root key={project.id} bg="gray.800" borderColor="gray.700" borderWidth="1px">
            <Card.Body gap={4}>
              <Heading size="md">{project.title}</Heading>
              <Text color="gray.400">{project.description}</Text>
              <Stack direction="row" wrap="wrap">
                {project.technologies?.map(tech => (
                  <Badge key={tech} colorPalette="teal">{tech}</Badge>
                ))}
              </Stack>
            </Card.Body>
            <Card.Footer>
              <Stack direction="row" gap={4}>
                {project.githubUrl && (
                  <Link href={project.githubUrl} color="teal.300">GitHub</Link>
                )}
                {project.liveUrl && (
                  <Link href={project.liveUrl} color="teal.300">Демо</Link>
                )}
              </Stack>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default ProjectsPage