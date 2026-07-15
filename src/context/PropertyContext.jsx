import { PropertyContext } from './property-context';

const propertyData = [
  {
    id: 1,
    title: 'Residencia Cedro',
    price: 1500000,
    type: 'Venta',
    img: '/images/residencia-cedro.jpg',
    beds: 3,
    baths: 2,
    area: 120,
    gallery: [
      '/images/residencia-cedro.jpg',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    id: 2,
    title: 'Departamento Junípero',
    price: 2500000,
    type: 'Venta',
    img: '/images/departamento-junipero.jpg',
    beds: 2,
    baths: 2,
    area: 95,
    gallery: [
      '/images/departamento-junipero.jpg',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=85',
    ],
  },
];

export const PropertyProvider = ({ children }) => {
  return (
    <PropertyContext.Provider
      value={{
        properties: propertyData,
        loading: false,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};