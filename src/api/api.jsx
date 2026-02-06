import axios from 'axios';

const fullURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: fullURL,
});

export {
  api,
  fullURL
}
