export const FilterBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="montebello-search-container">
      <div className="input-group">
        <label>Buscar propiedad:</label>
        <input
          type="text"
          placeholder="Ej. Villa, Penthouse..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="montebello-input"
        />
      </div>
      
      {/* Añadimos un segundo input simulado para igualar la simetría de la imagen */}
      <div className="input-group">
        <label>Tipo de operación:</label>
        <input
          type="text"
          placeholder="Venta o Renta"
          className="montebello-input"
          disabled
        />
      </div>

      <button className="btn-beige">BUSCAR AHORA</button>
    </div>
  );
};