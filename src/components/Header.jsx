import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const leftLinks = [
  { to: '/nosotros', label: 'NOSOTROS' },
  { to: '/', label: 'PROPIEDADES' },
  { to: '/servicios', label: 'SERVICIOS' },
];

const rightLinks = [
  { to: '/desarrollos', label: 'DESARROLLOS' },
  { to: '/arquitectura', label: 'ARQUITECTURA' },
  { to: '/contacto', label: 'CONTACTO' },
];

const HeaderLink = ({ to, label, onClick }) => {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        isActive ? 'header-link active' : 'header-link'
      }
    >
      {label}
    </NavLink>
  );
};

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToContact = () => {
    closeMenu();
    navigate('/contacto');
  };

  return (
    <header className="black-header">
      <nav
        className="header-nav left-nav"
        aria-label="Navegación principal izquierda"
      >
        {leftLinks.map((link) => (
          <HeaderLink key={link.to} {...link} />
        ))}
      </nav>

      <div className="logo-center">
        <Link to="/" aria-label="Ir al inicio" onClick={closeMenu}>
          <img
            src={logo}
            alt="Cedro & Junípero"
            className="logo-img"
          />
        </Link>
      </div>

      <nav
        className="header-nav right-nav"
        aria-label="Navegación principal derecha"
      >
        {rightLinks.map((link) => (
          <HeaderLink key={link.to} {...link} />
        ))}

        <button
          type="button"
          className="btn-header-gold"
          onClick={goToContact}
        >
          AGENDAR CITA
        </button>
      </nav>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? 'open' : ''}`}
        aria-label="Navegación móvil"
      >
        {[...leftLinks, ...rightLinks].map((link) => (
          <HeaderLink
            key={`mobile-${link.to}`}
            {...link}
            onClick={closeMenu}
          />
        ))}

        <button
          type="button"
          className="btn-header-gold mobile-appointment"
          onClick={goToContact}
        >
          AGENDAR CITA
        </button>
      </nav>
    </header>
  );
};