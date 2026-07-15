import { useState } from 'react';

export const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de envío a servidor
    setTimeout(() => setEnviado(true), 800);
  };

  return (
    <div className="contacto-page beige-bg">
      <div className="contacto-container">
        <h1 className="title-main-dark">Cita Privada</h1>
        <p className="intro-text" style={{marginBottom: '2rem'}}>
          Permítanos asesorarle en su próxima inversión. Un embajador de Cedro & Junípero se pondrá en contacto con usted.
        </p>

        {enviado ? (
          <div className="success-message">
            <h3 className="title-brand">Mensaje Recibido</h3>
            <p>Gracias por su interés. Le contactaremos a la brevedad.</p>
          </div>
        ) : (
          <form className="luxury-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre Completo</label>
              <input type="text" required onChange={(e) => setFormData({...formData, nombre: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Requerimientos Especiales</label>
              <textarea rows="4" required onChange={(e) => setFormData({...formData, mensaje: e.target.value})}></textarea>
            </div>
            <button type="submit" className="btn-solid-gold w-100">SOLICITAR ATENCIÓN</button>
          </form>
        )}
      </div>
    </div>
  );
};