import axios from "axios";
const baseUrl = `https://pokeapi.co/api/v2/pokemon`;

const getSiglePokemon = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export { getSiglePokemon };
