import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function Inventario() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4><i className="fas fa-warehouse"></i> Inventario de Bodega</h4>
        <div>
          <button className="btn btn-orange me-2">Agregar Producto</button>
          <button className="btn btn-orange">Subir Excel</button>
        </div>
      </div>

      <table className="table table-bordered table-striped table-hover">
        <thead className="bg-orange text-white">
          <tr>
            <th>Nombre Técnico</th>
            <th>Cantidad</th>
            <th>Medida</th>
            <th>Ubicación</th>
            <th>Estado</th>
            <th>Categoría</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.item}>
              <td><a href="#">{p.nombreTecnico}</a></td>
              <td>{p.cantidad}</td>
              <td>{p.medida}</td>
              <td>{p.ubicacion}</td>
              <td>{p.estado}</td>
              <td>{p.categoria}</td>
              <td>
                {p.imagen
                  ? <img src={`https://weblogica.cl/inventario360/images/${p.imagen}`} alt="Producto" width="50" />
                  : <i className="fas fa-image text-muted"></i>}
              </td>
              <td>
                <button className="btn-icon me-2"><i className="fas fa-pencil-alt"></i></button>
                <button className="btn-icon"><i className="fas fa-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventario;
