import { useState } from 'react'
import { PlayCircle, Lock } from 'lucide-react'
import { Link } from 'react-router-dom';
import './Styles/Login.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log('Login attempt', { email, password })
  }

  return (
    <div className="login-page-container">
      <div className="login-card-container">
        <div className="login-card-header">
          <h2 className="login-card-header-title">Logo</h2>
        </div>
        <div className="login-card-content">
          <h1 className="login-card-title">Bienvenido de nuevo</h1>
          <p className="login-card-subtitle">Tus ideas, nuestros videos ultra realistas</p>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-form-group">
              <label htmlFor="email" className="login-form-label">Correo electrónico</label>
              <input
                id="email"
                type="email"
                placeholder="tu@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-form-input"
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password" className="login-form-label">Contraseña</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-form-input"
              />
            </div>
            <div className="login-checkbox-group">
              <label className="flex items-center">
                <input type="checkbox" className="login-checkbox" />
                <span className="login-checkbox-label">Recordarme</span>
              </label>
              <a href="#" className="login-link">¿Olvidaste tu contraseña?</a>
            </div>
            <Link to="/Dashboard" className="login-button">Iniciar sesión</Link>
          </form>
        </div>
        <div className="login-card-footer">
          <p className="login-footer-text">¿No tienes una cuenta?</p>
          <Link to="/Signup" className="login-footer-link">Regístrate ahora</Link>
        </div>
      </div>
      <div className="login-additional-info">
        <PlayCircle className="login-additional-info-icon" />
        <p className="login-additional-info-text">Transforma tus ideas en videos impactantes con IA</p>
      </div>
      <p className="login-secure-connection">
        <Lock className="login-secure-icon" /> <span className="login-secure-text">Conexión segura</span>
      </p>
    </div>
  )
  
}