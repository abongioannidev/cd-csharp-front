import axios from "axios";
const InstanceDatosMedicosAxios = axios.create({ baseURL: "https://localhost:5001/api/Producto" });
const headerConfig = {
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    authorization: "Bearer" + window.localStorage.getItem("access_token"),
  },
};

export const getProductos = (param) => {
  return InstanceDatosMedicosAxios.get(`/${param}`, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const putProducto = (param) => {
  const data = JSON.stringify(param);
  return InstanceDatosMedicosAxios.put("",data, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const postProducto = (param) => {
  const data = JSON.stringify(param);
  return InstanceDatosMedicosAxios.post("",data, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteProducto = (param) => {
  return InstanceDatosMedicosAxios.delete(`/${param}`, headerConfig)
    .then((response) => {
      return response.data;
    }) 
    .catch((error) => {
      throw error;
    });
};
