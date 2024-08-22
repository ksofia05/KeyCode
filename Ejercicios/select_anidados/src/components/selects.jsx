import { useState, useEffect } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");
  const [ciudadInfo, setCiudadInfo] = useState(null);

  console.log('Departamento ID', departamentos)
  console.log('Municipio ID', municipios)

  useEffect(() => {
    if (municipios) {
      fetch(`https://api-colombia.com/api/v1/City/${municipios}`)
        .then(response => response.json())
        .then(data => setCiudadInfo(data))
        .catch(error => console.error('Error al obtener la información de la ciudad:', error));
    }
  }, [municipios]);

  return (
    <div className="container">
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setDepartamentos(event.target.value);
        }}
      />
      <SelectList
        title="Municipios"
        url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
        manejadorCambio={(event) => {
          setMunicipios(event.target.value);
        }}
      />


      {ciudadInfo && (
        <div className="ciudad-info">
          <h3>Información de la Ciudad</h3>
          <p><strong>Nombre:</strong> {ciudadInfo.name}</p>
          <p><strong>Población:</strong> {ciudadInfo.population}</p>
          <p><strong>Código Postal:</strong> {ciudadInfo.postalCode}</p>
        </div>
      )}
    </div>
  );
};
