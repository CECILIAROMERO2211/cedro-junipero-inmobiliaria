import { useNavigate } from 'react-router-dom';

export const PropertyCard = ({ property }) => {
  const {
    id,
    title,
    price,
    type,
    img,
    beds,
    baths,
    area,
  } = property;

  const navigate = useNavigate();

  const openProperty = () => {
    navigate(`/propiedad/${id}`);
  };

  return (
    <article className="montebello-card">
      <button
        type="button"
        className="card-img-button"
        onClick={openProperty}
        aria-label={`Ver detalles de ${title}`}
      >
        <div className="card-img-container">
          <img
            src={img}
            alt={title}
            className="card-image"
            loading="lazy"
          />

          <span className="card-badge">{type}</span>
        </div>
      </button>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>

        <p className="card-price">
          ${price.toLocaleString()}{' '}
          {type === 'Renta' ? '/ mes' : 'USD'}
        </p>

        <div
          className="card-details"
          aria-label="Características de la propiedad"
        >
          <span>{beds} Hab</span>
          <span className="separator" aria-hidden="true">
            |
          </span>
          <span>{baths} Baños</span>
          <span className="separator" aria-hidden="true">
            |
          </span>
          <span>{area} m²</span>
        </div>

        <button
          type="button"
          className="btn-outline"
          onClick={openProperty}
        >
          VER DETALLES
        </button>
      </div>
    </article>
  );
};