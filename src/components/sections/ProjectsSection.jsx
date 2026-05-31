import { useState, useEffect } from 'react'
import { Heading, Text, Box, SimpleGrid, Card, Badge, Stack, Link } from '@chakra-ui/react'
import axios from 'axios'

function ProjectsSection() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get('/api/v1/projects')
            .then(res => setProjects(res.data))
            .catch(err => console.error('Ошибка загрузки проектов:', err))
    }, [])

    return (
        <Box w="100%">
            <Heading size="xl" color="neon.blue" textShadow="0 0 10px #00ffff" mb={4}>
                &gt; проекты
            </Heading>
            {projects.length > 0 ? (
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="100%">
                    {projects.slice(0, 4).map(project => (
                        <Card.Root key={project.id} bg="gray.900" borderColor="gray.700" borderWidth="1px"
                            _hover={{ borderColor: 'neon.blue', boxShadow: '0 0 15px #00ffff40' }}
                        >
                            <Card.Body gap={4}>
                                <Heading size="md" color="neon.yellow">{project.title}</Heading>
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
                                        <Link href={project.githubUrl} color="neon.blue">GitHub</Link>
                                    )}
                                    {project.liveUrl && (
                                        <Link href={project.liveUrl} color="neon.blue">Демо</Link>
                                    )}
                                </Stack>
                            </Card.Footer>
                        </Card.Root>
                    ))}
                </SimpleGrid>
            ) : (
                <Text color="gray.500">Проекты не найдены</Text>
            )}
        </Box>
    )
}

export default ProjectsSection