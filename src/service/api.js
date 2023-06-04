//Base da url: https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/popular?api_key=df22c6b8bc22a39ec7790977bae4c1f6&language=pt-BR


import axios from "axios";


const api = axios.create({
  baseURL:'https://api.themoviedb.org/3/'
})

export default api;