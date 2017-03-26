import axios from 'axios';

/* ----------- Swapi REST API endpoints ----------- */
const SWAPI_ROOT = 'http://swapi.co/api';

const swapiQueries = {
  /* ----------- Fetch data for Schema ----------- */
  Films: {
    films(films) {
      return films.results;
    }
  },
  Query: {
    swapi() {
      return axios.get(`${SWAPI_ROOT}/films`)
      .then(res => res.data);
    },
    film(query, args) {
      return axios.get(`${SWAPI_ROOT}/films/${args.id}`)
      .then(res => res.data);
    }
  }
};

export default swapiQueries;
