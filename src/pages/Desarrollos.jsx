import { useNavigate } from 'react-router-dom';

export const Desarrollos = () => {
  const navigate = useNavigate();

  return (
    <div className="beige-bg editorial-page">
      <section className="intro-section page-intro-compact">
        <span className="small-caps-subtitle">
          Proyectos de autor
        </span>

        <h1 className="title-main-dark">
          Desarrollos Exclusivos
        </h1>

        <p className="intro-text">
          Colaboramos con arquitectos y desarrolladores para
          presentar proyectos de baja densidad, materiales
          nobles y una relación excepcional con su entorno.
        </p>
      </section>

      <section className="development-feature">
        <div
          className="development-image"
          role="img"
          aria-label="Residencia contemporánea de lujo"
        />

        <div className="development-copy">
          <span className="small-caps-subtitle">
            Próximamente
          </span>

          <h2 className="title-editorial">
            Colección Reserva
          </h2>

          <p>
            Residencias privadas concebidas para quienes buscan
            diseño contemporáneo, tranquilidad y una inversión
            con visión de largo plazo.
          </p>

          <button
            type="button"
            className="btn-solid-gold"
            onClick={() => navigate('/contacto')}
          >
            RECIBIR INFORMACIÓN
          </button>
        </div>
      </section>
    </div>
  );
};