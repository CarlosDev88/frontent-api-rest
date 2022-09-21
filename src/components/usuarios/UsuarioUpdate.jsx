import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getUsuarioPorId, updateUsuarios } from "../../service/usuarioService";
import { useForm } from "../hooks/useForm";

export const UsuarioUpdate = () => {
  const [usuario, setUsuario] = useState({});
  const { usuarioId = "" } = useParams();
  let navigate = useNavigate();

  const { setFormState, formState, onInputChange, nombre, email, estado } =
    useForm({
      nombre: "",
      email: "",
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

      const { data } = await updateUsuarios(formState, usuarioId);
      console.log("usuario Actualizado---->", data);

      Swal.close();
      navigate("/usarios");
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

  const getUsuario = async () => {
    try {
      const { data } = await getUsuarioPorId(usuarioId);

      setUsuario(data);
      console.log("data-->", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFormState({
      nombre: usuario.nombre,
      email: usuario.email,
      estado: usuario.estado,
    });
  }, [usuario]);

  useEffect(() => {
    try {
      getUsuario();
    } catch (error) {
      console.log(error);
    }
  }, [usuarioId]);

  return (
    <div className="container">
      <h2 className="pb-2 pt-2">Actualizar Usuario</h2>
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
              <label className="form-label">Correo</label>
              <input
                type="email"
                name="email"
                value={email}
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
