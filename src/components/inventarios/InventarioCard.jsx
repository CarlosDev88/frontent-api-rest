import React from "react";

import { Link } from "react-router-dom";

export const InventarioCard = ({ inventario }) => {
  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top" alt="" src={inventario.foto} />
        <div className="card-body">
          <h5 className="card-title">Caracteristicas</h5>
          <hr />
          <p className="card-text">Serial: {inventario.serial}</p>
          <p className="card-text">Marca: {inventario.marca.nombre}</p>
          <p className="card-text">Usuario: {inventario.usuario.nombre}</p>
          <p className="card-text">
            <Link to={`inventarios/edit/${inventario._id}`}>Ver Más...</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
