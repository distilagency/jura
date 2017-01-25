import graphqlSchema from 'graphql_json';
import axios from 'axios';

/* ----------- Swapi REST API endpoints ----------- */
const SWAPI_ROOT = 'http://swapi.co/api';

/* ----------- GraphQL Schema using graph.ql ----------- */
const swapiSchema = graphqlSchema(`
  type Films {
    # Schema for films array returned from swapi
    films: [Film],
    count: Int
  }

  type Film {
    # Schema for individual film returned from swapi
    title: String,
    opening_crawl: String,
    episode_id: Int,
    release_date: String
  }

  type Query {
    swapi: Films
    film (id: Int): Film
  }
`, {
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
});

export default swapiSchema;
