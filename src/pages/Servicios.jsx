import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Curaduría Inmobiliaria',
    text: 'Seleccionamos residencias con arquitectura, ubicación y valor patrimonial excepcionales.',
  },
  {
    title: 'Asesoría Patrimonial',
    text: 'Acompañamos cada decisión con análisis de inversión y atención completamente personalizada.',
  },
  {
    title: 'Representación Privada',
    text: 'Gestionamos visitas, negociación y cierre con discreción, precisión y absoluta confidencialidad.',
  },
];

export const Servicios = () => {
  const navigate = useNavigate();

  return (
    <div className="beige-bg editorial-page">
      <section className="intro-section page-intro-compact">
        <span className="small-caps-subtitle">
          Atención a la medida
        </span>

        <h1 className="title-main-dark">
          Servicios Privados
        </h1>

        <p className="intro-text">
          Un servicio inmobiliario diseñado alrededor de su
          patrimonio, sus tiempos y su privacidad.
        </p>
      </section>

      <section className="service-grid-section">
        <div className="service-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.title}
            >
              <h2 className="feature-title">
                {service.title}
              </h2>

              <p className="feature-text">
                {service.text}
              </p>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="btn-solid-gold"
          onClick={() => navigate('/contacto')}
        >
          SOLICITAR ASESORÍA
        </button>
      </section>
    </div>
  );
};