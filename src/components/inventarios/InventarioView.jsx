import React, { useEffect, useState } from "react";
import { getInventarios } from "../../service/inventariosService";
import { InventarioCard } from "./InventarioCard";
import { InventarioNew } from "./InventarioNew";

export const InventarioView = () => {
  const [inventarios, setInventarios] = useState([]);
  const [opeModalInventario, setOpenModalInven] = useState(false);

  const listarInventarios = async () => {
    try {
      const { data } = await getInventarios();
      setInventarios(data);
    } catch (error) {
      console.error(`${error.message}`, error);
    }
  };

  useEffect(() => {
    listarInventarios();
  }, [inventarios]);

  const handleOpenModal = () => {
    setOpenModalInven(!opeModalInventario);
  };

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {inventarios.map((inventario) => (
          <InventarioCard inventario={inventario} key={inventario._id} />
        ))}
      </div>
      {opeModalInventario && <InventarioNew />}
      <button className="btn btn-primary fab" onClick={handleOpenModal}>
        <i
          className={`fa-sharp fa-solid ${
            !opeModalInventario ? "fa-plus" : "fa-minus"
          }`}
        />
      </button>
    </div>
  );
};
