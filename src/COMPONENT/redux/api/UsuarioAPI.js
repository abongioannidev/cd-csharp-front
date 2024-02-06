import axios from "axios";
const InstanceDatosMedicosAxios = axios.create({ baseURL: "https://localhost:5001/api/Usuario" });
const headerConfig = {
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    authorization: "Bearer" + window.localStorage.getItem("access_token"),
  },
};

export const getUsuarioNombreYContraseña = (param) => {
  return InstanceDatosMedicosAxios.get(`/${param.param1}/${param.param2}`, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getUsuarioNombre = (param) => {
  return InstanceDatosMedicosAxios.get(`/${param}`, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const postUsuario = (param) => {

  return InstanceDatosMedicosAxios.post(param, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const putUsuario = (param) => {
  const data = JSON.stringify(param);
  return InstanceDatosMedicosAxios.put("",data, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
