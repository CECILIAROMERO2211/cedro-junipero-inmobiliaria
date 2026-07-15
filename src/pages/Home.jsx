import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropertyContext } from '../context/PropertyContext';
import { PropertyCard } from '../components/PropertyCard';

export const Home = () => {
  const { properties, loading } = useContext(PropertyContext);
  const navigate = useNavigate();

  return (
    <>
      <section className="intro-section beige-bg">
        <h1 className="title-main-dark">El Arte del Buen Vivir</h1>
        <p className="intro-text-luxury">
          En Cedro & Junípero, no solo gestionamos propiedades; curamos legados. 
          Fusionamos arquitectura de vanguardia, privacidad absoluta y una 
          integración armónica con el entorno para ofrecer una selección diseñada 
          para quienes no aceptan concesiones.
        </p>
        
        <button className="btn-solid-gold" onClick={() => navigate('/nosotros')}>
          DESCUBRIR NUESTRA ESENCIA
        </button>
      </section>

      <section className="catalog-section">
        <div className="catalog-header">
          <span className="small-caps-subtitle">Colección Privada</span>
          <h2 className="title-brand">Propiedades Disponibles</h2>
        </div>

        {loading ? (
          <div className="loader">Cargando colección exclusiva...</div>
        ) : (
          <div className="properties-grid">
            {properties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};