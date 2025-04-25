import React from 'react';
import '../App.css';
import homeImage from '../assets/images/control360.png'; // Asegúrate que esta imagen esté en /assets con ese nombre

function Home() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <img src={homeImage} alt="Control360 Home" className="img-fluid rounded" />
          <p className="mt-3 text-muted">
            © 2025 - i360 desarrollado por <a href="https://www.weblogica.cl" target="_blank" rel="noopener noreferrer">www.weblogica.cl</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;