import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MenuSuperior from './components/MenuSuperior';
import Home from './pages/Home';
import Inventario from './pages/Inventario';

function App() {
  return (
    <>
      <Navbar />
      <MenuSuperior />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </>
  );
}

export default App;
