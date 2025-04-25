function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white border-bottom shadow-sm px-4 py-2">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src="public/logo.png" alt="PM&T" width="130" className="me-2" />

      </a>
      <div className="dropdown">
        <button className="btn btn-orange dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Iniciar Sesión
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
