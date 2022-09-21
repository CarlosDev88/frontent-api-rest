import { axiosInstance } from "../helpers/axios-config";

const getUsuarios = () => {
  return axiosInstance.get("usuario", {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const createUsuarios = (data) => {
  return axiosInstance.post("usuario", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const updateUsuarios = (data, id) => {
  return axiosInstance.put(`usuario/${id}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const getUsuarioPorId = (usuarioId) => {
  return axiosInstance.get(`usuario/${usuarioId}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export { getUsuarios, createUsuarios, updateUsuarios, getUsuarioPorId };
