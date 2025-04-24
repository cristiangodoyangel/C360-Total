package com.pmtapp.control360.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Producto")
@Getter
@Setter
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer item;

    private Integer cantidad;

    @Column(nullable = false, length = 255)
    private String nombreTecnico;

    @Column(length = 50)
    private String medida;

    @Column(length = 50)
    private String unidadMedida;

    @Column(length = 255)
    private String marca;

    @Lob
    private String descripcion;

    @Column(length = 255)
    private String imagen;

    private Integer proveedor;

    @Column(length = 255)
    private String ubicacion;

    @Column(length = 50)
    private String estado;

    @Column(length = 255)
    private String categoria;
}
