package com.pmtapp.control360.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Producto") // asegurarse que la tabla esté en minúscula si en SQL Server está así
@Getter
@Setter
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item")
    private Integer item;

    @Column(name = "cantidad")
    private Integer cantidad;

    @Column(name = "NombreTecnico", nullable = false, length = 255)
    private String nombreTecnico;


    @Column(name = "medida", length = 50)
    private String medida;


    @Column(name = "UnidadMedida", length = 50)
    private String unidadMedida;

    @Column(name = "Marca", length = 255)
    private String marca;

    @Column(name = "Descripcion")
    @Lob
    private String descripcion;

    @Column(name = "imagen", length = 255)
    private String imagen;

    @Column(name = "proveedor")
    private Integer proveedor;

    @Column(name = "ubicacion", length = 255)
    private String ubicacion;

    @Column(name = "estado", length = 50)
    private String estado;

    @Column(name = "categoria", length = 255)
    private String categoria;
}
