import { useState } from 'react'
import { PlayCircle, Lock } from 'lucide-react'
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
    <div className="page-container">
      <div className="card-container">
        <div className="card-header">
          <h2 className="card-header-title">VideoAI Marketing</h2>
        </div>
        <div className="card-content">
          <h1 className="card-title">Bienvenido de nuevo</h1>
          <p className="card-subtitle">Tus ideas, nuestros videos ultra realistas</p>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                id="email"
                type="email"
                placeholder="tu@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="checkbox-group">
              <label className="flex items-center">
                <input type="checkbox" className="checkbox" />
                <span className="checkbox-label">Recordarme</span>
              </label>
              <a href="#" className="link">¿Olvidaste tu contraseña?</a>
            </div>
            <button type="submit" className="button">Iniciar sesión</button>
          </form>
        </div>
        <div className="card-footer">
          <p className="footer-text">¿No tienes una cuenta?</p>
          <a href="#" className="footer-link">Regístrate ahora</a>
        </div>
      </div>
      <div className="additional-info">
        <PlayCircle className="additional-info-icon" />
        <p className="additional-info-text">Transforma tus ideas en videos impactantes con IA</p>
      </div>
      <p className="secure-connection">
        <Lock className="secure-icon" /> <span className="secure-text">Conexión segura</span>
      </p>
    </div>
  )
  
}