import { axiosInstance } from "../helpers/axios-config";

const getEstadosEquipos = () => {
  return axiosInstance.get("estado-equipo", {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const createEstadosEquipos = (data) => {
  return axiosInstance.post("estado-equipo", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const updateEstadosEquipos = (data, id) => {
  return axiosInstance.put(`estado-equipo/${id}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const getEstadosEquiposPorId = (EstadosEquiposId) => {
  return axiosInstance.get(`estado-equipo/${EstadosEquiposId}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export {
  getEstadosEquipos,
  createEstadosEquipos,
  updateEstadosEquipos,
  getEstadosEquiposPorId,
};
