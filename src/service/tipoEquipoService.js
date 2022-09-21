import { axiosInstance } from "../helpers/axios-config";

const getTiposEquipos = () => {
  return axiosInstance.get("tipo-equipo", {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const createTiposEquipos = (data) => {
  return axiosInstance.post("tipo-equipo", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const updateTiposEquipos = (data, id) => {
  return axiosInstance.put(`tipo-equipo/${id}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const getTipoEquipoPorId = (tipoEquipoId) => {
  return axiosInstance.get(`tipo-equipo/${tipoEquipoId}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export {
  getTiposEquipos,
  createTiposEquipos,
  updateTiposEquipos,
  getTipoEquipoPorId,
};
