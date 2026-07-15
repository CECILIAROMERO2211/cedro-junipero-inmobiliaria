import { useNavigate } from 'react-router-dom';

export const PropertyCard = ({ property }) => {
  const { id, title, price, type, img, beds, baths, area } = property;
  
  // Hook para programar la navegación
  const navigate = useNavigate();

  const handleDetails = () => {
    // Al hacer clic, enviamos al usuario a la ruta con el ID específico
    navigate(`/propiedad/${id}`);
  };

  return (
    <div className="montebello-card">
      <div className="card-img-container">
        <img src={img} alt={title} className="card-image" />
        <span className="card-badge">{type}</span>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">
          ${price.toLocaleString()} {type === 'Renta' ? '/ mes' : 'USD'}
        </p>

        <div className="card-details">
          <span>{beds} Hab</span>
          <span className="separator">|</span>
          <span>{baths} Baños</span>
          <span className="separator">|</span>
          <span>{area} m²</span>
        </div>
        
        {/* Conectamos el botón a nuestra función de navegación */}
        <button className="btn-outline" onClick={handleDetails}>
          VER DETALLES
        </button>
      </div>
    </div>
  );
};