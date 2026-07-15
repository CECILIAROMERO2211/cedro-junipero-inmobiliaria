import { createContext, useState, useEffect } from 'react';

// 1. Creamos el contexto
export const PropertyContext = createContext();

// 2. Creamos el proveedor que envolverá tu aplicación
export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos (puedes reemplazar esto con un fetch real más adelante)
    const loadProperties = async () => {
      try {
        // Aquí iría tu llamado a una API o base de datos.
        // Por ahora, dejamos un array vacío o datos de prueba.
        const mockData = [
          { id: 1, title: 'Residencia Cedro', price: 'Consulta precio' },
          { id: 2, title: 'Departamento Junípero', price: 'Consulta precio' }
        ];
        
        setProperties(mockData);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar las propiedades:", error);
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  return (
    <PropertyContext.Provider value={{ properties, loading }}>
      {children}
    </PropertyContext.Provider>
  );
};