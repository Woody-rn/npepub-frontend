import { useState, useEffect, useRef } from 'react'
import { Box, Button, Heading, VStack, Input, Link } from '@chakra-ui/react'
import api from '../api'

function AdminResumesPage() {
  const [resumes, setResumes] = useState([])
  const fileInputRef = useRef(null)

  const fetchResumes = async () => {
    try {
      const res = await api.get('/admin/resumes')
      setResumes(res.data)
    } catch (err) {
      console.error('Ошибка загрузки:', err)
    }
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    try {
      await api.post('/admin/resumes', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      fetchResumes()
    } catch (err) {
      console.error('Ошибка загрузки:', err)
    }
  }

  const handleActivate = async (id) => {
    try {
      await api.put(`/admin/resumes/${id}/activate`)
      fetchResumes()
    } catch (err) {
      console.error('Ошибка активации:', err)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Удалить файл?')) return
    try {
      await api.delete(`/admin/resumes/${id}`)
      fetchResumes()
    } catch (err) {
      console.error('Ошибка удаления:', err)
    }
  }

  useEffect(() => {
    fetchResumes()
  }, [])

  return (
    <Box>
      <VStack gap={6} align="stretch">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading size="lg">Резюме</Heading>
          <Box>
            <Button colorPalette="teal" mr={3} onClick={() => fileInputRef.current?.click()}>
              Загрузить PDF
            </Button>
            <Input
              type="file"
              accept=".pdf"
              hidden
              ref={fileInputRef}
              onChange={handleUpload}
            />
          </Box>
        </Box>

        <Box overflowX="auto">
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #4a5568', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>Файл</th>
                <th style={{ padding: '12px' }}>Статус</th>
                <th style={{ padding: '12px' }}>Действия</th>
              </tr>
            </thead>
            <tbody>
              {resumes.map(r => (
                <tr key={r.id} style={{ borderBottom: '1px solid #2d3748' }}>
                  <td style={{ padding: '12px' }}>{r.originalName}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ color: r.active ? '#00ff41' : '#666' }}>
                      {r.active ? 'Активно' : '—'}
                    </span>
                  </td>
                  <td style={{ padding: '12px' }}>
                    {!r.active && (
                      <Link as="button" color="teal.300" mr={3} onClick={() => handleActivate(r.id)}>
                        Актив.
                      </Link>
                    )}
                    <Link as="button" color="red.300" onClick={() => handleDelete(r.id)}>
                      Удалить
                    </Link>
                  </td>
                </tr>
              ))}
              {resumes.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ padding: '24px', textAlign: 'center', color: '#666' }}>
                    Нет загруженных резюме
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Box>
      </VStack>
    </Box>
  )
}

export default AdminResumesPage