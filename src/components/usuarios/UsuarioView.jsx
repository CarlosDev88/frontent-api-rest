import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { createUsuarios, getUsuarios } from "../../service/usuarioService";
import { useForm } from "../hooks/useForm";

export const UsuarioView = () => {
  const [usuarios, setUsuarios] = useState([]);

  const { formState, onInputChange, onResetFomr, nombre, email, estado } =
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

      const { data } = await createUsuarios(formState);
      console.log("usuario creado---->", data);

      Swal.close();
      onResetFomr();
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

  const listarUsuarios = async () => {
    try {
      const { data } = await getUsuarios();

      setUsuarios(data);
    } catch (error) {
      console.error(`${error.message}`, error);
    }
  };

  useEffect(() => {
    listarUsuarios();
  }, [formState]);

  const fecha = (f) => {
    let fecha = new Date(f);
    return `${fecha.getMonth()}/${fecha.getDate()}/${fecha.getFullYear()}`;
  };

  return (
    <div className="container">
      <h2 className="pb-2 pt-2">Crear nuevos usuarios</h2>
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
            <button className="btn btn-primary">Guradar</button>
          </div>
        </div>
      </form>

      <h2 className="pb-2 pt-2">Lista de Usuarios registrados</h2>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Fecha creación</th>
            <th scope="col">Fecha Actualización</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(
            (
              { email, estado, fechaActualizacion, fechaCreacion, nombre, _id },
              index
            ) => (
              <tr key={_id}>
                <th scope="row">{index + 1}</th>
                <td>{nombre}</td>
                <td>{email}</td>
                <td>{estado}</td>
                <td>{fecha(fechaCreacion)}</td>
                <td>{fecha(fechaActualizacion)}</td>
                <td>
                  {
                    <button className="btn  btn-success">
                      <Link
                        to={`usuario/edit/${_id}`}
                        style={{
                          textDecoration: "none",
                          color: "#fff",
                          fontWeight: "normal",
                        }}
                      >
                        Editar
                      </Link>
                    </button>
                  }
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
