import { useState } from 'react';

const initialForm = {
  nombre: '',
  email: '',
  mensaje: '',
};

export const Contacto = () => {
  const [formData, setFormData] = useState(initialForm);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      setEnviado(true);
    }, 800);
  };

  return (
    <div className="contacto-page beige-bg">
      <div className="contacto-container">
        <h1 className="title-main-dark">
          Cita Privada
        </h1>

        <p className="intro-text contacto-intro">
          Permítanos asesorarle en su próxima inversión. Un
          embajador de Cedro & Junípero se pondrá en contacto
          con usted.
        </p>

        {enviado ? (
          <div
            className="success-message"
            role="status"
          >
            <h3 className="title-brand">
              Mensaje Recibido
            </h3>

            <p>
              Gracias por su interés. Le contactaremos a la
              brevedad.
            </p>
          </div>
        ) : (
          <form
            className="luxury-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="nombre">
                Nombre completo
              </label>

              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                required
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Correo electrónico
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">
                Requerimientos especiales
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                required
                value={formData.mensaje}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn-solid-gold w-100"
            >
              SOLICITAR ATENCIÓN
            </button>
          </form>
        )}
      </div>
    </div>
  );
};