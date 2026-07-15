import { createContext, useState, useEffect } from 'react';

// 1. Creamos el contexto
export const PropertyContext = createContext();

// 2. Creamos el proveedor que envolverá tu aplicación
export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        // Datos completos con los campos que tu componente PropertyCard necesita
        const mockData = [
          { 
            id: 1, 
            title: 'Residencia Cedro', 
            price: 1500000, 
            type: 'Venta',
            img: '/images/residencia-cedro.jpg', // Asegúrate que esta imagen esté en public/images/
            beds: 3, 
            baths: 2, 
            area: 120 
          },
          { 
            id: 2, 
            title: 'Departamento Junípero', 
            price: 2500000, 
            type: 'Venta',
            img: '/images/departamento-junipero.jpg', // Asegúrate que esta imagen esté en public/images/
            beds: 2, 
            baths: 2, 
            area: 95 
          }
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