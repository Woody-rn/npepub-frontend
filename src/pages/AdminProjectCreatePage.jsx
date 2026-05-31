import { useState } from 'react'
import { Box, Button, Heading, Input, Textarea, VStack, Field } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import api from '../api'

function AdminProjectCreatePage() {
    const [form, setForm] = useState({
        title: '', description: '', technologies: '', githubUrl: '', liveUrl: '', imageUrl: ''
    })
    const navigate = useNavigate()

    const handleSave = async () => {
        const data = {
            ...form,
            technologies: form.technologies.split(',').map(t => t.trim()).filter(t => t)
        }
        try {
            await api.post('/admin/projects', data)
            navigate('/admin/projects')
        } catch (err) {
            console.error('Ошибка сохранения:', err)
        }
    }

    return (
        <Box minH="100vh" bg="gray.900" color="white" p={8}>
            <Box maxW="600px" mx="auto">
                <VStack gap={6} align="stretch">
                    <Heading size="lg">Добавить проект</Heading>

                    <Field.Root>
                        <Field.Label>Название</Field.Label>
                        <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Описание</Field.Label>
                        <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Технологии (через запятую)</Field.Label>
                        <Input value={form.technologies} onChange={(e) => setForm({ ...form, technologies: e.target.value })} />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>GitHub URL</Field.Label>
                        <Input value={form.githubUrl} onChange={(e) => setForm({ ...form, githubUrl: e.target.value })} />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Live URL</Field.Label>
                        <Input value={form.liveUrl} onChange={(e) => setForm({ ...form, liveUrl: e.target.value })} />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Image URL</Field.Label>
                        <Input value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
                    </Field.Root>

                    <Box>
                        <Button colorPalette="gray" mr={3} onClick={() => navigate('/admin/projects')}>Отмена</Button>
                        <Button colorPalette="teal" onClick={handleSave}>Сохранить</Button>
                    </Box>
                </VStack>
            </Box>
        </Box>
    )
}

export default AdminProjectCreatePage