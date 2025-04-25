import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ width: '250px', minHeight: '100vh' }}>
      <h5 className="text-warning">Menú</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/inventario" className="nav-link text-white">Bodega &gt; Inventario</Link>
        </li>
      </ul>
    </div>
  );
}
