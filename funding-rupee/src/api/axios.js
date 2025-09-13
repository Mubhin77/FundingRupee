// src/api/axios.js
import axios from "axios";

export default axios.create({
  baseURL: "https://fundingrupee-backend-production.up.railway.app", 
  withCredentials: true,
});
