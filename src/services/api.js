import axios from "axios";

const BASE_URL = `https://hp-api.herokuapp.com/api/characters`;

export const Api = axios.create({
  baseURL: BASE_URL
});