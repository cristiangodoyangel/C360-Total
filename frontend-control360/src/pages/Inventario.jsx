import { useEffect, useState } from "react";
import { obtenerProductos } from "../api";

export default function Inventario() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos().then(setProductos).catch((e) => {
      console.error("Error:", e.message);
    });
  }, []);

  return (
    <div>
      <h2 className="mb-4">📦 Inventario de Bodega</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-warning text-center">
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
        <tbody className="text-center">
          {productos.map((p) => (
            <tr key={p.item}>
              <td>{p.nombreTecnico}</td>
              <td>{p.cantidad}</td>
              <td>{p.medida}</td>
              <td>{p.ubicacion}</td>
              <td>{p.estado}</td>
              <td>{p.categoria}</td>
              <td>
                {p.imagen ? (
                  <img src={p.imagen} alt="img" width="50" height="50" />
                ) : (
                  <span className="text-muted">Sin imagen</span>
                )}
              </td>
              <td>
                <button className="btn btn-sm btn-warning me-2">
                  ✏️
                </button>
                <button className="btn btn-sm btn-danger">
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
