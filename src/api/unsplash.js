import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
        Authorization: 'Client-ID rFaUDtVGkvZRed6M5NA6-UVMl9rLTeJyjb0UmcMuwr4'
      }
});
