import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Nosotros } from './pages/Nosotros';
import { Servicios } from './pages/Servicios';
import { Desarrollos } from './pages/Desarrollos';
import { Arquitectura } from './pages/Arquitectura';
import { PropertyDetails } from './pages/PropertyDetails';
import { Contacto } from './pages/Contacto';

const App = () => {
  return (
    <Router>
      <div className="montebello-layout">
        <Header />

        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/desarrollos" element={<Desarrollos />} />
            <Route path="/arquitectura" element={<Arquitectura />} />
            <Route path="/propiedad/:id" element={<PropertyDetails />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;