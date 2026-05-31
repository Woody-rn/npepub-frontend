import { useState, useEffect } from 'react'
import { Box, Button, Heading, VStack, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import api from '../api'

function AdminProjectsPage() {
    const [projects, setProjects] = useState([])
    const navigate = useNavigate()

    const fetchProjects = async () => {
        try {
            const res = await api.get('/projects')
            setProjects(res.data)
        } catch (err) {
            console.error('Ошибка загрузки:', err)
        }
    }

    const handleDelete = async (id) => {
        if (!window.confirm('Удалить проект?')) return
        try {
            await api.delete(`/admin/projects/${id}`)
            setProjects(projects.filter(p => p.id !== id))
        } catch (err) {
            console.error('Ошибка удаления:', err)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/admin/login')
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <Box minH="100vh" bg="gray.900" color="white" p={8}>
            <VStack gap={6} align="stretch">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Heading size="lg">Управление проектами</Heading>
                    <Box>
                        <Button colorPalette="teal" mr={3} onClick={() => navigate('/admin/projects/new')}>
                            Добавить проект
                        </Button>
                        <Button colorPalette="gray" onClick={handleLogout}>
                            Выйти
                        </Button>
                    </Box>
                </Box>

                <Box overflowX="auto">
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #4a5568', textAlign: 'left' }}>
                                <th style={{ padding: '12px' }}>ID</th>
                                <th style={{ padding: '12px' }}>Название</th>
                                <th style={{ padding: '12px' }}>Описание</th>
                                <th style={{ padding: '12px' }}>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project.id} style={{ borderBottom: '1px solid #2d3748' }}>
                                    <td style={{ padding: '12px' }}>{project.id}</td>
                                    <td style={{ padding: '12px' }}>{project.title}</td>
                                    <td style={{ padding: '12px' }}>{project.description?.substring(0, 50)}...</td>
                                    <td style={{ padding: '12px' }}>
                                        <Link as="button" color="teal.300" mr={3} onClick={() => navigate(`/admin/projects/${project.id}/edit`)}>
                                            Ред.
                                        </Link>
                                        <Link as="button" color="red.300" onClick={() => handleDelete(project.id)}>
                                            Удалить
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
            </VStack>
        </Box>
    )
}

export default AdminProjectsPage