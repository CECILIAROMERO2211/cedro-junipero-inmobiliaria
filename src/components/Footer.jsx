import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="brand-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="brand-name-footer">CEDRO & JUNÍPERO</span>
          <p className="footer-slogan">INMOBILIARIA DE AUTOR</p>
        </div>
        
        <div className="footer-links">
          <Link to="/nosotros">Filosofía</Link>
          <Link to="/">Colección</Link>
          <Link to="/arquitectura">Materiales</Link>
          <Link to="/contacto">Contacto Privado</Link>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cedro & Junípero. Todos los derechos reservados. Diseñado en México.</p>
      </div>
    </footer>
  );
};