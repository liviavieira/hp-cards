import axios from "axios";

const BASE_URL = `http://hp-api.herokuapp.com/api/characters`;

export const Api = axios.create({
  baseURL: BASE_URL
});