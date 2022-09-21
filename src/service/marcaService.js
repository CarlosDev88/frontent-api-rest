import { axiosInstance } from "../helpers/axios-config";

const getMarcas = () => {
  return axiosInstance.get("marca", {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const createMarcas = (data) => {
  return axiosInstance.post("marca", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const updateMarcas = (data, id) => {
  return axiosInstance.put(`marca/${id}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

const getMarcaPorId = (marcaId) => {
  return axiosInstance.get(`marca/${marcaId}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export { getMarcas, createMarcas, updateMarcas, getMarcaPorId };
