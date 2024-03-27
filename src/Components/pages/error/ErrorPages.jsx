import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPages.css'

const ErrorPages = () => {
  return (
    <div className='error-page'>
      <h1>Error 404 - Página no encontrada</h1>
      <h3>Lo sentimos, la página que estás buscando no existe.</h3>
      <Link className="link-error" to="/">Volver a la página principal</Link>
    </div>
  )
}

export default ErrorPages