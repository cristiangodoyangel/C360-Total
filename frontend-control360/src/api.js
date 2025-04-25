const API_URL = "http://localhost:8080";

export async function obtenerProductos() {
  const res = await fetch(`${API_URL}/productos`);
  const data = await res.json();
  return data;
}
