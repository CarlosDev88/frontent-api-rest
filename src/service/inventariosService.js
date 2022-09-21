import { axiosInstance } from "../helpers/axios-config";

const getInventarios = () => {
  return axiosInstance.get("inventario", {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const createInventarios = (data) => {
  return axiosInstance.post("inventario", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const updateInventarios = (data, id) => {
  return axiosInstance.put(`inventario/${id}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const getInventarioPorId = (inventarioId) => {
  return axiosInstance.get(`inventario/${inventarioId}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export {
  getInventarios,
  createInventarios,
  updateInventarios,
  getInventarioPorId,
};
