import axios from "axios";

const api = axios.create({
  baseURL: "http://nijinserver.herokuapp.com/dummy/shopping",
});

export const getShoppingList = async (category) => {
  if (!category) return [];

  return await api.get(`/shop/${category}`);
};

export const getFeatures = async () => {
  return await api.get("/features");
};
