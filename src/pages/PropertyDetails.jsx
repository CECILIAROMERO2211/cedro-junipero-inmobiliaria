import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PropertyContext } from '../context/property-context';

export const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { properties, loading } = useContext(PropertyContext);

  const [selectedImage, setSelectedImage] = useState({
    propertyId: null,
    image: '',
  });

  const property = properties.find(
    (item) => item.id === Number(id),
  );

  const mainImg =
    selectedImage.propertyId === property?.id
      ? selectedImage.image
      : property?.img ?? '';

  if (loading) {
    return (
      <div className="loader property-status">
        Preparando acceso privado...
      </div>
    );
  }

  if (!property) {
    return (
      <div className="no-results property-status">
        Propiedad no encontrada en la colección.
      </div>
    );
  }

  return (
    <div className="property-details-page beige-bg">
      <div
        className="details-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.7)
            ),
            url(${mainImg})
          `,
        }}
      >
        <button
          type="button"
          className="btn-back"
          onClick={() => navigate(-1)}
        >
          ← VOLVER
        </button>

        <div className="details-hero-content">
          <span className="badge-luxury">
            {property.type}
          </span>

          <h1 className="title-editorial text-white">
            {property.title}
          </h1>

          <p className="price-luxury">
            ${property.price.toLocaleString()}{' '}
            {property.type === 'Renta' ? '/ mes' : 'USD'}
          </p>
        </div>
      </div>

      <div className="details-content">
        <div className="specs-bar">
          <span>🛏️ {property.beds} Habitaciones</span>
          <span>🛁 {property.baths} Baños</span>
          <span>📐 {property.area} m²</span>
        </div>

        <div className="gallery-container">
          <h2 className="title-brand gallery-title">
            Galería Privada
          </h2>

          <div className="thumbnails-grid">
            {property.gallery.map((image, index) => (
              <button
                type="button"
                className="thumbnail-button"
                key={image}
                onClick={() =>
                  setSelectedImage({
                    propertyId: property.id,
                    image,
                  })
                }
                aria-label={`Mostrar vista ${index + 1} de ${property.title}`}
              >
                <img
                  src={image}
                  alt={`Vista ${index + 1} de ${property.title}`}
                  className={`thumbnail ${
                    mainImg === image ? 'active' : ''
                  }`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="details-description">
          <p>
            Esta magnífica residencia representa el pináculo del
            diseño y el confort bajo el sello distintivo de
            Cedro & Junípero.
          </p>
        </div>
      </div>
    </div>
  );
};