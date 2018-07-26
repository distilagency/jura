import axios from 'axios';
import { ROOT_API } from '../../../config/app';

// List of Swapi GraphQL Endpoints (/server/init/graphql)
const filmsEndpoint = axios.get(`${ROOT_API}/films`);
const filmEndpoint = id => axios.get(`${ROOT_API}/film?id=${id}`);

// starwarsService object containing above API requests
// which gets imported in fetchData
const starwarsService = {
  getFilms: () => filmsEndpoint,
  getFilm: id => filmEndpoint(id),
};

export default starwarsService;
