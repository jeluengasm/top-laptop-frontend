import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { DashboardManagerPage } from './pages/DashboardManagerPage'
import { DashboardViewPage } from './pages/DashboardViewPage'
import { LoginPage } from './pages/LoginPage'
import { LogoutPage } from './pages/LogoutPage'
import { HomePage } from './pages/HomePage'
import { LaptopsPage } from './pages/LaptopsPage'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={< Navigate to="/home" />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/dashboard-manager" element={<DashboardManagerPage />} />
        <Route path="/dashboard-viewer" element={<DashboardViewPage />} />
        <Route path="/laptops" element={< LaptopsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
