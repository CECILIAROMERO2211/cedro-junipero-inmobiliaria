export const Nosotros = () => {
  return (
    <div className="nosotros-page beige-bg">
      <section className="intro-section">
        <span className="small-caps-subtitle">Nuestra Historia</span>
        <h1 className="title-main-dark">Legado de Exclusividad</h1>
        <p className="intro-text">
          Fundada con la visión de redefinir el mercado inmobiliario de ultra-lujo, 
          Cedro & Junípero no es solo una agencia; es una firma de asesoría patrimonial y curaduría de estilo de vida. 
          Entendemos que el verdadero lujo reside en los detalles, la privacidad y el servicio impecable.
        </p>
      </section>

      <section className="features-section" style={{ paddingTop: 0 }}>
        <div className="features-grid-2x2">
          <div 
            className="feature-block image-bg" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
          ></div>
          <div className="feature-block solid-bg">
            <div className="feature-content">
              <h3 className="feature-title">Filosofía</h3>
              <p className="feature-text">
                Creemos fervientemente en el "Lujo Silencioso". Seleccionamos propiedades que no necesitan ser ostentosas para destacar, sino que ofrecen un diseño arquitectónico superior, un respeto profundo por el entorno y un refugio de paz absoluta para sus habitantes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};