import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AdminLayout from './components/AdminLayout'
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
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="login" element={<AdminLoginPage />} />
        <Route path="projects" element={
          <ProtectedRoute>
            <AdminProjectsPage />
          </ProtectedRoute>
        } />
        <Route path="projects/new" element={
          <ProtectedRoute>
            <AdminProjectCreatePage />
          </ProtectedRoute>
        } />
        <Route path="projects/:id/edit" element={
          <ProtectedRoute>
            <AdminProjectEditPage />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  )
}

export default App