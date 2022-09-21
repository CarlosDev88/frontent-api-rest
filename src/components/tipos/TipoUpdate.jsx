import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getTipoEquipoPorId,
  updateTiposEquipos,
} from "../../service/tipoEquipoService";
import { useForm } from "../hooks/useForm";

export const TipoUpdate = () => {
  const [tipoEquipo, setTipoEquipo] = useState({});
  const { tipoId = "" } = useParams();
  let navigate = useNavigate();

  const { setFormState, formState, onInputChange, nombre, estado } = useForm({
    nombre: "",
    estado: "",
  });

  const handleOnsubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        allowOutsideClick: false,
        text: "loading...",
      });

      Swal.showLoading();

      const { data } = await updateTiposEquipos(formState, tipoId);
      console.log("tipo equipo Actualizada---->", data);

      Swal.close();
      navigate("/tipos");
    } catch (error) {
      Swal.close();
      let mensaje = "";
      if (error && error.response.data) {
        mensaje = `ocurrio el siguiente error :${error.response.data}`;
      } else {
        mensaje = "Ocurrio un Error, por favor intenta mas tarde";
      }
      Swal.fire("Error", mensaje, "error");
    }
  };

  const getMarca = async () => {
    try {
      console.log("marcasId-->", tipoId);
      const { data } = await getTipoEquipoPorId(tipoId);

      setTipoEquipo(data);
      console.log("data en getUsuario-->", data);
    } catch (error) {
      console.log(error.mensaje);
    }
  };

  useEffect(() => {
    setFormState({
      nombre: tipoEquipo.nombre,
      estado: tipoEquipo.estado,
    });
  }, [tipoEquipo]);

  useEffect(() => {
    try {
      getMarca();
    } catch (error) {
      console.log(error);
    }
  }, [tipoId]);

  return (
    <div className="container">
      <h2 className="pb-2 pt-2">Actualizar Tipos Equipo</h2>
      <hr />
      <form onSubmit={(e) => handleOnsubmit(e)} className="pt-4 pb-4">
        <div className="row">
          <div className="col">
            <div className="form-group mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={onInputChange}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group mb-3">
              <label className="form-label">Estado</label>

              <select
                className="form-select"
                name="estado"
                value={estado}
                onChange={onInputChange}
                required
              >
                <option>--SELECCIONE---</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="btn btn-primary">Actualizar</button>
          </div>
        </div>
      </form>
    </div>
  );
};
