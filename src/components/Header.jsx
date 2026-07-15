import { Link } from 'react-router-dom';
// 1. Importamos la imagen desde la carpeta assets
import logo from '../assets/logo.jpg';

export const Header = () => {
  return (
    <header className="black-header">
      <nav className="header-nav left-nav">
        <Link to="/nosotros">NOSOTROS</Link>
        <Link to="/">PROPIEDADES</Link>
        <Link to="/servicios">SERVICIOS</Link>
      </nav>
      
      {/* 2. Insertamos la imagen como logo central */}
      <div className="logo-center">
        <Link to="/">
          <img src={logo} alt="Cedro & Junípero Logo" className="logo-img" />
        </Link>
      </div>
      
      <nav className="header-nav right-nav">
        <Link to="/desarrollos">DESARROLLOS</Link>
        <Link to="/arquitectura">ARQUITECTURA</Link>
        <Link to="/contacto">CONTACTO</Link>
        <button className="btn-header-gold">AGENDAR CITA</button>
      </nav>
    </header>
  );
};