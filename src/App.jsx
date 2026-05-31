import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminProjectsPage from './pages/AdminProjectsPage'
import AdminProjectCreatePage from './pages/AdminProjectCreatePage'
import AdminProjectEditPage from './pages/AdminProjectEditPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Route>
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/projects" element={
        <ProtectedRoute>
          <AdminProjectsPage />
        </ProtectedRoute>
      } />
      <Route path="/admin/projects/new" element={
        <ProtectedRoute>
          <AdminProjectCreatePage />
        </ProtectedRoute>
      } />
      <Route path="/admin/projects/:id/edit" element={
        <ProtectedRoute>
          <AdminProjectEditPage />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App