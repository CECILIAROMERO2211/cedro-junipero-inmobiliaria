import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PropertyContext } from '../context/PropertyContext';

export const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { properties, loading } = useContext(PropertyContext);
  
  // Estado local para la imagen principal
  const [mainImg, setMainImg] = useState('');

  const property = properties.find((prop) => prop.id === parseInt(id));

  // Efecto para cargar la imagen principal cuando la propiedad se encuentra
  useEffect(() => {
    if (property) setMainImg(property.img);
  }, [property]);

  if (loading) return <div className="loader" style={{paddingTop: '10rem'}}>Preparando acceso privado...</div>;
  if (!property) return <div className="no-results" style={{paddingTop: '10rem'}}>Propiedad no encontrada en la colección.</div>;

  return (
    <div className="property-details-page beige-bg">
      <div className="details-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${mainImg})` }}>
        <button className="btn-back" onClick={() => navigate(-1)}>← VOLVER</button>
        <div className="details-hero-content">
          <span className="badge-luxury">{property.type}</span>
          <h1 className="title-editorial text-white">{property.title}</h1>
          <p className="price-luxury">${property.price.toLocaleString()} {property.type === 'Renta' ? '/ mes' : 'USD'}</p>
        </div>
      </div>

      <div className="details-content">
        <div className="specs-bar">
          <span>🛏️ {property.beds} Habitaciones</span>
          <span>🛁 {property.baths} Baños</span>
          <span>📐 {property.area} m²</span>
        </div>

        <div className="gallery-container">
          <h3 className="title-brand" style={{marginBottom: '1rem'}}>Galería Privada</h3>
          <div className="thumbnails-grid">
            {property.gallery.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Vista ${index + 1}`} 
                className={`thumbnail ${mainImg === img ? 'active' : ''}`}
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
        </div>

        <div className="details-description">
          <p>Esta magnífica residencia representa el pináculo del diseño y el confort bajo el sello distintivo de Cedro & Junípero.</p>
        </div>
      </div>
    </div>
  );
};