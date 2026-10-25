import { useState, useEffect } from 'react'
import { Heading, Text, Box, SimpleGrid, Card, Badge, Stack, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import axios from 'axios'

function ProjectsSection() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/api/v1/projects')
            .then(res => setProjects(res.data))
            .catch(err => console.error('Ошибка загрузки проектов:', err))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <Text color="gray.300">Загрузка проектов...</Text>
    if (!projects || projects.length === 0) return null

    return (
        <Box w="100%">
            <Heading size="xl" color="neon.blue" textShadow="0 0 10px #00ffff" mb={4}>
                &gt; live_projects
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="100%" mb={6}>
                {projects.slice(0, 3).map(project => (
                    <Card.Root
                        key={project.id}
                        bg="gray.900"
                        borderColor="gray.700"
                        borderWidth="1px"
                        _hover={{ borderColor: 'neon.blue', boxShadow: '0 0 15px #00ffff40' }}
                        transition="all 0.2s"
                    >
                        <Card.Body gap={4}>
                            <Heading size="md" color="neon.yellow">{project.title}</Heading>
                            <Text color="gray.400">{project.description}</Text>

                            <Stack direction="row" wrap="wrap">
                                {project.technologies?.map(tech => (
                                    <Badge key={tech} colorPalette="teal" variant="subtle">{tech}</Badge>
                                ))}
                            </Stack>
                        </Card.Body>

                        <Card.Footer>
                            <Stack direction="row" gap={4}>
                                {project.githubUrl && (
                                    <Link href={project.githubUrl} isExternal color="neon.blue">GitHub</Link>
                                )}
                                {project.liveUrl && (
                                    <Link href={project.liveUrl} isExternal color="neon.blue">Демо</Link>
                                )}
                            </Stack>
                        </Card.Footer>
                    </Card.Root>
                ))}
            </SimpleGrid>

            <Link asChild color="neon.yellow" _hover={{ textShadow: '0 0 10px #fcee0a' }}>
                <RouterLink to="/projects">
                    &gt; смотреть_все_проекты_→
                </RouterLink>
            </Link>
        </Box>
    )
}

export default ProjectsSection