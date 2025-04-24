package com.pmtapp.control360.service;

import com.pmtapp.control360.model.Producto;

import java.util.List;
import java.util.Optional;

public interface ProductoService {
    List<Producto> obtenerTodos();
    Optional<Producto> obtenerPorId(Integer id);
    Producto guardar(Producto producto);
    void eliminar(Integer id);
}
