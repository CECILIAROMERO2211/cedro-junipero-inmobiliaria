export const Arquitectura = () => {
  const materiales = [
    { 
      id: 1, 
      nombre: 'Mármol Calacatta', 
      desc: 'Acabados de lujo importados de Italia, presentes en baños principales y barras de cocina para una estética atemporal.', 
      img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 2, 
      nombre: 'Maderas Nobles', 
      desc: 'Roble europeo y nogal en pisos y carpintería fina, aportando calidez visual y una acústica perfecta a los espacios íntimos.', 
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 3, 
      nombre: 'Concreto Arquitectónico', 
      desc: 'Estructuras expuestas y pulidas que combinan solidez estructural con una estética moderna, industrial y brutalista.', 
      img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 4, 
      nombre: 'Cristal Templado Duo-Vent', 
      desc: 'Ventanales de piso a techo que logran una integración total con el paisaje, ofreciendo máximo aislamiento térmico y acústico.', 
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 5, 
      nombre: 'Acero Corten', 
      desc: 'Detalles en fachadas y celosías con oxidación controlada, un material vivo que evoluciona y se mimetiza con el entorno natural.', 
      img: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 6, 
      nombre: 'Piedra Volcánica', 
      desc: 'Recintos y piedras naturales de la región utilizados en exteriores y muros de acento, celebrando la identidad local.', 
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 7, 
      nombre: 'Paisajismo Endémico', 
      desc: 'Diseño de jardines con flora nativa de bajo mantenimiento, creando microclimas frescos y respetando el ecosistema original.', 
      img: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 8, 
      nombre: 'Domótica Integrada', 
      desc: 'Sistemas inteligentes invisibles para control de iluminación, clima y seguridad, elevando el confort a su máxima expresión.', 
      img: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    }
  ];

  return (
    <div className="arquitectura-page beige-bg">
      <section className="arq-hero">
        <h1 className="title-main-dark">Diseño y Materialidad</h1>
        
        {/* Nueva sección de Filosofía */}
        <div className="filosofia-arq" style={{ maxWidth: '800px', margin: '2rem auto 0', textAlign: 'center' }}>
          <p className="intro-text">
            En Cedro & Junípero, la arquitectura no es solo construir; es esculpir el espacio. 
            Nuestra filosofía se basa en el <strong>Lujo Silencioso</strong>: espacios que no necesitan gritar para ser notados. 
            Cada proyecto es un diálogo entre la luz natural, la topografía del terreno y los materiales nobles.
          </p>
          <p className="intro-text" style={{ marginTop: '1rem' }}>
            Seleccionamos meticulosamente cada elemento buscando la perfección visual, táctil y una durabilidad que trascienda generaciones.
          </p>
        </div>
      </section>
      
      <section className="materiales-section">
        <div className="materiales-grid">
          {materiales.map(mat => (
            <div key={mat.id} className="material-card">
              <div style={{ overflow: 'hidden' }}>
                <img src={mat.img} alt={mat.nombre} className="material-img"/>
              </div>
              <div className="material-info">
                <h3>{mat.nombre}</h3>
                <p>{mat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};