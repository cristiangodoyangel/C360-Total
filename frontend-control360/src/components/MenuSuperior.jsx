function MenuSuperior() {
  return (
    <div className="bg-orange text-white px-4 py-2 d-flex justify-content-between align-items-center">
      <ul className="nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown">Bodega</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Inventario</a></li>
            <li><a className="dropdown-item" href="#">Entrega de Materiales</a></li>
            <li><a className="dropdown-item" href="#">Solicitud de Materiales</a></li>
            <li><a className="dropdown-item" href="#">Reportes</a></li>
          </ul>
        </li>
        <li className="nav-item"><a className="nav-link text-white" href="#">Control Documental</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="#">Control de Activos</a></li>
      </ul>
      <div className="fw-bold">PANEL CONTROL</div>
    </div>
  );
}

export default MenuSuperior;
