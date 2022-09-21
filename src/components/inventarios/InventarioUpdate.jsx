import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getEstadosEquipos } from "../../service/estadoEquipoService";
import {
  getInventarioPorId,
  updateInventarios,
} from "../../service/inventariosService";
import { getMarcas } from "../../service/marcaService";
import { getTiposEquipos } from "../../service/tipoEquipoService";
import { getUsuarios } from "../../service/usuarioService";
import { useForm } from "../hooks/useForm";

export const InventarioUpdate = () => {
  const [inventario, setInventario] = useState({});
  const { inventarioId = "" } = useParams();

  const [usuarios, setUsuarios] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [estados, setEstados] = useState([]);

  const {
    setFormState,
    onInputChange,
    serial,
    modeloEquipo,
    descripcion,
    color,
    foto,
    fechaCompra,
    precio,
    usuario,
    marca,
    tipoEquipo,
    EstadoEquipo,
  } = useForm({
    serial: "",
    modeloEquipo: "",
    descripcion: "",
    color: "",
    foto: "",
    fechaCompra: "",
    precio: "",
    usuario: "",
    marca: "",
    tipoEquipo: "",
    EstadoEquipo: "",
  });

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    const inventario = {
      serial,
      modeloEquipo,
      descripcion,
      color,
      foto,
      fechaCompra,
      precio,
      usuario: {
        _id: usuario,
      },
      marca: {
        _id: marca,
      },
      tipoEquipo: {
        _id: tipoEquipo,
      },
      EstadoEquipo: {
        _id: EstadoEquipo,
      },
    };

    console.log("inventario-->", inventario);
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: "loading...",
      });

      Swal.showLoading();

      const { data } = await updateInventarios(inventario, inventarioId);

      console.log("inventario actualizado---->", data);

      Swal.close();
    } catch (error) {
      console.log(error.response.data);
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

  const getInventario = async () => {
    try {
      const { data } = await getInventarioPorId(inventarioId);

      setInventario(data);
      console.log("data-->", data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async (getFun, setFun) => {
    const { data } = await getFun();
    setFun(data);
  };

  useEffect(() => {
    try {
      getData(getUsuarios, setUsuarios);
      getData(getMarcas, setMarcas);
      getData(getTiposEquipos, setTipos);
      getData(getEstadosEquipos, setEstados);
      getInventario();
    } catch (error) {
      console.log(error);
    }
  }, [inventarioId]);

  useEffect(() => {
    if (inventario) {
      setFormState({
        serial: inventario.serial,
        modeloEquipo: inventario.modeloEquipo,
        descripcion: inventario.descripcion,
        color: inventario.color,
        foto: inventario.foto,
        fechaCompra: inventario.fechaCompra,
        precio: inventario.precio,
        usuario: inventario.usuario,
        marca: inventario.marca,
        tipoEquipo: inventario.tipoEquipo,
        EstadoEquipo: inventario.EstadoEquipo,
      });
    }
  }, [inventario]);

  return (
    <div className="container-fluid mt-3 mb-2">
      <div className="card">
        <div className="card-header">
          <h5 className="cart-tittle">Detalle activo</h5>
        </div>

        <div className="card-body">
          <div className="">
            <div className="">
              <img src={inventario?.foto} />
            </div>

            <div className="">
              <form onSubmit={(e) => handleOnsubmit(e)}>
                <div className="row">
                  <div className="col">
                    <div className="form-group mb-3">
                      <label className="form-label">Serial</label>
                      <input
                        type="text"
                        name="serial"
                        value={serial}
                        onChange={onInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group mb-3">
                      <label className="form-label">Modelo</label>
                      <input
                        type="text"
                        name="modeloEquipo"
                        value={modeloEquipo}
                        onChange={onInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group mb-3">
                      <label className="form-label">Descripción</label>
                      <input
                        type="text"
                        name="descripcion"
                        value={descripcion}
                        onChange={onInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group mb-3">
                      <label className="form-label">Color</label>
                      <input
                        type="text"
                        name="color"
                        value={color}
                        onChange={onInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* ------------fila 2----------------------- */}

                <div className="row">
                  <div className="col">
                    <div className="form-group mb-3">
                      <label className="form-label">Foto</label>
                      <input
                        type="text"
                        name="foto"
                        value={foto}
                        onChange={onInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group mb-3">
                      <label className="form-label">Fecha Compra</label>
                      <input
                        type="date"
                        name="fechaCompra"
                        value={fechaCompra}
                        onChange={onInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group mb-3">
                      <label className="form-label">Precio</label>
                      <input
                        type="number"
                        name="precio"
                        value={precio}
                        onChange={onInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group mb-3">
                      <label className="form-label">Usuario</label>
                      <select
                        className="form-select"
                        name="usuario"
                        value={usuario}
                        onChange={onInputChange}
                        required
                      >
                        <option>--SELECCIONE---</option>
                        {usuarios.length > 0 &&
                          usuarios.map(({ _id, nombre }) => (
                            <option key={_id} value={_id}>
                              {nombre}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* --------------Fila 3-------------------------- */}

                <div className="row">
                  <div className="col">
                    <div className="form-group mb-3">
                      <label className="form-label">Marca</label>
                      <select
                        className="form-select"
                        name="marca"
                        value={marca}
                        onChange={onInputChange}
                        required
                      >
                        <option>--SELECCIONE---</option>
                        {marcas.length > 0 &&
                          marcas.map(({ _id, nombre }) => (
                            <option key={_id} value={_id}>
                              {nombre}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group mb-3">
                      <label className="form-label">Tipo</label>
                      <select
                        className="form-select"
                        name="tipoEquipo"
                        value={tipoEquipo}
                        onChange={onInputChange}
                        required
                      >
                        <option>--SELECCIONE---</option>
                        {tipos.length > 0 &&
                          tipos.map(({ _id, nombre }) => (
                            <option key={_id} value={_id}>
                              {nombre}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-group mb-3">
                      <label className="form-label">Estado Equipo</label>
                      <select
                        className="form-select"
                        name="EstadoEquipo"
                        value={EstadoEquipo}
                        onChange={onInputChange}
                        required
                      >
                        <option>--SELECCIONE---</option>
                        {estados.length > 0 &&
                          estados.map(({ _id, nombre }) => (
                            <option key={_id} value={_id}>
                              {nombre}
                            </option>
                          ))}
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
          </div>
        </div>
      </div>
    </div>
  );
};
