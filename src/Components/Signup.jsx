import { useState } from 'react'
import { PlayCircle, Lock, User, Mail, Key } from 'lucide-react'
import { Link } from 'react-router-dom';
import './Styles/Signup.css'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de registro
    console.log('Signup attempt', formData)
  }

  return (
    <div className="login-page-container">
      <div className="form-container">
        <div className="header-container">
          <h2 className="header-title">VideoAI Marketing</h2>
        </div>
        <div className="form-content">
          <h1 className="form-title">Crea tu cuenta</h1>
          <p className="form-subtitle">Comienza a crear videos impactantes hoy</p>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Nombre completo</label>
              <div className="input-container">
                <User className="input-icon" size={18} />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <div className="input-container">
                <Mail className="input-icon" size={18} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <div className="input-container">
                <Key className="input-icon" size={18} />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
              <div className="input-container">
                <Key className="input-icon" size={18} />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div className="terms-container">
              <input
                type='checkbox'
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeTerms: !!checked }))}
              />
              <label htmlFor="agreeTerms" className="terms-label">
                Acepto los <a href="#" className="terms-link">términos y condiciones</a>
              </label>
            </div>
            <button type="submit" className="submit-button">
              Crear cuenta
            </button>
          </form>
        </div>
        <div className="footer-container">
          <p className="footer-text">¿Ya tienes una cuenta?</p>
          <Link to="/Login" className="footer-link">Iniciar Sesión</Link>
        </div>
      </div>
      <div className="info-container">
        <PlayCircle className="info-icon" />
        <p className="info-text">Transforma tus ideas en videos impactantes con IA</p>
      </div>
      <p className="security-text">
        <Lock className="security-icon" /> Registro seguro
      </p>
    </div>
  );
  
}