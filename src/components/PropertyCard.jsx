import { useNavigate } from 'react-router-dom';

export const PropertyCard = ({ property }) => {
  // AÑADIMOS ESTO PARA DEPURAR:
  console.log("Datos de la propiedad recibidos:", property);
  
  const { id, title, price, type, img, beds, baths, area } = property;
  
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/propiedad/${id}`);
  };

  return (
    <div className="montebello-card">
      <div className="card-img-container">
        {/* Si ves esto en el DOM pero no la imagen, el problema es el 'src' */}
        <img src={img} alt={title} className="card-image" />
        <span className="card-badge">{type}</span>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">
          ${price?.toLocaleString()} {type === 'Renta' ? '/ mes' : 'USD'}
        </p>

        <div className="card-details">
          <span>{beds} Hab</span>
          <span className="separator">|</span>
          <span>{baths} Baños</span>
          <span className="separator">|</span>
          <span>{area} m²</span>
        </div>
        
        <button className="btn-outline" onClick={handleDetails}>
          VER DETALLES
        </button>
      </div>
    </div>
  );
};