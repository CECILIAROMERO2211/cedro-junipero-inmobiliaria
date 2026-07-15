import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Arquitectura } from './pages/Arquitectura';
import { PropertyDetails } from './pages/PropertyDetails';
import { Contacto } from './pages/Contacto';
// 1. Importa la nueva página
import { Nosotros } from './pages/Nosotros'; 

const App = () => {
  return (
    <Router>
      <div className="montebello-layout">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arquitectura" element={<Arquitectura />} />
          <Route path="/propiedad/:id" element={<PropertyDetails />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* 2. Registra la ruta */}
          <Route path="/nosotros" element={<Nosotros />} /> 
          
          <Route path="*" element={<Home />} /> 
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;